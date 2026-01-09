const express = require('express');
const router = express.Router();

// Auth middleware
const requireAuth = (req, res, next) => {
  if (req.session.authenticated) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

router.post('/login', (req, res) => {
  const { password } = req.body;
  if (password === process.env.DASHBOARD_PASSWORD) {
    req.session.authenticated = true;
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Invalid password' });
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

router.get('/auth/check', (req, res) => {
  res.json({ authenticated: !!req.session.authenticated });
});

module.exports = { router, requireAuth };
