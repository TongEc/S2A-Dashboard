// ===== Configuration =====
const config = {
  siteName: 'S2A Dashboard',
  githubUrl: 'https://github.com/TongEc/s2a-dashboard'
};

// ===== i18n System =====
const translations = {
  zh: {
    // Login
    'login.title': 'S2A Dashboard',
    'login.subtitle': '请输入管理密码以继续',
    'login.password.placeholder': '请输入密码',
    'login.button': '登录',
    'login.error.wrong': '密码错误，请重试',
    'login.error.network': '登录失败，请检查网络连接',

    // Header
    'header.title': 'S2A Dashboard',
    'header.logout': '退出登录',
    'header.github': 'GitHub Repository',

    // Navigation
    'nav.overview': '总览',
    'nav.users': '用户管理',
    'nav.apikeys': 'API Keys',
    'nav.groups': '分组配额',
    'nav.subscriptions': '订阅管理',
    'nav.usage': '使用统计',

    // Overview Stats
    'stat.total_users': '总用户数',
    'stat.active_users': '活跃用户',
    'stat.api_keys': 'API Keys',
    'stat.groups': '分组数量',
    'stat.subscriptions': '活跃订阅',
    'stat.requests_24h': '24h 请求数',
    'stat.balance': '总配额 (USD)',

    // Overview Charts
    'chart.daily_trend': '近7天使用趋势',
    'chart.model_distribution': '模型使用分布',
    'loading': '加载中...',
    'no_data': '暂无数据',

    // Users Table
    'users.title': '用户列表',
    'users.search': '搜索邮箱或用户名...',
    'users.id': 'ID',
    'users.email': '邮箱',
    'users.username': '用户名',
    'users.role': '角色',
    'users.balance': '余额',
    'users.api_keys': 'API Keys',
    'users.subscriptions': '订阅',
    'users.status': '状态',
    'users.created_at': '注册时间',
    'users.no_data': '暂无用户数据',
    'users.load_error': '加载失败',

    // API Keys Table
    'apikeys.title': 'API Keys 列表',
    'apikeys.rank': '24h排名',
    'apikeys.id': 'ID',
    'apikeys.name': '名称',
    'apikeys.key': 'Key',
    'apikeys.user': '用户',
    'apikeys.group': '分组',
    'apikeys.requests_24h': '24h请求',
    'apikeys.cost_24h': '24h消费',
    'apikeys.cost_7d': '7天消费',
    'apikeys.cost_total': '总消费',
    'apikeys.total_tokens': '总Token',
    'apikeys.last_used': '最后使用',
    'apikeys.status': '状态',
    'apikeys.created_at': '创建时间',
    'apikeys.not_used': '未使用',
    'apikeys.no_data': '暂无API Key数据',

    // Groups Table
    'groups.title': '分组配额管理',
    'groups.id': 'ID',
    'groups.name': '名称',
    'groups.platform': '平台',
    'groups.subscription_type': '订阅类型',
    'groups.rate_multiplier': '费率倍率',
    'groups.daily_limit': '日配额',
    'groups.weekly_limit': '周配额',
    'groups.monthly_limit': '月配额',
    'groups.api_keys': 'API Keys',
    'groups.subscriptions': '订阅数',
    'groups.status': '状态',
    'groups.no_limit': '无限制',
    'groups.no_data': '暂无分组数据',

    // Subscriptions Table
    'subscriptions.title': '订阅与配额使用',
    'subscriptions.user': '用户',
    'subscriptions.group': '分组',
    'subscriptions.daily_usage': '日配额使用',
    'subscriptions.weekly_usage': '周配额使用',
    'subscriptions.monthly_usage': '月配额使用',
    'subscriptions.validity': '有效期',
    'subscriptions.status': '状态',
    'subscriptions.no_limit': '无限制',
    'subscriptions.no_data': '暂无订阅数据',

    // Usage Stats
    'usage.top_users': 'Top 10 用户 (7天)',
    'usage.top_users.user': '用户',
    'usage.top_users.requests': '请求数',
    'usage.top_users.cost': '总消费 (USD)',
    'usage.recent': '最近请求记录',
    'usage.recent.id': 'ID',
    'usage.recent.api_key': 'API Key',
    'usage.recent.user': '用户',
    'usage.recent.model': '模型',
    'usage.recent.input_tokens': '输入Token',
    'usage.recent.output_tokens': '输出Token',
    'usage.recent.cost': '消费',
    'usage.recent.duration': '耗时',
    'usage.recent.time': '时间',
    'usage.no_data': '暂无数据',
    'usage.no_usage': '暂无使用记录',

    // Common
    'common.requests': '请求',
    'common.users': '用户',
    'common.keys': 'Keys',
    'common.total': '共',
    'common.items': '条',

    // Status
    'status.active': '活跃',
    'status.disabled': '已禁用',
    'status.expired': '已过期',
    'status.admin': '管理员',
    'status.user': '用户'
  },
  en: {
    // Login
    'login.title': 'S2A Dashboard',
    'login.subtitle': 'Enter admin password to continue',
    'login.password.placeholder': 'Enter password',
    'login.button': 'Login',
    'login.error.wrong': 'Incorrect password, please try again',
    'login.error.network': 'Login failed, please check network connection',

    // Header
    'header.title': 'S2A Dashboard',
    'header.logout': 'Logout',
    'header.github': 'GitHub Repository',

    // Navigation
    'nav.overview': 'Overview',
    'nav.users': 'Users',
    'nav.apikeys': 'API Keys',
    'nav.groups': 'Groups',
    'nav.subscriptions': 'Subscriptions',
    'nav.usage': 'Usage',

    // Overview Stats
    'stat.total_users': 'Total Users',
    'stat.active_users': 'Active Users',
    'stat.api_keys': 'API Keys',
    'stat.groups': 'Groups',
    'stat.subscriptions': 'Active Subscriptions',
    'stat.requests_24h': '24h Requests',
    'stat.balance': 'Total Quota (USD)',

    // Overview Charts
    'chart.daily_trend': 'Last 7 Days Usage Trend',
    'chart.model_distribution': 'Model Usage Distribution',
    'loading': 'Loading...',
    'no_data': 'No data available',

    // Users Table
    'users.title': 'User List',
    'users.search': 'Search email or username...',
    'users.id': 'ID',
    'users.email': 'Email',
    'users.username': 'Username',
    'users.role': 'Role',
    'users.balance': 'Balance',
    'users.api_keys': 'API Keys',
    'users.subscriptions': 'Subscriptions',
    'users.status': 'Status',
    'users.created_at': 'Created At',
    'users.no_data': 'No users available',
    'users.load_error': 'Failed to load',

    // API Keys Table
    'apikeys.title': 'API Keys List',
    'apikeys.rank': '24h Rank',
    'apikeys.id': 'ID',
    'apikeys.name': 'Name',
    'apikeys.key': 'Key',
    'apikeys.user': 'User',
    'apikeys.group': 'Group',
    'apikeys.requests_24h': '24h Requests',
    'apikeys.cost_24h': '24h Cost',
    'apikeys.cost_7d': '7d Cost',
    'apikeys.cost_total': 'Total Cost',
    'apikeys.total_tokens': 'Total Tokens',
    'apikeys.last_used': 'Last Used',
    'apikeys.status': 'Status',
    'apikeys.created_at': 'Created At',
    'apikeys.not_used': 'Not used',
    'apikeys.no_data': 'No API keys available',

    // Groups Table
    'groups.title': 'Group Quota Management',
    'groups.id': 'ID',
    'groups.name': 'Name',
    'groups.platform': 'Platform',
    'groups.subscription_type': 'Subscription Type',
    'groups.rate_multiplier': 'Rate Multiplier',
    'groups.daily_limit': 'Daily Limit',
    'groups.weekly_limit': 'Weekly Limit',
    'groups.monthly_limit': 'Monthly Limit',
    'groups.api_keys': 'API Keys',
    'groups.subscriptions': 'Subscriptions',
    'groups.status': 'Status',
    'groups.no_limit': 'Unlimited',
    'groups.no_data': 'No groups available',

    // Subscriptions Table
    'subscriptions.title': 'Subscription & Quota Usage',
    'subscriptions.user': 'User',
    'subscriptions.group': 'Group',
    'subscriptions.daily_usage': 'Daily Usage',
    'subscriptions.weekly_usage': 'Weekly Usage',
    'subscriptions.monthly_usage': 'Monthly Usage',
    'subscriptions.validity': 'Validity Period',
    'subscriptions.status': 'Status',
    'subscriptions.no_limit': 'Unlimited',
    'subscriptions.no_data': 'No subscriptions available',

    // Usage Stats
    'usage.top_users': 'Top 10 Users (7 days)',
    'usage.top_users.user': 'User',
    'usage.top_users.requests': 'Requests',
    'usage.top_users.cost': 'Total Cost (USD)',
    'usage.recent': 'Recent Request Logs',
    'usage.recent.id': 'ID',
    'usage.recent.api_key': 'API Key',
    'usage.recent.user': 'User',
    'usage.recent.model': 'Model',
    'usage.recent.input_tokens': 'Input Tokens',
    'usage.recent.output_tokens': 'Output Tokens',
    'usage.recent.cost': 'Cost',
    'usage.recent.duration': 'Duration',
    'usage.recent.time': 'Time',
    'usage.no_data': 'No data available',
    'usage.no_usage': 'No usage logs',

    // Common
    'common.requests': 'requests',
    'common.users': 'users',
    'common.keys': 'Keys',
    'common.total': 'Total',
    'common.items': 'items',

    // Status
    'status.active': 'Active',
    'status.disabled': 'Disabled',
    'status.expired': 'Expired',
    'status.admin': 'Admin',
    'status.user': 'User'
  }
};

