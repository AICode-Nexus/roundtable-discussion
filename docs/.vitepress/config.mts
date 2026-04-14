import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/roundtable-discussion/',
  lang: 'zh-CN',
  title: '圆桌论坛',
  description: 'AI 时代：超级个体的崛起与团队的重构 — 跨角色的深度碰撞',

  head: [
    ['link', { rel: 'icon', href: '/roundtable-discussion/favicon.ico' }]
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '第一期', link: '/episodes/ep01/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/episodes/ep01/': [
        {
          text: '第一期：超级个体 vs 超级团队',
          items: [
            { text: '📋 本期概览', link: '/episodes/ep01/' },
            { text: '💬 开场：AI 放大个体还是重组团队？', link: '/episodes/ep01/topic-1' },
            { text: '🔥 冲突：还需不需要完整链路？', link: '/episodes/ep01/topic-2' },
            { text: '🔥 升级：AI 出设计稿和代码，怎么看？', link: '/episodes/ep01/topic-3' },
            { text: '🧭 收束：未来 3 年最该升级的能力', link: '/episodes/ep01/topic-4' },
            { text: '🎲 快问快答', link: '/episodes/ep01/lightning' }
          ]
        }
      ]
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ydliu2/roundtable-discussion' }
    ],

    footer: {
      message: '圆桌论坛 — 跨角色的深度碰撞',
      copyright: 'Copyright © 2024-present'
    }
  }
})
