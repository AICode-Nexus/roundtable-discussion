# 圆桌论坛 — AI 时代：放大个体，重塑团队

> 产品 x 设计 x 前端 x 后端 x 测试 — 跨角色的深度碰撞

AI 正在深刻改变软件团队的协作方式。它一边放大个体的产能和覆盖半径，一边倒逼团队重写协作、责任与分工。「圆桌论坛」是一个多期制的跨角色深度讨论平台，让不同角色的人坐在一起，聊聊各自的真实感受、困惑和判断。

不追求标准答案，追求真实碰撞。

## 特色

- **多角色碰撞** — 产品经理、设计师、前端工程师、后端工程师、测试工程师，五种视角交叉碰撞
- **结构化议题** — 每期围绕一组核心问题展开，兼顾冲突、辩论与收束
- **数据驱动** — 每个议题配有数据速览，引用真实企业案例和研究报告
- **快问快答** — 轻松环节穿插，拉近距离
- **延伸阅读** — 每期附带参考资料，方便深入研究

## 技术栈

- [VitePress](https://vitepress.dev/) — 基于 Vue 的静态站点生成器
- 自定义主题样式（渐变色、动画、暗色模式适配）
- GitHub Actions 自动部署至 GitHub Pages

## 快速开始

### 环境要求

- Node.js >= 18
- pnpm（推荐）或 npm

### 安装与运行

```bash
# 克隆仓库
git clone https://github.com/AICode-Nexus/roundtable-discussion.git
cd roundtable-discussion

# 安装依赖
pnpm install
# 或: npm install

# 启动开发服务器
pnpm docs:dev
# 或: npm run docs:dev

# 构建生产版本
pnpm docs:build
# 或: npm run docs:build

# 本地预览构建结果
pnpm docs:preview
# 或: npm run docs:preview
```

开发服务器启动后，访问 `http://localhost:5173/roundtable-discussion/` 即可预览。

## 项目结构

```
roundtable-discussion/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # VitePress 配置（导航、侧边栏、搜索等）
│   │   ├── theme/
│   │   │   ├── index.ts        # 主题入口
│   │   │   └── style.css       # 自定义样式（品牌色、动画、暗色模式）
│   │   └── dist/               # 构建产物（已 gitignore）
│   ├── index.md                # 首页（Hero + Features + 时间线）
│   ├── about.md                # 关于页面
│   └── episodes/
│       └── ep01/               # 第一期
│           ├── index.md        # 本期概览（主题、嘉宾、议程）
│           ├── roles.md        # 嘉宾角色深度解读
│           ├── topic-1.md      # 开场题
│           ├── topic-2.md      # 冲突题
│           ├── topic-3.md      # 升级题
│           ├── topic-4.md      # 收束题
│           ├── topic-5.md      # 辩论题
│           ├── topic-6.md      # 辩论题
│           ├── topic-7.md      # 生存题
│           ├── topic-8.md      # 辩论题
│           ├── lightning.md    # 快问快答
│           └── references.md   # 延伸阅读
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 自动部署
├── package.json
└── README.md
```

## 内容结构

### 期（Episode）

每一期围绕一个核心主题展开讨论。目前已有：

- **第一期**：AI 时代 — 放大个体，重塑团队
- 当前首页主推 5 个核心话题，详情页保留完整圆桌讨论内容

### 议题（Topic）

每期包含多个议题，按讨论节奏分类：

| 类型 | frontmatter `type` | 说明 |
|------|-------------------|------|
| 开场题 | `opening` | 破冰亮出立场，制造张力 |
| 冲突题 | `conflict` | 直击矛盾，推动碰撞 |
| 辩论题 | `debate` | 针锋相对，观点交锋 |
| 收束题 | `closing` | 从冲突回到建设性结论 |
| 快问快答 | `lightning` | 轻松灵魂拷问 |

### 角色（Role）

五位固定嘉宾角色，代表软件团队中的不同视角：

| 角色 | 代号 | 图标 |
|------|------|------|
| 产品经理 | PM | 🎯 |
| 设计师 | Designer | 🎨 |
| 前端工程师 | FE | 💻 |
| 后端工程师 | BE | ⚙️ |
| 测试工程师 | QA | 🧪 |

## 贡献指南

欢迎参与内容贡献！详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

主要贡献方式：

- 提出新议题 — 通过 [GitHub Issues](https://github.com/AICode-Nexus/roundtable-discussion/issues) 提出想讨论的话题
- 添加新一期内容 — 在 `docs/episodes/` 下创建新的期目录
- 补充延伸阅读 — 为已有议题补充参考资料和数据
- 改进样式和体验 — 优化主题、适配和交互

## 部署

项目通过 GitHub Actions 自动部署。推送到 `main` 分支后，会自动触发构建并部署到 GitHub Pages。

- 部署配置：`.github/workflows/deploy.yml`
- 部署目标：GitHub Pages
- 构建产物：`docs/.vitepress/dist/`
- 站点地址：`https://aicode-nexus.github.io/roundtable-discussion/`

## 许可证

Copyright 2024-present. 内容版权归项目贡献者所有。