// i18n Functions
let currentLang = 'en';

function detectLanguage() {
  const savedLang = localStorage.getItem('language');
  if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
    return savedLang;
  }

  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith('zh')) {
    return 'zh';
  }
  return 'en';
}

function t(key) {
  return translations[currentLang][key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  updatePageLanguage();

  // Reload current tab data to update dynamic content
  loadTabData(currentTab);
}

function updatePageLanguage() {
  // Update page title
  document.title = config.siteName;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });

  // Update all elements with data-i18n-title attribute (for elements with child content like SVG)
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.title = t(key);
  });

  // Update language selector selected value
  document.querySelectorAll('.lang-select').forEach(select => {
    select.value = currentLang;
  });
}

// State
let currentTab = 'overview';
let usersPage = 1;
let apiKeysPage = 1;
let subscriptionsPage = 1;
let recentUsagePage = 1;

// Check auth on page load
async function checkAuth() {
  try {
    const res = await fetch('/api/auth/check');
    const data = await res.json();
    if (data.authenticated) {
      showDashboard();
    } else {
      // Not authenticated, show login screen
      hideInitialLoading();
    }
  } catch (err) {
    console.error('Auth check failed:', err);
    // On error, show login screen
    hideInitialLoading();
  }
}

// Load configuration from server
async function loadConfig() {
  try {
    const res = await fetch('/api/config/public');
    const data = await res.json();
    if (data.title) {
      config.siteName = data.title;
      document.title = data.title;
      // Update translations
      translations.zh['login.title'] = data.title;
      translations.zh['header.title'] = data.title;
      translations.en['login.title'] = data.title;
      translations.en['header.title'] = data.title;
      // Update login title if visible
      const loginTitle = document.querySelector('.login-title');
      if (loginTitle && document.getElementById('login-container').style.display !== 'none') {
        loginTitle.textContent = data.title;
      }
    }
  } catch (err) {
    console.error('Failed to load config:', err);
    // Keep default values on error
  }
}

