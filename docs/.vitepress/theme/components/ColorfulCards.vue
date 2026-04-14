<script setup>
import { ref, onMounted } from 'vue'

const cards = [
  {
    emoji: '💬',
    title: '开场：AI 放大个体还是重组团队？',
    desc: '当 AI 让一个人能做过去一个团队的事，我们该兴奋还是该焦虑？五个岗位，五种立场。',
    link: '/roundtable-discussion/episodes/ep01/topic-1',
    color: '#f43f5e',
    colorLight: 'rgba(244,63,94,0.12)',
    gradient: 'linear-gradient(135deg, #f43f5e, #fb7185)',
  },
  {
    emoji: '🔥',
    title: '冲突：还需不需要完整链路？',
    desc: '一个需求从产品到设计到前后端到测试的完整链路，在 AI 时代是否还有必要？',
    link: '/roundtable-discussion/episodes/ep01/topic-2',
    color: '#f59e0b',
    colorLight: 'rgba(245,158,11,0.12)',
    gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
  },
  {
    emoji: '⚡',
    title: '升级：AI 出了设计稿和代码，怎么看？',
    desc: '产品经理写了 PRD 又用 AI 出了设计稿和代码，设计和前端同学怎么看？',
    link: '/roundtable-discussion/episodes/ep01/topic-3',
    color: '#06b6d4',
    colorLight: 'rgba(6,182,212,0.12)',
    gradient: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
  },
  {
    emoji: '🧭',
    title: '收束：未来 3 年最该升级的能力',
    desc: '从冲突回到建设——每个岗位在 AI 时代最该升级的核心能力是什么？',
    link: '/roundtable-discussion/episodes/ep01/topic-4',
    color: '#8b5cf6',
    colorLight: 'rgba(139,92,246,0.12)',
    gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
  },
]

const show = ref(false)
onMounted(() => { setTimeout(() => show.value = true, 400) })
</script>

<template>
  <section class="cards-section" :class="{ show }">
    <!-- 彩虹分隔线 -->
    <div class="section-divider" aria-hidden="true"></div>

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

/* 网格 */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/* 卡片 */
.topic-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 28px 24px 20px;
  border-radius: 20px;
  text-decoration: none;
  color: var(--vp-c-text-1);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  /* 玻璃态底 */
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1.5px solid rgba(255,255,255,0.4);
  box-shadow: 0 4px 24px rgba(0,0,0,0.04);

  /* 入场动画 */
  opacity: 0;
  transform: translateY(24px) scale(0.96);
}

.dark .topic-card {
  background: rgba(30,30,46,0.6);
  border-color: rgba(255,255,255,0.08);
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
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
  transform: translateY(-8px) scale(1.02);
  border-color: var(--card-color);
  box-shadow:
    0 20px 60px color-mix(in srgb, var(--card-color) 18%, transparent),
    0 0 0 1px var(--card-color);
}

/* 图标 */
.card-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background: var(--card-color-light);
  transition: all 0.3s ease;
}
.topic-card:hover .card-icon {
  transform: scale(1.1) rotate(-3deg);
  background: color-mix(in srgb, var(--card-color) 20%, transparent);
}
.icon-emoji {
  font-size: 1.8rem;
  line-height: 1;
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
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .topic-card {
    padding: 24px 20px 16px;
  }
}
</style>
