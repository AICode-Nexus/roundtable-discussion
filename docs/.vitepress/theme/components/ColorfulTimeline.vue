<script setup>
import { ref, onMounted } from 'vue'

const events = [
  { date: '2026 年 3 月', color: '#6366f1', items: [
    { title: 'Cursor ARR 突破 $20 亿', desc: '67% 的财富 500 强使用，每天生成 1.5 亿行企业代码。AI IDE 赛道诞生首个超级独角兽。' },
    { title: '🇨🇳 DeepSeek-R2 开源发布', desc: '1.2 万亿参数 MoE 模型，仅激活 78B，性能比肩 GPT-5，成本降低 97%。开源编码模型再次沸腾。' },
  ]},
  { date: '2026 年 2 月', color: '#8b5cf6', items: [
    { title: 'GitHub Copilot 多 Agent 工作流上线', desc: 'Copilot 支持多智能体并行协作，从代码补全进化为全流程自动化开发平台。' },
    { title: 'Cursor 推出 Background Agents', desc: '后台 Agent 在隔离 VM 中自主运行，开发者可同时处理多个编码任务。' },
  ]},
  { date: '2026 年 1 月', color: '#3b82f6', items: [
    { title: 'GitHub Copilot 470 万付费用户', desc: '90% 的财富 100 强企业使用。AI 辅助编码从可选项变成开发者标配。' },
    { title: '🇨🇳 Trae 全球注册用户突破千万', desc: '字节跳动 AI IDE 因免费策略和多模型支持快速扩张，成为 Cursor 最大竞争对手。' },
    { title: '🇨🇳 Kimi K2.6-code-preview 上线', desc: '月之暗面发布编程专用万亿参数模型，Kimi Code CLI 支持 MCP 协议，100 个 Agent 并行协作。' },
  ]},
  { date: '2025 年 12 月', color: '#84cc16', items: [
    { title: 'OpenAI o3 推理模型发布', desc: 'ARC-AGI 测试得分大幅提升，"深度思考"成为 AI 编码新范式。' },
    { title: '🇨🇳 DeepSeek-V3.2 发布', desc: '685B 参数，AIME 2025 得分 96%。中国开源模型在推理与编码能力上首次全面领先。' },
  ]},
  { date: '2025 年 11 月', color: '#06b6d4', items: [
    { title: 'Cursor D 轮融资 $23 亿', desc: '估值 $293 亿。AI 编码 IDE 从尝鲜工具变成企业标配。' },
    { title: '🇨🇳 Kimi K2-Thinking 发布', desc: '月之暗面万亿参数开源推理模型，支持 200+ 步连续工具调用，SWE-Bench 得分 71%。' },
  ]},
  { date: '2025 年 10 月', color: '#f472b6', items: [
    { title: 'Meta 开源 Llama 4 系列', desc: '开源模型性能逼近闭源前沿，中小团队获得部署自主 AI 编码助手的能力。' },
  ]},
  { date: '2025 年 9 月', color: '#14b8a6', items: [
    { title: 'GPT-5-Codex 发布', desc: 'OpenAI 发布编程专用 GPT-5 变体，支持 7 小时长任务重构，接入 GitHub Copilot 公测。' },
    { title: 'Claude Sonnet 4.5 发布', desc: 'Anthropic 新一代编码模型，成为 Cursor/Windsurf 等 IDE 的默认首选模型。' },
    { title: '🇨🇳 Kimi K2 开源发布', desc: '月之暗面 1T 参数 MoE 模型，SWE-Bench Verified 得分 69.2%，匹配顶级编程模型。' },
  ]},
  { date: '2025 年 7 月', color: '#fbbf24', items: [
    { title: 'AWS 发布 Kiro IDE 公测', desc: 'Amazon 推出 Spec-driven Agentic IDE，主打"超越 Vibe Coding"的规范驱动开发。' },
    { title: '🇨🇳 Trae SOLO 模式发布', desc: '字节跳动推出 AI 自主编程模式，登顶 SWE-bench 榜首，支持端到端自动化开发。' },
    { title: '🇨🇳 Qwen3-Coder 480B 发布', desc: '阿里发布 Agentic 编程模型，256K 上下文，支持长周期多步骤自主编程任务。' },
  ]},
  { date: '2025 年 6 月', color: '#a3a3a3', items: [
    { title: 'Apple WWDC：Xcode AI 助手发布', desc: 'Apple Intelligence 落地开发工具，Xcode 集成 AI 编码能力，移动端开发工作流被重新定义。' },
  ]},
  { date: '2025 年 5 月', color: '#a855f7', items: [
    { title: 'Claude 4 Opus / Sonnet 发布', desc: '5 月 22 日发布，200K 上下文 + 多小时 Extended Thinking，Claude Code 同日 GA。' },
    { title: 'OpenAI Codex 云端 Agent 发布', desc: '5 月 16 日发布，基于 codex-1 模型的云端编程 Agent，支持多任务并行。' },
    { title: '🇨🇳 DeepSeek-Prover-V2 发布', desc: 'DeepSeek 发布形式化定理证明专用模型，在 Lean 4 证明能力上达到新高度。' },
  ]},
  { date: '2025 年 4 月', color: '#f43f5e', items: [
    { title: 'OpenAI Codex CLI 开源', desc: '4 月 16 日以 Apache 2.0 开源，本地终端编码 Agent，开启 CLI 编程 Agent 时代。' },
  ]},
  { date: '2025 年 3 月', color: '#c084fc', items: [
    { title: '🇨🇳 字节跳动发布 Trae 国内版', desc: '3 月 3 日发布，中国首个 AI 原生 IDE，内置豆包与 DeepSeek 满血版模型。' },
  ]},
  { date: '2025 年 2 月', color: '#ec4899', items: [
    { title: 'Claude Code 研究预览版发布', desc: '2 月 24 日随 Claude 3.7 Sonnet 发布，终端原生编码 Agent 首次亮相。' },
    { title: 'GitHub Copilot Agent Mode 上线', desc: 'Copilot 从代码补全进化为多文件自主编辑的 Agent 模式，AI 编程进入新阶段。' },
    { title: 'Karpathy 提出 "Vibe Coding"', desc: '一条推文定义了新编程范式——不写代码，只描述意图。后被评为 2025 年度词汇。' },
    { title: '🇨🇳 通义灵码 2.0 发布 AI 程序员', desc: '阿里云推出国内首个 AI 程序员，支持工程级多文件生成，集成 DeepSeek 模型。' },
  ]},
  { date: '2025 年 1 月', color: '#ef4444', items: [
    { title: '🇨🇳 DeepSeek-R1 发布，登顶全球 App Store', desc: '1 月 20 日开源，训练成本仅为 GPT-4 的 1/20。推理能力震动全球，编码场景广泛采用。' },
  ]},
  { date: '2024 年 12 月', color: '#0d9488', items: [
    { title: '🇨🇳 DeepSeek-V3 开源发布', desc: '671B 参数 MoE 模型，性能比肩 GPT-4o，训练成本仅 $557 万。中国大模型实力获全球认可。' },
  ]},
  { date: '2024 年 11 月', color: '#64748b', items: [
    { title: 'Windsurf IDE 发布', desc: 'Codeium 推出首个"Agentic IDE"，内置 Cascade Agent，支持全代码库理解与多文件编辑。' },
    { title: '🇨🇳 Qwen2.5-Coder 32B 开源', desc: '阿里通义千问编程专用模型，性能比肩 GPT-4o，可本地部署。国产编程模型首次进入第一梯队。' },
  ]},
  { date: '2024 年 6 月', color: '#f97316', items: [
    { title: 'Claude 3.5 Sonnet 发布', desc: '6 月 21 日发布，编码能力大幅超越同期所有模型，引爆 Agentic Coding 浪潮。Cursor 用户量暴涨。' },
  ]},
]

const show = ref(false)
onMounted(() => { setTimeout(() => show.value = true, 800) })
</script>

<template>
  <section class="tl-section" :class="{ show }">
    <!-- 彩虹分隔装饰 -->
    <div class="tl-divider" aria-hidden="true"></div>

    <h2 class="tl-title">AI Coding 大事记</h2>
    <p class="tl-subtitle">2024-2026 · 编码模型、IDE 工具、编程能力的集中爆发</p>

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
