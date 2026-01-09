const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Users list with pagination
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    const search = req.query.search || '';

    let whereClause = 'WHERE u.deleted_at IS NULL';
    let params = [limit, offset];

    if (search) {
      whereClause += ' AND (u.email ILIKE $3 OR u.username ILIKE $3)';
      params.push(`%${search}%`);
    }

    const countResult = await pool.query(`
      SELECT COUNT(*) FROM users u ${whereClause}
    `, search ? [`%${search}%`] : []);

    const result = await pool.query(`
      SELECT
        u.id,
        u.email,
        u.username,
        u.role,
        u.balance,
        u.concurrency,
        u.status,
        u.created_at,
        u.updated_at,
        (SELECT COUNT(*) FROM api_keys ak WHERE ak.user_id = u.id AND ak.deleted_at IS NULL) as api_key_count,
        (SELECT COUNT(*) FROM user_subscriptions us WHERE us.user_id = u.id AND us.deleted_at IS NULL AND us.status = 'active') as active_subscription_count
      FROM users u
      ${whereClause}
      ORDER BY u.created_at DESC
      LIMIT $1 OFFSET $2
    `, params);

    res.json({
      data: result.rows,
      pagination: {
        page,
        limit,
        total: parseInt(countResult.rows[0].count),
        totalPages: Math.ceil(countResult.rows[0].count / limit)
      }
    });
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: err.message });
  }
});

// User detail with API keys and subscriptions
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const userResult = await pool.query(`
      SELECT * FROM users WHERE id = $1 AND deleted_at IS NULL
    `, [id]);

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const apiKeysResult = await pool.query(`
      SELECT ak.*, g.name as group_name
      FROM api_keys ak
      LEFT JOIN groups g ON ak.group_id = g.id
      WHERE ak.user_id = $1 AND ak.deleted_at IS NULL
      ORDER BY ak.created_at DESC
    `, [id]);

    const subscriptionsResult = await pool.query(`
      SELECT
        us.*,
        g.name as group_name,
        g.daily_limit_usd,
        g.weekly_limit_usd,
        g.monthly_limit_usd
      FROM user_subscriptions us
      JOIN groups g ON us.group_id = g.id
      WHERE us.user_id = $1 AND us.deleted_at IS NULL
      ORDER BY us.created_at DESC
    `, [id]);

    const usageStatsResult = await pool.query(`
      SELECT
        COUNT(*) as total_requests,
        COALESCE(SUM(total_cost), 0) as total_cost,
        COALESCE(SUM(input_tokens), 0) as total_input_tokens,
        COALESCE(SUM(output_tokens), 0) as total_output_tokens
      FROM usage_logs
      WHERE user_id = $1 AND created_at >= NOW() - INTERVAL '30 days'
    `, [id]);

    res.json({
      user: userResult.rows[0],
      apiKeys: apiKeysResult.rows,
      subscriptions: subscriptionsResult.rows,
      usageStats: usageStatsResult.rows[0]
    });
  } catch (err) {
    console.error('Error fetching user detail:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
