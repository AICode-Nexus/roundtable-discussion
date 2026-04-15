<script setup>
import { ref, onMounted } from 'vue'

const events = [
  { date: '2026 年 4 月', color: '#f97316', items: [
    { title: 'Forbes：三位 Solo Founder 证明"一人公司"', desc: 'Sam Altman 预言的"一人十亿美元公司"正在成为现实。Solo founder 比例升至 36.3%。' },
    { title: 'Claude 4 / GPT-5 发布', desc: '新一代模型在编码、推理能力上再次跃升，Agent 自主完成复杂项目成为常态。' },
  ]},
  { date: '2026 年 3 月', color: '#6366f1', items: [
    { title: 'AI-native 公司效率数据公布', desc: 'Forbes 报道：AI-native 公司人均营收是传统 SaaS 的 7-13 倍。' },
    { title: 'Cursor ARR 突破 $20 亿', desc: '67% 的财富 500 强使用，每天生成 1.5 亿行企业代码。' },
    { title: 'Devin 企业版大规模落地', desc: 'Cognition 宣布 Devin 已进入 200+ 企业生产环境，自主处理 Tier-1 工单。' },
  ]},
  { date: '2026 年 2 月', color: '#8b5cf6', items: [
    { title: 'Klarna 员工降至 3,000 人', desc: '从 2022 年的 7,000 人减半，同时员工薪资提升 60%。AI 重构了团队结构。' },
    { title: 'Stack Overflow 流量持续下滑', desc: '月活较峰值下降超 60%，开发者转向 AI 对话式问答，传统技术社区加速转型。' },
  ]},
  { date: '2026 年 1 月', color: '#3b82f6', items: [
    { title: 'GitHub Copilot 470 万付费用户', desc: '90% 的财富 100 强企业使用。AI 辅助编码从可选项变成开发者标配。' },
    { title: 'Google 裁员 + "AI 优先"重组', desc: 'Google 宣布新一轮组织重组，多个团队合并，明确要求所有产品线嵌入 AI 能力。' },
  ]},
  { date: '2025 年 12 月', color: '#84cc16', items: [
    { title: 'OpenAI o3 发布', desc: '推理模型再进化，ARC-AGI 测试得分大幅提升，"深度思考"成为 AI 编码新范式。' },
  ]},
  { date: '2025 年 11 月', color: '#06b6d4', items: [
    { title: 'Cursor D 轮融资 $23 亿', desc: '估值 $293 亿。AI 编码从尝鲜变成企业标配。' },
  ]},
  { date: '2025 年 10 月', color: '#f472b6', items: [
    { title: 'Meta 开源 Llama 4 系列', desc: '开源模型性能逼近闭源前沿，中小团队获得部署自主 AI 编码助手的能力。' },
  ]},
  { date: '2025 年 9 月', color: '#14b8a6', items: [
    { title: 'Cognition (Devin) 估值 $102 亿', desc: '$4 亿融资，收购 Windsurf 后估值翻倍。"AI 软件工程师"赛道诞生首个独角兽巨头。' },
    { title: 'Klarna AI 客服翻车', desc: '因 AI 客服质量问题将部分员工重新调回客服岗，揭示了 AI 替代的边界。' },
  ]},
  { date: '2025 年 7 月', color: '#fbbf24', items: [
    { title: 'Claude 3.5 Sonnet 引爆 Agentic Coding', desc: '被开发者评为"最懂代码的模型"，Cursor/Windsurf 用户量暴涨，AI 编码进入主流。' },
  ]},
  { date: '2025 年 6 月', color: '#a3a3a3', items: [
    { title: 'Apple WWDC：Siri + AI 重构', desc: 'Apple Intelligence 全面落地，Xcode AI 助手发布，移动端开发工作流被重新定义。' },
  ]},
  { date: '2025 年 5 月', color: '#a855f7', items: [
    { title: 'Claude Code + OpenAI Codex 同月发布', desc: '两大 AI 巨头同时押注终端编码 Agent。AI 编程从补全进入自主执行时代。' },
    { title: 'Duolingo 宣布 AI-first', desc: '逐步淘汰所有可被 AI 替代的外包人员，一次性发布 148 门 AI 生成课程。' },
  ]},
  { date: '2025 年 4 月', color: '#f43f5e', items: [
    { title: 'Shopify CEO 全员备忘录', desc: '申请新增人头前必须证明 AI 无法完成该工作。AI 使用成为基本要求。' },
  ]},
  { date: '2025 年 3 月', color: '#c084fc', items: [
    { title: 'GPT-4o + Claude 3 Opus 价格战', desc: 'API 价格半年内降幅超 80%，AI 调用成本不再是瓶颈，小团队也能大规模使用。' },
    { title: '🇨🇳 字节跳动发布 Trae 国内版', desc: '中国首个 AI 原生 IDE，内置豆包与 DeepSeek 满血版模型，支持自然语言生成完整应用。' },
  ]},
  { date: '2025 年 2 月', color: '#ec4899', items: [
    { title: 'Karpathy 提出 "Vibe Coding"', desc: '一条推文定义了新编程范式——不写代码，只描述意图。后被评为 2025 年度词汇。' },
    { title: '🇨🇳 通义灵码 2.0 发布 AI 程序员', desc: '阿里云推出国内首个 AI 程序员，支持工程级多文件生成，集成 DeepSeek 模型，个人免费使用。' },
  ]},
  { date: '2025 年 1 月', color: '#ef4444', items: [
    { title: '🇨🇳 DeepSeek-R1 发布，登顶全球 App Store', desc: '1 月 20 日开源发布，训练成本仅为 GPT-4 的 1/20。一周内超越 ChatGPT 登顶美国 App Store，震动华尔街。' },
  ]},
  { date: '2024 年 12 月', color: '#0d9488', items: [
    { title: '🇨🇳 DeepSeek-V3 开源发布', desc: '671B 参数 MoE 模型，性能比肩 GPT-4o，训练成本仅 $557 万。开源社区震动，中国大模型实力获全球认可。' },
  ]},
  { date: '2024 年 11 月', color: '#64748b', items: [
    { title: '🇨🇳 Qwen2.5-Coder 32B 开源', desc: '阿里通义千问发布编程专用模型，性能比肩 GPT-4o，可本地部署。国产开源编程模型首次进入第一梯队。' },
  ]},
]

