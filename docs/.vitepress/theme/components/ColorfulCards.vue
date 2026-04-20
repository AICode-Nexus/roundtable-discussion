<script setup>
import { ref, onMounted } from 'vue'

const cards = [
  {
    emoji: '💬',
    title: 'AI 在放大个体，还是在重组团队？',
    desc: '当一个人加上 AI 就像一支小队，我们该重新理解个人能力，还是团队结构？',
    link: '/roundtable-discussion/episodes/ep01/topic-1',
    color: '#f43f5e',
    colorLight: 'rgba(244,63,94,0.12)',
    gradient: 'linear-gradient(135deg, #f43f5e, #fb7185)',
  },
  {
    emoji: '🔥',
    title: '一个需求还需不需要完整链路？',
    desc: '效率被压到极致后，流程到底是护栏，还是负担？',
    link: '/roundtable-discussion/episodes/ep01/topic-2',
    color: '#f59e0b',
    colorLight: 'rgba(245,158,11,0.12)',
    gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
  },
  {
    emoji: '🧭',
    title: '未来 6 个月，每个岗位最该升级什么？',
    desc: '如果只能升级一项能力，今天该押注判断力、架构力，还是 AI 协作力？',
    link: '/roundtable-discussion/episodes/ep01/topic-4',
    color: '#06b6d4',
    colorLight: 'rgba(6,182,212,0.12)',
    gradient: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
  },
  {
    emoji: '🎓',
    title: '新人还需要从零学起吗？',
    desc: 'AI 能补短板，但它到底是在加速成长，还是制造空心化？',
    link: '/roundtable-discussion/episodes/ep01/topic-6',
    color: '#8b5cf6',
    colorLight: 'rgba(139,92,246,0.12)',
    gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
  },
  {
    emoji: '🌐',
    title: '人人全栈是解放还是灾难？',
    desc: '当每个人都能借 AI 越界，速度和专业之间的边界还剩下什么？',
    link: '/roundtable-discussion/episodes/ep01/topic-8',
    color: '#10b981',
    colorLight: 'rgba(16,185,129,0.12)',
    gradient: 'linear-gradient(135deg, #10b981, #34d399)',
  },
]

const show = ref(false)
onMounted(() => { setTimeout(() => show.value = true, 400) })
</script>

<template>
  <section class="cards-section" :class="{ show }">
    <!-- 彩虹分隔线 -->
    <div class="section-divider" aria-hidden="true"></div>

    <!-- 章节标题 -->
    <div class="section-header">
      <h2 class="section-title">为什么是现在？</h2>
      <p class="section-subtitle">5 个核心话题，集中展开这一期最值得被转发和讨论的问题</p>
    </div>

    <div class="cards-grid">
      <a
        v-for="(card, i) in cards"
        :key="i"
        :href="card.link"
        class="topic-card"
        :style="{
          '--card-color': card.color,
          '--card-color-light': card.colorLight,
          '--card-gradient': card.gradient,
          '--delay': i * 0.12 + 's',
        }"
      >
        <!-- 顶部色条 -->
        <div class="card-bar"></div>

        <!-- 图标 -->
        <div class="card-icon">
          <span class="icon-emoji">{{ card.emoji }}</span>
        </div>

        <!-- 内容 -->
        <h3 class="card-title">{{ card.title }}</h3>
        <p class="card-desc">{{ card.desc }}</p>

        <!-- 底部链接 -->
        <div class="card-link">
          <span>查看讨论</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.cards-section {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px 48px;
}

/* 彩虹分隔线 */
.section-divider {
  width: 120px;
  height: 4px;
  margin: 0 auto 48px;
  border-radius: 4px;
  background: linear-gradient(90deg, #f43f5e, #f59e0b, #10b981, #06b6d4, #8b5cf6, #d946ef);
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
}
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* 章节标题 */
.section-header {
  text-align: center;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.cards-section.show .section-header {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.4;
  margin-bottom: 12px;
  border: none;
  border-top: none;
  padding-top: 0;
  padding-left: 0;
  background: linear-gradient(135deg, #f43f5e, #f59e0b, #06b6d4, #8b5cf6);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}

.section-subtitle {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
  line-height: 1.6;
}

/* 网格 */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

/* 卡片 */
.topic-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 32px 28px 24px;
  border-radius: 24px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  /* 玻璃态底 */
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1.5px solid rgba(255,255,255,0.5);
  box-shadow:
    0 8px 32px rgba(0,0,0,0.06),
    0 2px 8px rgba(0,0,0,0.04);

  /* 入场动画 */
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.dark .topic-card {
  background: rgba(30,30,46,0.7);
  border-color: rgba(255,255,255,0.1);
  box-shadow:
    0 8px 32px rgba(0,0,0,0.3),
    0 2px 8px rgba(0,0,0,0.2);
}

.cards-section.show .topic-card {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition-delay: var(--delay);
}

/* 顶部色条 */
.card-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--card-gradient);
  transition: height 0.3s ease;
}
.topic-card:hover .card-bar {
  height: 5px;
}

/* hover */
.topic-card:hover {
  transform: translateY(-12px) scale(1.03);
  border-color: var(--card-color);
  box-shadow:
    0 24px 72px color-mix(in srgb, var(--card-color) 22%, transparent),
    0 0 0 1.5px var(--card-color),
    0 8px 16px rgba(0,0,0,0.08);
}

/* 图标 */
.card-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  background: var(--card-color-light);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
}

.card-icon::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 20px;
  background: var(--card-gradient);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.topic-card:hover .card-icon {
  transform: scale(1.15) rotate(-5deg);
  background: color-mix(in srgb, var(--card-color) 25%, transparent);
}

.topic-card:hover .card-icon::before {
  opacity: 0.3;
}

.icon-emoji {
  font-size: 2rem;
  line-height: 1;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

/* 标题 */
.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 8px;
  transition: color 0.2s ease;
}
.topic-card:hover .card-title {
  color: var(--card-color);
}

/* 描述 */
.card-desc {
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  line-height: 1.65;
  flex: 1;
  margin-bottom: 16px;
}

/* 链接 */
.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--card-color);
  transition: gap 0.3s ease;
}
.topic-card:hover .card-link {
  gap: 10px;
}

@media (max-width: 640px) {
  .section-title {
    font-size: 1.6rem;
  }
  .section-subtitle {
    font-size: 0.9rem;
  }
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .topic-card {
    padding: 28px 24px 20px;
  }
  .card-icon {
    width: 56px;
    height: 56px;
  }
  .icon-emoji {
    font-size: 1.8rem;
  }
}
</style>
