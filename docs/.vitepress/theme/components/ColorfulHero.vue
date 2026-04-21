<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
onMounted(() => { setTimeout(() => visible.value = true, 100) })
</script>

<template>
  <section class="hero-wrap" :class="{ visible }">
    <div class="hero-content">
      <!-- 顶部期数标签 -->
      <div class="hero-badge">
        <span class="badge-dot"></span>
        <span>第十三期 · 热议中</span>
      </div>

      <!-- 主标题 -->
      <h1 class="hero-title">圆桌论坛</h1>

      <!-- 副标题 -->
      <h2 class="hero-subtitle">
        AI 时代：超级个体的崛起<br class="mobile-br">与团队的重构
      </h2>

      <!-- 角色标签组 -->
      <div class="hero-roles">
        <span class="role role-rose">
          <span class="role-icon">🎯</span>产品
        </span>
        <span class="role role-amber">
          <span class="role-icon">🎨</span>设计
        </span>
        <span class="role role-cyan">
          <span class="role-icon">⚛️</span>前端
        </span>
        <span class="role role-violet">
          <span class="role-icon">⚙️</span>后端
        </span>
        <span class="role role-emerald">
          <span class="role-icon">🧪</span>测试
        </span>
      </div>

      <p class="hero-desc">5 个核心话题，拆开 AI 时代最值得公开讨论的团队问题</p>

      <div class="hero-event" aria-label="活动信息">
        <div class="event-row">
          <span class="event-label">活动形式</span>
          <div class="event-copy">
            <span class="event-segment"><strong>线下</strong>A5-5F 讯飞大学-北斗教室</span>
            <span class="event-dot" aria-hidden="true"></span>
            <span class="event-segment"><strong>线上</strong>讯飞直播间线上直播 · i讯飞远程会议</span>
          </div>
        </div>
        <div class="event-row">
          <span class="event-label">活动时间</span>
          <div class="event-copy">
            <span class="event-time">04/21 周二 16:30-18:00</span>
          </div>
        </div>
      </div>

      <!-- 按钮 -->
      <div class="hero-actions">
        <a href="/roundtable-discussion/episodes/ep01/" class="btn btn-primary">
          <span>进入第十三期</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="/roundtable-discussion/about" class="btn btn-ghost">
          关于论坛
        </a>
      </div>

      <!-- 数据亮点 -->
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-num">5</span>
          <span class="stat-label">个核心话题</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num">5</span>
          <span class="stat-label">种角色</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num">1</span>
          <span class="stat-label">条主线讨论</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-wrap {
  position: relative;
  z-index: 1;
  padding: 72px 24px 32px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  opacity: 0;
  transform: translateY(24px);
  transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}
.hero-wrap.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  margin-bottom: 28px;
  animation: fadeIn 0.6s ease 0.2s both;

  background: linear-gradient(
    135deg,
    rgba(244,63,94,0.08),
    rgba(139,92,246,0.08)
  );
  border: 1px solid rgba(244,63,94,0.15);
  color: #e11d48;
}
.dark .hero-badge {
  background: linear-gradient(135deg, rgba(244,63,94,0.12), rgba(139,92,246,0.12));
  border-color: rgba(244,63,94,0.2);
  color: #fb7185;
}
.badge-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #f43f5e;
  animation: pulse 2s ease-in-out infinite;
}

