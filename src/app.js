const express = require('express');
const session = require('express-session');
const path = require('path');

const { router: authRouter, requireAuth } = require('./routes/auth');
const configRouter = require('./routes/config');
const statsRouter = require('./routes/stats');
const usersRouter = require('./routes/users');
const apiKeysRouter = require('./routes/apiKeys');
const groupsRouter = require('./routes/groups');
const subscriptionsRouter = require('./routes/subscriptions');
const usageRouter = require('./routes/usage');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'default_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
app.use('/api', authRouter);
app.use('/api/config', configRouter);
app.use('/api/stats', requireAuth, statsRouter);
app.use('/api/users', requireAuth, usersRouter);
app.use('/api/api-keys', requireAuth, apiKeysRouter);
app.use('/api/groups', requireAuth, groupsRouter);
app.use('/api/subscriptions', requireAuth, subscriptionsRouter);
app.use('/api/usage', requireAuth, usageRouter);

// Serve the main page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