// Hide initial loading overlay
function hideInitialLoading() {
  const loadingEl = document.getElementById('initial-loading');
  if (loadingEl) {
    loadingEl.classList.add('fade-out');
    setTimeout(() => {
      loadingEl.style.display = 'none';
    }, 300);
  }
}

// Login
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const password = document.getElementById('password-input').value;
  const errorEl = document.getElementById('login-error');

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });

    if (res.ok) {
      errorEl.classList.add('hidden');
      showDashboard();
    } else {
      errorEl.textContent = t('login.error.wrong');
      errorEl.classList.remove('hidden');
    }
  } catch (err) {
    errorEl.textContent = t('login.error.network');
    errorEl.classList.remove('hidden');
  }
});

// Logout
document.getElementById('logout-btn').addEventListener('click', async () => {
  await fetch('/api/logout', { method: 'POST' });
  document.getElementById('dashboard').classList.remove('active');
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('password-input').value = '';
});

// Show dashboard
function showDashboard() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('dashboard').classList.add('active');
  hideInitialLoading();
  // Update header title with config
  const headerTitle = document.querySelector('.header-title');
  if (headerTitle) {
    headerTitle.textContent = config.siteName;
  }
  loadOverviewData();
}

// Tab navigation
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;

    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');

    currentTab = tabId;
    loadTabData(tabId);
  });
});

