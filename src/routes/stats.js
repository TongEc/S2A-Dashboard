const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Dashboard stats - overview
router.get('/overview', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        (SELECT COUNT(*) FROM users WHERE deleted_at IS NULL) as total_users,
        (SELECT COUNT(*) FROM users WHERE deleted_at IS NULL AND status = 'active') as active_users,
        (SELECT COUNT(*) FROM api_keys WHERE deleted_at IS NULL) as total_api_keys,
        (SELECT COUNT(*) FROM api_keys WHERE deleted_at IS NULL AND status = 'active') as active_api_keys,
        (SELECT COUNT(*) FROM groups WHERE deleted_at IS NULL) as total_groups,
        (SELECT COUNT(*) FROM user_subscriptions WHERE deleted_at IS NULL AND status = 'active') as active_subscriptions,
        (SELECT COALESCE(SUM(balance), 0) FROM users WHERE deleted_at IS NULL) as total_balance,
        (SELECT COUNT(*) FROM usage_logs WHERE created_at >= NOW() - INTERVAL '24 hours') as requests_24h
    `);
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching overview stats:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
