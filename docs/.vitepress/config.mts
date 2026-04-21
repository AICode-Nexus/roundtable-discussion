import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/roundtable-discussion/',
  lang: 'zh-CN',
  title: '圆桌论坛',
  description: 'AI 时代：放大个体，重塑团队 — 跨角色的深度碰撞',

  head: [
    ['link', { rel: 'icon', href: '/roundtable-discussion/favicon.ico' }]
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '第十三期', link: '/episodes/ep01/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/episodes/ep01/': [
        {
          text: '第十三期：放大个体，重塑团队',
          items: [
            { text: '📋 本期概览', link: '/episodes/ep01/' },
            { text: '👥 嘉宾角色解读', link: '/episodes/ep01/roles' },
            { text: '💬 AI 到底在放大个体，还是在重塑团队？', link: '/episodes/ep01/topic-1' },
            { text: '🔥 一个需求还需不需要完整链路？', link: '/episodes/ep01/topic-2' },
            { text: '🧭 未来 6 个月，每个岗位最该升级什么？', link: '/episodes/ep01/topic-4' },
            { text: '🎓 新人还需要从零学起吗？', link: '/episodes/ep01/topic-6' },
            { text: '🌐 人人全栈是解放还是灾难？', link: '/episodes/ep01/topic-8' },
            { text: '🎲 快问快答', link: '/episodes/ep01/lightning' },
            { text: '📊 数据洞察', link: '/episodes/ep01/data' },
            { text: '🎮 互动专区', link: '/episodes/ep01/interactive' },
            { text: '📝 本期总结', link: '/episodes/ep01/summary' },
            { text: '📚 延伸阅读', link: '/episodes/ep01/references' }
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
      { icon: 'github', link: 'https://github.com/AICode-Nexus/roundtable-discussion' }
    ],

    footer: {
      message: '圆桌论坛 — 跨角色的深度碰撞',
      copyright: 'Copyright © 2024-present'
    }
  }
})