function loadTabData(tab) {
  switch (tab) {
    case 'overview': loadOverviewData(); break;
    case 'users': loadUsers(); break;
    case 'apikeys': loadApiKeys(); break;
    case 'groups': loadGroups(); break;
    case 'subscriptions': loadSubscriptions(); break;
    case 'usage': loadUsageData(); break;
  }
}

// Format numbers
function formatNumber(num) {
  if (num === null || num === undefined) return '-';
  return new Intl.NumberFormat().format(num);
}

function formatCurrency(num) {
  if (num === null || num === undefined) return '-';
  return '$' + parseFloat(num).toFixed(4);
}

function formatDate(dateStr) {
  if (!dateStr) return '-';
  return new Date(dateStr).toLocaleString('zh-CN');
}

function formatShortDate(dateStr) {
  if (!dateStr) return '-';
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

// Load overview data
async function loadOverviewData() {
  try {
    const [overviewRes, usageRes] = await Promise.all([
      fetch('/api/stats/overview'),
      fetch('/api/usage/stats?days=7')
    ]);

    const overview = await overviewRes.json();
    const usage = await usageRes.json();

    document.getElementById('stat-total-users').textContent = formatNumber(overview.total_users);
    document.getElementById('stat-active-users').textContent = formatNumber(overview.active_users);
    document.getElementById('stat-api-keys').textContent = formatNumber(overview.total_api_keys);
    document.getElementById('stat-groups').textContent = formatNumber(overview.total_groups);
    document.getElementById('stat-subscriptions').textContent = formatNumber(overview.active_subscriptions);
    document.getElementById('stat-requests-24h').textContent = formatNumber(overview.requests_24h);
    document.getElementById('stat-balance').textContent = '$' + Math.floor(parseFloat(overview.total_balance || 0));

    // Daily stats
    const dailyContainer = document.getElementById('daily-stats-container');
    if (usage.dailyStats && usage.dailyStats.length > 0) {
      let html = '<div style="padding: 20px;">';
      usage.dailyStats.forEach(stat => {
        html += `
          <div class="usage-item">
            <span class="usage-model">${formatShortDate(stat.date)}</span>
            <span class="usage-tokens">${formatNumber(stat.request_count)} ${t('common.requests')}</span>
            <span class="usage-tokens">${formatNumber(stat.unique_users)} ${t('common.users')}</span>
            <span class="usage-tokens">${formatNumber(stat.unique_keys)} ${t('common.keys')}</span>
            <span class="usage-cost">${formatCurrency(stat.total_cost)}</span>
          </div>
        `;
      });
      html += '</div>';
      dailyContainer.innerHTML = html;
    } else {
      dailyContainer.innerHTML = `<div class="empty-state">${t('no_data')}</div>`;
    }

    // Model stats
    const modelContainer = document.getElementById('model-stats-container');
    if (usage.modelStats && usage.modelStats.length > 0) {
      let html = '<div style="padding: 20px;">';
      usage.modelStats.forEach(stat => {
        html += `
          <div class="usage-item">
            <span class="usage-model">${stat.model}</span>
            <span class="usage-tokens">${formatNumber(stat.request_count)} ${t('common.requests')}</span>
            <span class="usage-cost">${formatCurrency(stat.total_cost)}</span>
          </div>
        `;
      });
      html += '</div>';
      modelContainer.innerHTML = html;
    } else {
      modelContainer.innerHTML = `<div class="empty-state">${t('no_data')}</div>`;
    }
  } catch (err) {
    console.error('Failed to load overview:', err);
  }
}

// Users
let searchTimeout;
document.getElementById('users-search').addEventListener('input', (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    usersPage = 1;
    loadUsers();
  }, 300);
});