/* Title */
.hero-title {
  font-size: clamp(3rem, 9vw, 5rem);
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 16px;
  letter-spacing: -0.03em;
  animation: fadeIn 0.7s ease 0.3s both;

  background: linear-gradient(
    135deg,
    #f43f5e 0%, #f59e0b 18%, #10b981 36%,
    #06b6d4 54%, #8b5cf6 72%, #d946ef 90%, #f43f5e 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeIn 0.7s ease 0.3s both, gradientFlow 6s ease infinite;
}

/* Subtitle */
.hero-subtitle {
  font-size: clamp(1.3rem, 3.5vw, 1.85rem);
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 28px;
  line-height: 1.35;
  letter-spacing: -0.01em;
  animation: fadeIn 0.7s ease 0.4s both;
}
.mobile-br { display: none; }

/* 角色标签组 */
.hero-roles {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
  animation: fadeIn 0.7s ease 0.5s both;
}
.role {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: default;
}
.role:hover {
  transform: translateY(-3px) scale(1.05);
}
.role-icon {
  font-size: 1rem;
}

.role-rose {
  background: rgba(244,63,94,0.1);
  color: #e11d48;
  border: 1px solid rgba(244,63,94,0.15);
}
.role-rose:hover { box-shadow: 0 8px 24px rgba(244,63,94,0.15); }

.role-amber {
  background: rgba(245,158,11,0.1);
  color: #d97706;
  border: 1px solid rgba(245,158,11,0.15);
}
.role-amber:hover { box-shadow: 0 8px 24px rgba(245,158,11,0.15); }

.role-cyan {
  background: rgba(6,182,212,0.1);
  color: #0891b2;
  border: 1px solid rgba(6,182,212,0.15);
}
.role-cyan:hover { box-shadow: 0 8px 24px rgba(6,182,212,0.15); }

.role-violet {
  background: rgba(139,92,246,0.1);
  color: #7c3aed;
  border: 1px solid rgba(139,92,246,0.15);
}
.role-violet:hover { box-shadow: 0 8px 24px rgba(139,92,246,0.15); }

.role-emerald {
  background: rgba(16,185,129,0.1);
  color: #059669;
  border: 1px solid rgba(16,185,129,0.15);
}
.role-emerald:hover { box-shadow: 0 8px 24px rgba(16,185,129,0.15); }

/* 暗色角色标签 */
.dark .role-rose { background: rgba(244,63,94,0.15); color: #fb7185; border-color: rgba(244,63,94,0.2); }
.dark .role-amber { background: rgba(245,158,11,0.15); color: #fbbf24; border-color: rgba(245,158,11,0.2); }
.dark .role-cyan { background: rgba(6,182,212,0.15); color: #22d3ee; border-color: rgba(6,182,212,0.2); }
.dark .role-violet { background: rgba(139,92,246,0.15); color: #a78bfa; border-color: rgba(139,92,246,0.2); }
.dark .role-emerald { background: rgba(16,185,129,0.15); color: #34d399; border-color: rgba(16,185,129,0.2); }

/* 描述 */
.hero-desc {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  margin-bottom: 20px;
  animation: fadeIn 0.7s ease 0.55s both;
}

/* Event info */
.hero-event {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto 30px;
  max-width: 760px;
  padding-top: 14px;
  text-align: center;
  border-top: 1px solid rgba(99,102,241,0.12);
  animation: fadeIn 0.7s ease 0.58s both;
}
.dark .hero-event {
  border-top-color: rgba(129,140,248,0.18);
}
.event-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px 14px;
  flex-wrap: wrap;
}
.event-label {
  display: inline-block;
  color: var(--vp-c-brand-1);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  white-space: nowrap;
}
.event-copy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px 10px;
  flex-wrap: wrap;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
  line-height: 1.6;
}
.event-segment {
  color: var(--vp-c-text-2);
  white-space: nowrap;
}
.event-segment strong {
  color: var(--vp-c-text-1);
  font-weight: 700;
  margin-right: 6px;
}
.event-dot {
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: rgba(99,102,241,0.28);
  flex: 0 0 auto;
}
.event-time {
  color: var(--vp-c-text-1);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.45;
}

/* Buttons */
.hero-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  animation: fadeIn 0.7s ease 0.6s both;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 30px;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef);
  background-size: 200% 200%;
  animation: gradientFlow 5s ease infinite;
  color: #fff;
  box-shadow: 0 4px 20px rgba(99,102,241,0.3);
}
.btn-primary:hover {
  transform: translateY(-3px) scale(1.04);
  box-shadow: 0 8px 32px rgba(99,102,241,0.35), 0 0 48px rgba(139,92,246,0.15);
}
.btn-primary svg {
  transition: transform 0.3s ease;
}
.btn-primary:hover svg {
  transform: translateX(4px);
}
.btn-ghost {
  color: var(--vp-c-text-1);
  border: 1.5px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}
.btn-ghost:hover {
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  box-shadow: 0 4px 16px rgba(99,102,241,0.1);
}

/* Stats */
.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  animation: fadeIn 0.7s ease 0.7s both;
}
.stat {
  display: flex;
  align-items: baseline;
  gap: 4px;
}
.stat-num {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--vp-c-brand-1), #d946ef);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label {
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  font-weight: 500;
}
.stat-divider {
  width: 1px;
  height: 20px;
  background: var(--vp-c-divider);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.5); }
}

@media (max-width: 640px) {
  .hero-wrap { padding: 48px 20px 24px; }
  .mobile-br { display: block; }
  .hero-roles { gap: 8px; }
  .role { padding: 6px 14px; font-size: 0.82rem; }
  .hero-event {
    gap: 12px;
    padding-top: 12px;
  }
  .event-row { gap: 8px 10px; }
  .event-copy { gap: 6px 8px; font-size: 0.88rem; }
  .event-segment { white-space: normal; }
  .event-dot { display: none; }
  .event-time { font-size: 0.95rem; }
  .hero-stats { gap: 16px; }
  .stat-num { font-size: 1.25rem; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-wrap { opacity: 1; transform: none; transition: none; }
  .hero-title { animation: none; }
}
</style>
