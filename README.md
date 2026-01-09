# Sub2API Dashboard

一个简洁美观的 Sub2API 管理看板，用于监控用户、API Keys、配额和使用情况。

## 功能特性

### UI截图

![004895d4702ef7c70afbe150af315c7d.png](https://png.re/img/2026/01/09/004895d4702ef7c70afbe150af315c7d.png)

### 总览
- 用户总数/活跃用户统计
- API Keys 数量统计
- 分组和订阅数量
- 24小时请求量
- 系统总余额
- 近7天使用趋势
- 模型调用分布

### 用户管理
- 用户列表（支持搜索）
- 余额、API Keys、订阅数展示
- 用户角色和状态标识
- 分页浏览

### API Keys
- 密钥列表（脱敏展示）
- 关联用户和分组
- 24小时请求统计
- 状态管理

### 分组配额
- 日/周/月配额限制
- 费率倍率配置
- 关联 API Keys 和订阅数统计

### 订阅管理
- 用户订阅列表
- 配额使用进度可视化
- 有效期展示
- 状态标识

### 使用统计
- Top 10 用户排行（按消费）
- 最近请求记录
- Token 统计

## 技术栈

- **后端**: Node.js + Express.js
- **数据库**: PostgreSQL
- **前端**: 原生 HTML/CSS/JavaScript（单页应用）
- **认证**: Session + 密码验证

## 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/TongEc/S2A-Dashboard.git
cd S2A-Dashboard
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

复制示例配置文件：

```bash
cp .env.example .env
```

编辑 `.env` 文件：

```env
# 数据库配置
DB_HOST=localhost
DB_PORT=5432
DB_NAME=sub2api
DB_USER=postgres
DB_PASSWORD=your_database_password

# 服务配置
PORT=3000
SESSION_SECRET=your_random_session_secret

# Dashboard 登录密码
DASHBOARD_PASSWORD=your_secure_password

# Dashboard 标题（可选）
DASHBOARD_TITLE=S2A Dashboard
```

### 4. 启动服务

```bash
# 生产模式
npm start

# 开发模式（自动重载）
npm run dev
```

### 5. 访问 Dashboard

打开浏览器访问 `http://localhost:3000`，输入配置的密码登录。

## Docker 部署

> **💡 部署方式选择**
>
> - **如果您还没有 PostgreSQL 数据库**：推荐使用 **Docker Compose** 方式，它会自动创建数据库和应用容器。
> - **如果您已有 PostgreSQL 数据库**：推荐使用 **仅构建应用镜像** 方式，直接连接到现有数据库。

### 使用 Docker Compose

这种方式会同时启动应用和 PostgreSQL 数据库。

#### 1. 配置环境变量

```bash
cp .env.example .env
```

编辑 `.env` 文件设置密码等配置。

#### 2. 启动服务

```bash
# 构建并启动所有服务
docker compose up -d

# 查看日志
docker compose logs -f

# 停止服务
docker compose down

# 停止并删除数据卷（会清除数据库数据）
docker compose down -v
```

#### 3. 访问 Dashboard

打开浏览器访问 `http://localhost:3000`。

### 仅构建应用镜像

如果你已有 PostgreSQL 数据库，可以只构建应用镜像：

```bash
# 构建镜像
docker build -t s2a-dashboard .

# 运行容器
docker run -d \
  --name s2a-dashboard \
  -p 3000:3000 \
  -e DB_HOST=your_db_host \
  -e DB_PORT=5432 \
  -e DB_NAME=sub2api \
  -e DB_USER=postgres \
  -e DB_PASSWORD=your_password \
  -e SESSION_SECRET=your_secret \
  -e DASHBOARD_PASSWORD=your_password \
  -e DASHBOARD_TITLE="S2A Dashboard" \
  s2a-dashboard
```

### 环境变量说明

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `DB_HOST` | 数据库主机 | `postgres`（Docker Compose）|
| `DB_PORT` | 数据库端口 | `5432` |
| `DB_NAME` | 数据库名称 | `sub2api` |
| `DB_USER` | 数据库用户 | `postgres` |
| `DB_PASSWORD` | 数据库密码 | `postgres` |
| `PORT` | 应用端口 | `3000` |
| `SESSION_SECRET` | Session 密钥 | - |
| `DASHBOARD_PASSWORD` | 登录密码 | `admin123` |
| `DASHBOARD_TITLE` | Dashboard 标题 | `S2A Dashboard` |
| `DB_EXPOSE_PORT` | 数据库暴露端口（仅 Compose）| `5432` |

## 项目结构

```
S2A-Dashboard/
├── .env                 # 环境变量（需自行创建）
├── .env.example         # 环境变量示例
├── .dockerignore        # Docker 忽略文件
├── .gitignore           # Git 忽略文件
├── Dockerfile           # Docker 镜像构建文件
├── docker-compose.yml   # Docker Compose 编排文件
├── package.json         # npm 配置
├── public/
│   ├── index.html       # 前端单页应用
│   └── favicon.svg      # 网站图标
├── src/
│   ├── index.js         # 应用入口
│   ├── app.js           # Express 应用配置
│   ├── config/
│   │   └── database.js  # 数据库配置
│   └── routes/          # API 路由
│       ├── auth.js      # 认证路由
│       ├── users.js     # 用户管理
│       ├── apiKeys.js   # API Keys 管理
│       ├── groups.js    # 分组管理
│       ├── subscriptions.js  # 订阅管理
│       ├── stats.js     # 统计数据
│       ├── usage.js     # 使用情况
│       └── config.js    # 配置接口
└── README.md            # 项目文档
```

## 安全说明

- 密码以明文形式存储在 `.env` 中，仅适用于内部管理场景
- 建议在生产环境中：
  - 使用强密码
  - 通过反向代理添加 HTTPS
  - 限制访问 IP
  - 定期更换密码

## 致谢

本项目是 [Sub2API](https://github.com/Wei-Shaw/sub2api) 的配套管理看板，用于可视化展示 Sub2API 的数据库数据。感谢 Sub2API 项目提供的优秀服务。

## License

MIT
