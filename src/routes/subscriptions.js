const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Subscriptions with quota usage
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    const countResult = await pool.query(`
      SELECT COUNT(*) FROM user_subscriptions WHERE deleted_at IS NULL
    `);

    const result = await pool.query(`
      SELECT
        us.*,
        u.email as user_email,
        u.username as user_name,
        g.name as group_name,
        g.daily_limit_usd,
        g.weekly_limit_usd,
        g.monthly_limit_usd,
        CASE WHEN g.daily_limit_usd > 0 THEN ROUND((us.daily_usage_usd / g.daily_limit_usd * 100)::numeric, 2) ELSE 0 END as daily_usage_percent,
        CASE WHEN g.weekly_limit_usd > 0 THEN ROUND((us.weekly_usage_usd / g.weekly_limit_usd * 100)::numeric, 2) ELSE 0 END as weekly_usage_percent,
        CASE WHEN g.monthly_limit_usd > 0 THEN ROUND((us.monthly_usage_usd / g.monthly_limit_usd * 100)::numeric, 2) ELSE 0 END as monthly_usage_percent
      FROM user_subscriptions us
      JOIN users u ON us.user_id = u.id
      JOIN groups g ON us.group_id = g.id
      WHERE us.deleted_at IS NULL
      ORDER BY us.created_at DESC
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
    console.error('Error fetching subscriptions:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