const show = ref(false)
onMounted(() => { setTimeout(() => show.value = true, 800) })
</script>

<template>
  <section class="tl-section" :class="{ show }">
    <!-- 彩虹分隔装饰 -->
    <div class="tl-divider" aria-hidden="true"></div>

    <h2 class="tl-title">为什么是现在？</h2>
    <p class="tl-subtitle">2025-2026 年，AI 对团队与个体的冲击集中爆发</p>

    <div class="tl-list">
      <!-- 轴线 -->
      <div class="tl-axis" aria-hidden="true"></div>

      <div
        v-for="(e, i) in events"
        :key="i"
        class="tl-item"
        :style="{
          '--c': e.color,
          '--delay': i * 0.08 + 's',
        }"
      >
        <!-- 圆点 -->
        <div class="tl-dot"></div>

        <!-- 卡片 -->
        <div class="tl-card">
          <span class="tl-date">{{ e.date }}</span>
          <div v-for="(item, idx) in e.items" :key="idx" class="tl-event">
            <h3 class="tl-card-title">{{ item.title }}</h3>
            <p class="tl-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tl-section {
  position: relative;
  z-index: 1;
  max-width: 780px;
  margin: 0 auto;
  padding: 16px 24px 64px;
}

/* 分隔线 */
.tl-divider {
  width: 80px;
  height: 4px;
  margin: 0 auto 40px;
  border-radius: 4px;
  background: linear-gradient(90deg, #f43f5e, #f59e0b, #10b981, #06b6d4, #8b5cf6, #d946ef);
  background-size: 200% 100%;
  animation: shimmer 3s linear infinite;
}

/* 标题 */
.tl-title {
  text-align: center;
  font-size: 1.85rem;
  font-weight: 800;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #f43f5e, #f59e0b, #10b981, #06b6d4, #8b5cf6);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gFlow 5s ease infinite;
}
.tl-subtitle {
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  margin-bottom: 40px;
}

/* 时间线列表 */
.tl-list {
  position: relative;
  padding-left: 32px;
}

/* 轴线 - 全光谱 */
.tl-axis {
  position: absolute;
  left: 9px;
  top: 0;
  bottom: 0;
  width: 3px;
  border-radius: 3px;
  background: linear-gradient(180deg, #f43f5e, #f59e0b, #10b981, #06b6d4, #8b5cf6, #d946ef, #f97316);
  opacity: 0.5;
}

/* 每一项 */
.tl-item {
  position: relative;
  margin-bottom: 12px;
  opacity: 0;
  transform: translateX(-12px);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.tl-section.show .tl-item {
  opacity: 1;
  transform: translateX(0);
  transition-delay: var(--delay);
}

/* 圆点 */
.tl-dot {
  position: absolute;
  left: -29px;
  top: 18px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--c);
  box-shadow: 0 0 0 3px var(--vp-c-bg), 0 0 0 5px var(--c);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 2;
}
.tl-item:hover .tl-dot {
  transform: scale(1.4);
  box-shadow:
    0 0 0 3px var(--vp-c-bg),
    0 0 0 6px var(--c),
    0 0 20px var(--c);
}

/* 卡片 */
.tl-card {
  padding: 16px 20px;
  border-radius: 14px;
  border: 1.5px solid transparent;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);

  background:
    linear-gradient(rgba(255,255,255,0.55), rgba(255,255,255,0.55)) padding-box,
    linear-gradient(135deg, var(--c), color-mix(in srgb, var(--c) 30%, transparent)) border-box;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.dark .tl-card {
  background:
    linear-gradient(rgba(30,30,46,0.55), rgba(30,30,46,0.55)) padding-box,
    linear-gradient(135deg, var(--c), color-mix(in srgb, var(--c) 25%, transparent)) border-box;
}

.tl-item:hover .tl-card {
  transform: translateX(6px);
  box-shadow:
    0 12px 40px color-mix(in srgb, var(--c) 15%, transparent),
    0 0 0 1px var(--c);
  border-color: var(--c);
}

/* 日期 */
.tl-date {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 6px;
  margin-bottom: 6px;
  background: color-mix(in srgb, var(--c) 14%, transparent);
  color: var(--c);
}
.dark .tl-date {
  background: color-mix(in srgb, var(--c) 20%, transparent);
}

/* 标题 */
.tl-card-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 4px;
  color: var(--vp-c-text-1);
  transition: color 0.2s;
}

/* 同月多事件间距 */
.tl-event + .tl-event {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed color-mix(in srgb, var(--c) 25%, transparent);
}
.tl-item:hover .tl-card-title {
  color: var(--c);
}

/* 描述 */
.tl-desc {
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes gFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@media (max-width: 640px) {
  .tl-list { padding-left: 26px; }
  .tl-dot { left: -23px; width: 12px; height: 12px; }
  .tl-card { padding: 14px 16px; }
}

@media (prefers-reduced-motion: reduce) {
  .tl-item { opacity: 1; transform: none; transition: none; }
}
</style>
