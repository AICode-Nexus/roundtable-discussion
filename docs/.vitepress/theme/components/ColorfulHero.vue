<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => { setTimeout(() => visible.value = true, 100) })
</script>

<template>
  <section class="hero-wrap" :class="{ visible }">
    <!-- 浮动装饰形状 -->
    <div class="hero-shapes" aria-hidden="true">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
    </div>

    <div class="hero-content">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        <span>第一期 · 热议中</span>
      </div>

      <h1 class="hero-title">
        <span class="title-line title-line-1">圆桌论坛</span>
      </h1>

      <h2 class="hero-subtitle">
        AI 时代：超级个体的崛起与团队的重构
      </h2>

      <p class="hero-tagline">
        <span class="tag tag-rose">产品</span>
        <span class="tag-x">×</span>
        <span class="tag tag-amber">设计</span>
        <span class="tag-x">×</span>
        <span class="tag tag-cyan">前端</span>
        <span class="tag-x">×</span>
        <span class="tag tag-violet">后端</span>
        <span class="tag-x">×</span>
        <span class="tag tag-emerald">测试</span>
        <span class="tag-sep">—</span>
        <span class="tag-desc">跨角色的深度碰撞</span>
      </p>

      <div class="hero-actions">
        <a href="/roundtable-discussion/episodes/ep01/" class="btn btn-primary">
          <span>进入第一期</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="/roundtable-discussion/about" class="btn btn-ghost">
          关于论坛
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-wrap {
  position: relative;
  z-index: 1;
  padding: 80px 24px 48px;
  max-width: 720px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.hero-wrap.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 浮动装饰 */
.hero-shapes {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
}
.shape-1 {
  width: 16px; height: 16px;
  background: #f43f5e;
  top: 15%; left: 5%;
  animation: floatShape 6s ease-in-out infinite;
}
.shape-2 {
  width: 12px; height: 12px;
  background: #f59e0b;
  top: 25%; right: 8%;
  animation: floatShape 5s ease-in-out infinite 0.5s;
}
.shape-3 {
  width: 20px; height: 20px;
  background: #06b6d4;
  bottom: 30%; left: 10%;
  animation: floatShape 7s ease-in-out infinite 1s;
  border-radius: 4px;
  transform: rotate(45deg);
}
.shape-4 {
  width: 10px; height: 10px;
  background: #8b5cf6;
  top: 60%; right: 12%;
  animation: floatShape 5.5s ease-in-out infinite 1.5s;
}
.shape-5 {
  width: 14px; height: 14px;
  background: #10b981;
  bottom: 15%; right: 25%;
  animation: floatShape 6.5s ease-in-out infinite 0.8s;
  border-radius: 3px;
}

@keyframes floatShape {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-18px) rotate(180deg); }
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 100px;
  background: rgba(244, 63, 94, 0.1);
  border: 1px solid rgba(244, 63, 94, 0.2);
  font-size: 0.85rem;
  font-weight: 600;
  color: #e11d48;
  margin-bottom: 24px;
  animation: fadeIn 0.6s ease 0.3s both;
}
.dark .hero-badge {
  background: rgba(244, 63, 94, 0.15);
  color: #fb7185;
}
.badge-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #f43f5e;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.4); }
}

/* Title */
.hero-title {
  font-size: clamp(2.8rem, 8vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 16px;
  animation: fadeIn 0.6s ease 0.4s both;
}
.title-line-1 {
  background: linear-gradient(
    135deg,
    #f43f5e 0%, #f59e0b 20%, #10b981 40%,
    #06b6d4 60%, #8b5cf6 80%, #d946ef 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientFlow 5s ease infinite;
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Subtitle */
.hero-subtitle {
  font-size: clamp(1.4rem, 4vw, 2rem);
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 20px;
  line-height: 1.3;
  animation: fadeIn 0.6s ease 0.5s both;
}

/* Tagline with colored tags */
.hero-tagline {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 36px;
  animation: fadeIn 0.6s ease 0.6s both;
}
.tag {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 100px;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}
.tag-rose { background: rgba(244,63,94,0.15); color: #e11d48; }
.tag-amber { background: rgba(245,158,11,0.15); color: #d97706; }
.tag-cyan { background: rgba(6,182,212,0.15); color: #0891b2; }
.tag-violet { background: rgba(139,92,246,0.15); color: #7c3aed; }
.tag-emerald { background: rgba(16,185,129,0.15); color: #059669; }

.dark .tag-rose { background: rgba(244,63,94,0.2); color: #fb7185; }
.dark .tag-amber { background: rgba(245,158,11,0.2); color: #fbbf24; }
.dark .tag-cyan { background: rgba(6,182,212,0.2); color: #22d3ee; }
.dark .tag-violet { background: rgba(139,92,246,0.2); color: #a78bfa; }
.dark .tag-emerald { background: rgba(16,185,129,0.2); color: #34d399; }

.tag-x {
  color: var(--vp-c-text-3);
  font-weight: 300;
  font-size: 0.9rem;
}
.tag-sep {
  color: var(--vp-c-text-3);
  margin: 0 2px;
}
.tag-desc {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

/* Buttons */
.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  animation: fadeIn 0.6s ease 0.7s both;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.btn-primary {
  background: linear-gradient(135deg, #f43f5e, #f59e0b, #10b981, #06b6d4, #8b5cf6);
  background-size: 300% 300%;
  animation: gradientFlow 4s ease infinite;
  color: #fff;
  box-shadow:
    0 4px 16px rgba(244,63,94,0.25),
    0 4px 16px rgba(99,102,241,0.2);
}
.btn-primary:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow:
    0 8px 30px rgba(244,63,94,0.3),
    0 8px 30px rgba(99,102,241,0.25),
    0 0 50px rgba(245,158,11,0.12);
}
.btn-primary svg {
  transition: transform 0.3s ease;
}
.btn-primary:hover svg {
  transform: translateX(4px);
}
.btn-ghost {
  color: var(--vp-c-text-1);
  border: 2px solid transparent;
  background:
    linear-gradient(var(--vp-c-bg), var(--vp-c-bg)) padding-box,
    linear-gradient(135deg, #f43f5e, #f59e0b, #10b981, #06b6d4, #8b5cf6) border-box;
}
.btn-ghost:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 4px 20px rgba(139,92,246,0.15);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .hero-wrap { padding: 48px 20px 32px; }
  .hero-tagline { gap: 6px; }
  .tag { padding: 3px 10px; font-size: 0.8rem; }
}
</style>