async function loadUsers() {
  const tbody = document.getElementById('users-table-body');
  const search = document.getElementById('users-search').value;

  try {
    const res = await fetch(`/api/users?page=${usersPage}&limit=20&search=${encodeURIComponent(search)}`);
    const data = await res.json();

    if (data.data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" class="empty-state">${t('users.no_data')}</td></tr>`;
    } else {
      tbody.innerHTML = data.data.map(user => `
        <tr>
          <td>${user.id}</td>
          <td>${user.email}</td>
          <td>${user.username || '-'}</td>
          <td><span class="badge badge-${user.role}">${t('status.' + user.role)}</span></td>
          <td>${formatCurrency(user.balance)}</td>
          <td>${user.api_key_count}</td>
          <td>${user.active_subscription_count}</td>
          <td><span class="badge badge-${user.status}">${t('status.' + user.status)}</span></td>
          <td>${formatDate(user.created_at)}</td>
        </tr>
      `).join('');
    }

    renderPagination('users', data.pagination);
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="9" class="error-message">${t('users.load_error')}</td></tr>`;
  }
}

// API Keys
async function loadApiKeys() {
  const tbody = document.getElementById('apikeys-table-body');

  try {
    const res = await fetch(`/api/api-keys?page=${apiKeysPage}&limit=20`);
    const data = await res.json();

    if (data.data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="12" class="empty-state">${t('apikeys.no_data')}</td></tr>`;
    } else {
      tbody.innerHTML = data.data.map((key, index) => {
        // Calculate global rank based on page and index
        const rank = (apiKeysPage - 1) * 20 + index + 1;
        const rankBadge = rank <= 3 ?
          `<strong style="color:var(--candy-${rank === 1 ? 'pink' : rank === 2 ? 'purple' : 'blue'});font-size:16px">#${rank}</strong>` :
          `<span style="color:var(--text-secondary)">#${rank}</span>`;

        return `
        <tr>
          <td>${rankBadge}</td>
          <td>${key.name}</td>
          <td><code style="background:#f3f4f6;padding:4px 8px;border-radius:4px;font-size:12px">${key.key_masked}</code></td>
          <td>${key.user_name || '-'}</td>
          <td>${key.group_name || '-'}</td>
          <td>${formatNumber(key.requests_24h)}</td>
          <td><strong style="color:var(--candy-purple)">${formatCurrency(key.cost_24h)}</strong></td>
          <td><strong style="color:var(--candy-blue)">${formatCurrency(key.cost_7d)}</strong></td>
          <td><strong style="color:var(--candy-pink)">${formatCurrency(key.cost_total)}</strong></td>
          <td style="color:var(--text-secondary)">${formatNumber(key.total_tokens)}</td>
          <td style="color:var(--text-muted);font-size:13px">${key.last_used_at ? formatDate(key.last_used_at) : t('apikeys.not_used')}</td>
          <td><span class="badge badge-${key.status}">${t('status.' + key.status)}</span></td>
        </tr>
      `;
      }).join('');
    }

    renderPagination('apikeys', data.pagination);
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="12" class="error-message">${t('users.load_error')}</td></tr>`;
  }
}

// Groups
async function loadGroups() {
  const tbody = document.getElementById('groups-table-body');

  try {
    const res = await fetch('/api/groups');
    const data = await res.json();

    if (data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="11" class="empty-state">${t('groups.no_data')}</td></tr>`;
    } else {
      tbody.innerHTML = data.map(group => `
        <tr>
          <td>${group.id}</td>
          <td><strong>${group.name}</strong></td>
          <td>${group.platform || '-'}</td>
          <td>${group.subscription_type || '-'}</td>
          <td>${parseFloat(group.rate_multiplier).toFixed(2)}x</td>
          <td>${group.daily_limit_usd ? formatCurrency(group.daily_limit_usd) : t('groups.no_limit')}</td>
          <td>${group.weekly_limit_usd ? formatCurrency(group.weekly_limit_usd) : t('groups.no_limit')}</td>
          <td>${group.monthly_limit_usd ? formatCurrency(group.monthly_limit_usd) : t('groups.no_limit')}</td>
          <td>${group.api_key_count}</td>
          <td>${group.active_subscription_count}</td>
          <td><span class="badge badge-${group.status}">${t('status.' + group.status)}</span></td>
        </tr>
      `).join('');
    }
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="11" class="error-message">${t('users.load_error')}</td></tr>`;
  }
}

// Subscriptions
async function loadSubscriptions() {
  const tbody = document.getElementById('subscriptions-table-body');

  try {
    const res = await fetch(`/api/subscriptions?page=${subscriptionsPage}&limit=20`);
    const data = await res.json();

    if (data.data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" class="empty-state">${t('subscriptions.no_data')}</td></tr>`;
    } else {
      tbody.innerHTML = data.data.map(sub => `
        <tr>
          <td>${sub.user_email || sub.user_name || '-'}</td>
          <td><strong>${sub.group_name}</strong></td>
          <td>
            ${renderQuotaProgress(sub.daily_usage_usd, sub.daily_limit_usd, sub.daily_usage_percent)}
          </td>
          <td>
            ${renderQuotaProgress(sub.weekly_usage_usd, sub.weekly_limit_usd, sub.weekly_usage_percent)}
          </td>
          <td>
            ${renderQuotaProgress(sub.monthly_usage_usd, sub.monthly_limit_usd, sub.monthly_usage_percent)}
          </td>
          <td>${formatShortDate(sub.starts_at)} ~ ${formatShortDate(sub.expires_at)}</td>
          <td><span class="badge badge-${sub.status}">${t('status.' + sub.status)}</span></td>
        </tr>
      `).join('');
    }

    renderPagination('subscriptions', data.pagination);
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="7" class="error-message">${t('users.load_error')}</td></tr>`;
  }
}

function renderQuotaProgress(used, limit, percent) {
  if (!limit || limit === '0' || limit === 0) {
    return `<span style="color:var(--text-muted)">${t('subscriptions.no_limit')}</span>`;
  }

  const p = parseFloat(percent) || 0;
  let colorClass = 'low';
  if (p >= 90) colorClass = 'critical';
  else if (p >= 70) colorClass = 'high';
  else if (p >= 50) colorClass = 'medium';

  return `
    <div class="quota-info">
      <div class="quota-row">
        <span class="quota-label">${formatCurrency(used)} / ${formatCurrency(limit)}</span>
        <span class="quota-value">${p.toFixed(1)}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill ${colorClass}" style="width: ${Math.min(p, 100)}%"></div>
      </div>
    </div>
  `;
}

// Usage
async function loadUsageData() {
  loadUsageStats();
  loadRecentUsage();
}

async function loadUsageStats() {
  try {
    const statsRes = await fetch('/api/usage/stats?days=7');
    const stats = await statsRes.json();

    // Top users
    const topUsersTbody = document.getElementById('top-users-table-body');
    if (stats.topUsers && stats.topUsers.length > 0) {
      topUsersTbody.innerHTML = stats.topUsers.map(user => `
        <tr>
          <td>${user.email || user.username || `User #${user.id}`}</td>
          <td>${formatNumber(user.request_count)}</td>
          <td>${formatCurrency(user.total_cost)}</td>
        </tr>
      `).join('');
    } else {
      topUsersTbody.innerHTML = `<tr><td colspan="3" class="empty-state">${t('usage.no_data')}</td></tr>`;
    }
  } catch (err) {
    console.error('Failed to load usage stats:', err);
  }
}

async function loadRecentUsage() {
  const tbody = document.getElementById('recent-usage-table-body');

  try {
    const res = await fetch(`/api/usage/recent?page=${recentUsagePage}&limit=20`);
    const data = await res.json();

    if (data.data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="9" class="empty-state">${t('usage.no_usage')}</td></tr>`;
    } else {
      tbody.innerHTML = data.data.map(log => `
        <tr>
          <td>${log.id}</td>
          <td>
            <code style="background:#f3f4f6;padding:2px 6px;border-radius:4px;font-size:11px">${log.api_key_prefix || '-'}</code>
          </td>
          <td>${log.user_name || log.user_email || '-'}</td>
          <td><strong>${log.model}</strong></td>
          <td>${formatNumber(log.input_tokens)}</td>
          <td>${formatNumber(log.output_tokens)}</td>
          <td><strong style="color:var(--candy-purple)">${formatCurrency(log.total_cost)}</strong></td>
          <td style="color:var(--text-muted)">${log.duration_ms ? log.duration_ms + 'ms' : '-'}</td>
          <td style="color:var(--text-secondary);font-size:13px">${formatDate(log.created_at)}</td>
        </tr>
      `).join('');
    }

    renderPagination('recent-usage', data.pagination);
  } catch (err) {
    console.error('Failed to load recent usage:', err);
    tbody.innerHTML = `<tr><td colspan="9" class="error-message">${t('users.load_error')}</td></tr>`;
  }
}

