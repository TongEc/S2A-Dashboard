const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// API Keys list
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    const countResult = await pool.query(`
      SELECT COUNT(*) FROM api_keys WHERE deleted_at IS NULL
    `);

    const result = await pool.query(`
      SELECT
        ak.id,
        ak.name,
        CONCAT(LEFT(ak.key, 8), '...', RIGHT(ak.key, 4)) as key_masked,
        ak.status,
        ak.created_at,
        u.email as user_email,
        u.username as user_name,
        g.name as group_name,

        -- 请求数指标
        (SELECT COUNT(*) FROM usage_logs ul WHERE ul.api_key_id = ak.id AND ul.created_at >= NOW() - INTERVAL '24 hours') as requests_24h,
        (SELECT COUNT(*) FROM usage_logs ul WHERE ul.api_key_id = ak.id AND ul.created_at >= NOW() - INTERVAL '7 days') as requests_7d,
        (SELECT COUNT(*) FROM usage_logs ul WHERE ul.api_key_id = ak.id) as requests_total,

        -- 金额指标
        (SELECT COALESCE(SUM(total_cost), 0) FROM usage_logs ul WHERE ul.api_key_id = ak.id AND ul.created_at >= NOW() - INTERVAL '24 hours') as cost_24h,
        (SELECT COALESCE(SUM(total_cost), 0) FROM usage_logs ul WHERE ul.api_key_id = ak.id AND ul.created_at >= NOW() - INTERVAL '7 days') as cost_7d,
        (SELECT COALESCE(SUM(total_cost), 0) FROM usage_logs ul WHERE ul.api_key_id = ak.id) as cost_total,

        -- Token指标
        (SELECT COALESCE(SUM(input_tokens + output_tokens), 0) FROM usage_logs ul WHERE ul.api_key_id = ak.id) as total_tokens,

        -- 最后使用时间
        (SELECT MAX(created_at) FROM usage_logs ul WHERE ul.api_key_id = ak.id) as last_used_at

      FROM api_keys ak
      LEFT JOIN users u ON ak.user_id = u.id
      LEFT JOIN groups g ON ak.group_id = g.id
      WHERE ak.deleted_at IS NULL
      ORDER BY (SELECT COALESCE(SUM(total_cost), 0) FROM usage_logs ul WHERE ul.api_key_id = ak.id AND ul.created_at >= NOW() - INTERVAL '24 hours') DESC, ak.created_at DESC
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
    console.error('Error fetching API keys:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
