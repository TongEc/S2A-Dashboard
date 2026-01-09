const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Groups list with quota info
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        g.*,
        (SELECT COUNT(*) FROM api_keys ak WHERE ak.group_id = g.id AND ak.deleted_at IS NULL) as api_key_count,
        (SELECT COUNT(*) FROM user_subscriptions us WHERE us.group_id = g.id AND us.deleted_at IS NULL AND us.status = 'active') as active_subscription_count,
        (SELECT COUNT(*) FROM account_groups ag WHERE ag.group_id = g.id) as account_count
      FROM groups g
      WHERE g.deleted_at IS NULL
      ORDER BY g.created_at DESC
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching groups:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