// Pagination
function renderPagination(type, pagination) {
  const container = document.getElementById(`${type}-pagination`);
  if (!pagination || pagination.totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  const { page, totalPages, total } = pagination;
  let html = `
    <button class="page-btn" onclick="changePage('${type}', ${page - 1})" ${page <= 1 ? 'disabled' : ''}>←</button>
  `;

  for (let i = 1; i <= Math.min(totalPages, 7); i++) {
    html += `<button class="page-btn ${i === page ? 'active' : ''}" onclick="changePage('${type}', ${i})">${i}</button>`;
  }

  if (totalPages > 7) {
    html += `<span class="page-info">... ${totalPages}</span>`;
  }

  html += `
    <span class="page-info">${t('common.total')} ${total} ${t('common.items')}</span>
    <button class="page-btn" onclick="changePage('${type}', ${page + 1})" ${page >= totalPages ? 'disabled' : ''}>→</button>
  `;

  container.innerHTML = html;
}

function changePage(type, page) {
  switch (type) {
    case 'users': usersPage = page; loadUsers(); break;
    case 'apikeys': apiKeysPage = page; loadApiKeys(); break;
    case 'subscriptions': subscriptionsPage = page; loadSubscriptions(); break;
    case 'recent-usage': recentUsagePage = page; loadRecentUsage(); break;
  }
}

// Init
currentLang = detectLanguage();
updatePageLanguage();

// Set GitHub link from config
const githubLink = document.getElementById('github-link');
if (githubLink) {
  githubLink.href = config.githubUrl;
}

// Load config and check auth
(async () => {
  await loadConfig();
  checkAuth();
})();

// Update language selector text based on screen size
function updateLangSelectorText() {
  const langSelect = document.getElementById('lang-select-header');
  if (!langSelect) return;

  const isMobile = window.innerWidth <= 768;
  const options = langSelect.querySelectorAll('option');

  options.forEach(option => {
    if (isMobile) {
      // Mobile: show only flag
      option.textContent = option.getAttribute('data-flag');
    } else {
      // Desktop: show flag + text
      option.textContent = option.getAttribute('data-text');
    }
  });
}

// Call on load and resize
updateLangSelectorText();
window.addEventListener('resize', updateLangSelectorText);
