const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Usage statistics
router.get('/stats', async (req, res) => {
  try {
    const days = parseInt(req.query.days) || 7;

    const dailyStats = await pool.query(`
      SELECT
        DATE(created_at) as date,
        COUNT(*) as request_count,
        COALESCE(SUM(total_cost), 0) as total_cost,
        COALESCE(SUM(input_tokens), 0) as input_tokens,
        COALESCE(SUM(output_tokens), 0) as output_tokens,
        COUNT(DISTINCT user_id) as unique_users,
        COUNT(DISTINCT api_key_id) as unique_keys
      FROM usage_logs
      WHERE created_at >= NOW() - INTERVAL '1 day' * $1
      GROUP BY DATE(created_at)
      ORDER BY date DESC
    `, [days]);

    const modelStats = await pool.query(`
      SELECT
        model,
        COUNT(*) as request_count,
        COALESCE(SUM(total_cost), 0) as total_cost,
        COALESCE(SUM(input_tokens + output_tokens), 0) as total_tokens
      FROM usage_logs
      WHERE created_at >= NOW() - INTERVAL '1 day' * $1
      GROUP BY model
      ORDER BY request_count DESC
      LIMIT 10
    `, [days]);

    const topUsers = await pool.query(`
      SELECT
        u.id,
        u.email,
        u.username,
        COUNT(*) as request_count,
        COALESCE(SUM(ul.total_cost), 0) as total_cost
      FROM usage_logs ul
      JOIN users u ON ul.user_id = u.id
      WHERE ul.created_at >= NOW() - INTERVAL '1 day' * $1
      GROUP BY u.id, u.email, u.username
      ORDER BY total_cost DESC
      LIMIT 10
    `, [days]);

    res.json({
      dailyStats: dailyStats.rows,
      modelStats: modelStats.rows,
      topUsers: topUsers.rows
    });
  } catch (err) {
    console.error('Error fetching usage stats:', err);
    res.status(500).json({ error: err.message });
  }
});

// Recent usage logs
router.get('/recent', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    const countResult = await pool.query(`
      SELECT COUNT(*) FROM usage_logs
    `);

    const result = await pool.query(`
      SELECT
        ul.id,
        ul.model,
        ul.input_tokens,
        ul.output_tokens,
        ul.total_cost,
        ul.duration_ms,
        ul.created_at,
        u.email as user_email,
        u.username as user_name,
        ak.name as api_key_name,
        CONCAT(LEFT(ak.key, 8), '...') as api_key_prefix
      FROM usage_logs ul
      LEFT JOIN users u ON ul.user_id = u.id
      LEFT JOIN api_keys ak ON ul.api_key_id = ak.id
      ORDER BY ul.created_at DESC
      LIMIT $1 OFFSET $2
    `, [limit, offset]);

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
    console.error('Error fetching recent usage:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
