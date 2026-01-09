const express = require('express');
const router = express.Router();

// 获取公开配置
router.get('/public', (req, res) => {
  res.json({
    title: process.env.DASHBOARD_TITLE || 'S2A Dashboard'
  });
});

module.exports = router;
