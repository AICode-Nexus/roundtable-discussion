---
layout: home

hero:
  name: "圆桌论坛"
  text: "AI 时代：超级个体的崛起与团队的重构"
  tagline: 产品 × 设计 × 前端 × 后端 × 测试 — 跨角色的深度碰撞
  actions:
    - theme: brand
      text: 进入第十三期 →
      link: /episodes/ep01/
    - theme: alt
      text: 关于论坛
      link: /about

features:
  - icon: 💬
    title: "开场：AI 放大个体还是重组团队？"
    details: 当 AI 让一个人能做过去一个团队的事，我们该兴奋还是该焦虑？五个岗位，五种立场。
    link: /episodes/ep01/topic-1
    linkText: 查看讨论
  - icon: 🔥
    title: "冲突：还需不需要完整链路？"
    details: 一个需求从产品到设计到前后端到测试的完整链路，在 AI 时代是否还有必要？
    link: /episodes/ep01/topic-2
    linkText: 查看讨论
  - icon: 🔥
    title: "升级：AI 出了设计稿和代码，怎么看？"
    details: 产品经理写了 PRD 又用 AI 出了设计稿和代码，设计和前端同学怎么看？
    link: /episodes/ep01/topic-3
    linkText: 查看讨论
  - icon: 🧭
    title: "收束：未来 3 年最该升级的能力"
    details: 从冲突回到建设——每个岗位在 AI 时代最该升级的核心能力是什么？
    link: /episodes/ep01/topic-4
    linkText: 查看讨论
---

<style>
/* 时间线区域 */
.timeline {
  max-width: 780px;
  margin: 3rem auto 2rem;
  padding: 0 1.5rem;
}
.timeline h2 {
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.timeline .subtitle {
  text-align: center;
  color: var(--vp-c-text-2);
  margin-bottom: 2.5rem;
  font-size: 0.95rem;
}

/* 时间线轴 */
.timeline-list {
  position: relative;
  padding-left: 2.5rem;
}
.timeline-list::before {
  content: '';
  position: absolute;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--vp-c-brand-1), #a855f7, #ec4899);
  opacity: 0.35;
  border-radius: 2px;
}

/* 时间线卡片项 */
.timeline-item {
  position: relative;
  margin-bottom: 1.25rem;
  padding: 1rem 1.25rem;
  padding-left: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation: fadeInUp 0.5s ease-out both;
}
.timeline-item:nth-child(1) { animation-delay: 0.05s; }
.timeline-item:nth-child(2) { animation-delay: 0.1s; }
.timeline-item:nth-child(3) { animation-delay: 0.15s; }
.timeline-item:nth-child(4) { animation-delay: 0.2s; }
.timeline-item:nth-child(5) { animation-delay: 0.25s; }
.timeline-item:nth-child(6) { animation-delay: 0.3s; }
.timeline-item:nth-child(7) { animation-delay: 0.35s; }
.timeline-item:nth-child(8) { animation-delay: 0.4s; }

.timeline-item:hover {
  transform: translateX(4px);
  border-color: var(--vp-c-brand-soft);
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.08);
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, rgba(99, 102, 241, 0.03) 100%);
}

/* 时间线圆点 */
.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.35rem;
  top: 1.25rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px var(--vp-c-bg), 0 0 0 5px var(--vp-c-brand-soft);
  transition: all 0.3s ease;
}

.timeline-item:hover::before {
  background: #a855f7;
  box-shadow: 0 0 0 3px var(--vp-c-bg), 0 0 0 5px rgba(168, 85, 247, 0.3), 0 0 12px rgba(168, 85, 247, 0.2);
  transform: scale(1.15);
}

/* 时间线日期 */
.timeline-date {
  font-size: 0.8rem;
  color: var(--vp-c-brand-1);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  display: inline-block;
  padding: 2px 8px;
  background: var(--vp-c-brand-soft);
  border-radius: 4px;
  margin-bottom: 0.3rem;
}

/* 时间线标题 */
.timeline-title {
  font-weight: 700;
  margin: 0.3rem 0 0.15rem;
  font-size: 1rem;
  color: var(--vp-c-text-1);
}

/* 时间线描述 */
.timeline-desc {
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* 时间线顶部装饰 */
.timeline::before {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899);
  border-radius: 4px;
  margin: 0 auto 1.5rem;
}

/* 暗色模式适配 */
.dark .timeline-item {
  background: var(--vp-c-bg-soft);
}
.dark .timeline-item:hover {
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, rgba(129, 140, 248, 0.04) 100%);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式 */
@media (max-width: 640px) {
  .timeline-list {
    padding-left: 2rem;
  }
  .timeline-item {
    padding: 0.85rem 1rem 0.85rem 1.25rem;
  }
  .timeline-item::before {
    left: -1.85rem;
    width: 10px;
    height: 10px;
  }
}
</style>

<div class="timeline">

## 为什么是现在？

<p class="subtitle">2025-2026 年，AI 对团队与个体的冲击集中爆发</p>

<div class="timeline-list">

<div class="timeline-item">
<div class="timeline-date">2026 年 4 月</div>
<div class="timeline-title">Forbes：三位 Solo Founder 证明"一人公司"</div>
<div class="timeline-desc">Sam Altman 预言的"一人十亿美元公司"正在成为现实。Solo founder 比例升至 36.3%。</div>
</div>

<div class="timeline-item">
<div class="timeline-date">2026 年 3 月</div>
<div class="timeline-title">AI-native 公司效率数据公布</div>
<div class="timeline-desc">Forbes 报道：AI-native 公司人均营收是传统 SaaS 的 7-13 倍。</div>
</div>

<div class="timeline-item">
<div class="timeline-date">2026 年 3 月</div>
<div class="timeline-title">Cursor ARR 突破 $20 亿</div>
<div class="timeline-desc">67% 的财富 500 强使用，每天生成 1.5 亿行企业代码。</div>
</div>

<div class="timeline-item">
<div class="timeline-date">2026 年 2 月</div>
<div class="timeline-title">Klarna 员工降至 3,000 人</div>
<div class="timeline-desc">从 2022 年的 7,000 人减半，同时员工薪资提升 60%。AI 重构了团队结构。</div>
</div>

<div class="timeline-item">
<div class="timeline-date">2025 年 11 月</div>
<div class="timeline-title">Cursor D 轮融资 $23 亿</div>
<div class="timeline-desc">估值 $293 亿。AI 编码从尝鲜变成企业标配。</div>
</div>

<div class="timeline-item">
<div class="timeline-date">2025 年 9 月</div>
<div class="timeline-title">Klarna AI 客服翻车</div>
<div class="timeline-desc">因 AI 客服质量问题将部分员工重新调回客服岗，揭示了 AI 替代的边界。</div>
</div>

<div class="timeline-item">
<div class="timeline-date">2025 年 5 月</div>
<div class="timeline-title">Duolingo 宣布 AI-first</div>
<div class="timeline-desc">逐步淘汰所有可被 AI 替代的外包人员，一次性发布 148 门 AI 生成课程。</div>
</div>

<div class="timeline-item">
<div class="timeline-date">2025 年 4 月</div>
<div class="timeline-title">Shopify CEO 全员备忘录</div>
<div class="timeline-desc">申请新增人头前必须证明 AI 无法完成该工作。AI 使用成为基本要求。</div>
</div>

</div>
</div>
