# EP01 Five Core Topics Refresh Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reframe EP01 around the five宣发核心话题 across the homepage, EP01 landing page, sidebar, summary, interactive page, and supporting copy without deleting the old topic pages.

**Architecture:** Keep the existing VitePress structure and long-form roundtable topic pages, but replace the public entry surfaces with a five-topic narrative. The implementation is mostly content and configuration edits across Vue SFCs and Markdown files, with regression checks based on targeted text searches plus a full VitePress build.

**Tech Stack:** VitePress 1.6, Vue 3 SFCs, Markdown content pages, npm scripts (`docs:dev`, `docs:build`, `docs:preview`)

---

## File Map

- `docs/.vitepress/theme/components/ColorfulHero.vue`
  - Homepage hero copy, CTA framing, and top-line stats.
- `docs/.vitepress/theme/components/ColorfulCards.vue`
  - Homepage topic-card data and section subtitle.
- `docs/.vitepress/config.mts`
  - EP01 sidebar labels and ordering.
- `docs/episodes/ep01/index.md`
  - EP01 landing page narrative and five-topic agenda.
- `docs/episodes/ep01/summary.md`
  - EP01 overview table and summary copy.
- `docs/episodes/ep01/interactive.md`
  - Poll-style interactive page; must shrink from 8 topics to 5 and drop the persona quiz.
- `docs/episodes/ep01/topic-4.md`
  - Normalize “未来半年” wording to the宣发口径 “未来 6 个月”.
- `docs/episodes/ep01/data.md`
  - Remove the hard dependency on `topic-7` in the “角色生存指数” intro line.
- `README.md`
  - Align repository overview copy with the new five-topic public narrative while keeping the file tree accurate.

## Chunk 1: Homepage and Navigation Surfaces

### Task 1: Lock the obsolete-copy baseline for the public entry surfaces

**Files:**
- Verify: `docs/.vitepress/theme/components/ColorfulHero.vue`
- Verify: `docs/.vitepress/theme/components/ColorfulCards.vue`
- Verify: `docs/.vitepress/config.mts`
- Verify: `docs/episodes/ep01/index.md`
- Verify: `docs/episodes/ep01/summary.md`
- Verify: `docs/episodes/ep01/interactive.md`

- [ ] **Step 1: Capture the old public-entry copy that must disappear**

Run:

```bash
rg -n "8 个议题|未来 3 年|topic-3|topic-5|topic-7" \
  docs/.vitepress/theme/components/ColorfulHero.vue \
  docs/.vitepress/theme/components/ColorfulCards.vue \
  docs/.vitepress/config.mts \
  docs/episodes/ep01/index.md \
  docs/episodes/ep01/summary.md \
  docs/episodes/ep01/interactive.md
```

Expected: matches in the current homepage/EP01 entry surfaces that confirm the stale five-vs-eight mismatch still exists.

- [ ] **Step 2: Save the command output in the implementation notes for comparison after edits**

Expected: a clear before-state checklist showing exactly which files still expose the old framing.

### Task 2: Refresh the homepage hero to sell the five core questions

**Files:**
- Modify: `docs/.vitepress/theme/components/ColorfulHero.vue`

- [ ] **Step 1: Update the hero description and stats block**

Replace the homepage framing so it stops advertising “8 个议题 / 15 篇深度讨论” and instead anchors on the five-topic campaign:

```vue
<p class="hero-desc">5 个核心话题，拆开 AI 时代最值得公开讨论的团队问题</p>

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
```

- [ ] **Step 2: Keep the existing visual structure intact**

Expected: no CSS refactor unless the new text causes obvious overflow; prefer preserving the existing visual language.

- [ ] **Step 3: Verify the old stat copy is gone from the hero**

Run:

```bash
rg -n "8 个议题|15篇深度讨论|15 篇深度讨论" docs/.vitepress/theme/components/ColorfulHero.vue
```

Expected: no matches.

- [ ] **Step 4: Commit the hero refresh**

```bash
git add docs/.vitepress/theme/components/ColorfulHero.vue
git commit -m "feat: refresh EP01 homepage hero around five core topics"
```

### Task 3: Replace the homepage topic cards and EP01 sidebar with the five-topic list

**Files:**
- Modify: `docs/.vitepress/theme/components/ColorfulCards.vue`
- Modify: `docs/.vitepress/config.mts`

- [ ] **Step 1: Replace the `cards` array with exactly five cards**

Use this order and targeting:

```js
[
  {
    emoji: '💬',
    title: 'AI 在放大个体，还是在重组团队？',
    desc: '当一个人加上 AI 就像一支小队，我们该重新理解个人能力，还是团队结构？',
    link: '/roundtable-discussion/episodes/ep01/topic-1',
  },
  {
    emoji: '🔥',
    title: '一个需求还需不需要完整链路？',
    desc: '效率被压到极致后，流程到底是护栏，还是负担？',
    link: '/roundtable-discussion/episodes/ep01/topic-2',
  },
  {
    emoji: '🧭',
    title: '未来 6 个月，每个岗位最该升级什么？',
    desc: '如果只能升级一项能力，今天该押注判断力、架构力，还是 AI 协作力？',
    link: '/roundtable-discussion/episodes/ep01/topic-4',
  },
  {
    emoji: '🎓',
    title: '新人还需要从零学起吗？',
    desc: 'AI 能补短板，但它到底是在加速成长，还是制造空心化？',
    link: '/roundtable-discussion/episodes/ep01/topic-6',
  },
  {
    emoji: '🌐',
    title: '人人全栈是解放还是灾难？',
    desc: '当每个人都能借 AI 越界，速度和专业之间的边界还剩下什么？',
    link: '/roundtable-discussion/episodes/ep01/topic-8',
  },
]
```

Keep the existing color/gradient fields, but assign them across all five cards so there is no missing style token.

- [ ] **Step 2: Update the section subtitle to match the new narrative**

Change:

```vue
<p class="section-subtitle">四个关键议题，探讨 AI 时代的团队协作变革</p>
```

to:

```vue
<p class="section-subtitle">5 个核心话题，集中展开这一期最值得被转发和讨论的问题</p>
```

- [ ] **Step 3: Rewrite the EP01 sidebar to surface only the five main topics**

Keep these entries in order:

```ts
{ text: '📋 本期概览', link: '/episodes/ep01/' },
{ text: '👥 嘉宾角色解读', link: '/episodes/ep01/roles' },
{ text: '💬 AI 到底在放大个体，还是在重组团队？', link: '/episodes/ep01/topic-1' },
{ text: '🔥 一个需求还需不需要完整链路？', link: '/episodes/ep01/topic-2' },
{ text: '🧭 未来 6 个月，每个岗位最该升级什么？', link: '/episodes/ep01/topic-4' },
{ text: '🎓 新人还需要从零学起吗？', link: '/episodes/ep01/topic-6' },
{ text: '🌐 人人全栈是解放还是灾难？', link: '/episodes/ep01/topic-8' },
{ text: '🎲 快问快答', link: '/episodes/ep01/lightning' },
{ text: '📊 数据洞察', link: '/episodes/ep01/data' },
{ text: '🎮 互动专区', link: '/episodes/ep01/interactive' },
{ text: '📝 本期总结', link: '/episodes/ep01/summary' },
{ text: '📚 延伸阅读', link: '/episodes/ep01/references' }
```

Do not remove `topic-3`, `topic-5`, or `topic-7` files; only remove them from this primary list.

- [ ] **Step 4: Run the targeted regression search on the homepage/nav surfaces**

Run:

```bash
rg -n "未来 3 年|topic-3|topic-5|topic-7" \
  docs/.vitepress/theme/components/ColorfulCards.vue \
  docs/.vitepress/config.mts
```

Expected: no matches.

- [ ] **Step 5: Commit the homepage-card and sidebar changes**

```bash
git add docs/.vitepress/theme/components/ColorfulCards.vue docs/.vitepress/config.mts
git commit -m "feat: focus EP01 homepage and sidebar on five core topics"
```

## Chunk 2: EP01 Core Content Surfaces

### Task 4: Rewrite the EP01 landing page into a five-question agenda

**Files:**
- Modify: `docs/episodes/ep01/index.md`

- [ ] **Step 1: Replace the current four-section agenda with five direct topic blocks**

Use these five blocks in order, each with a 1–2 sentence setup and a direct `查看讨论` link:

1. `AI 到底在放大个体，还是在重组团队？` → `./topic-1`
2. `一个需求还需不需要完整链路？` → `./topic-2`
3. `未来 6 个月，每个岗位最该升级的能力是什么？` → `./topic-4`
4. `新人还需要从零学起吗？` → `./topic-6`
5. `人人全栈是解放还是灾难？` → `./topic-8`

Remove the dedicated `topic-3` agenda slot and stop using the “4 个环节只挂 4 个入口” structure.

- [ ] **Step 2: Refresh the “核心看点” bullets**

Replace the existing bullets with three传播导向 summaries that align with the new five-topic arc:

```md
- AI 到底是在造就超级个体，还是在逼着团队重写协作方式？
- 流程被 AI 压缩之后，质量、责任和判断应该落在哪一层？
- 当每个人都能借 AI 越界，岗位能力、新人成长和专业边界会怎么重排？
```

- [ ] **Step 3: Verify the EP01 landing page no longer links `topic-3` as a main agenda item**

Run:

```bash
rg -n "topic-3|未来 3 年" docs/episodes/ep01/index.md
```

Expected: no matches.

- [ ] **Step 4: Commit the EP01 landing page rewrite**

```bash
git add docs/episodes/ep01/index.md
git commit -m "feat: rewrite EP01 landing page around five core questions"
```

### Task 5: Collapse `summary.md` from eight topics to five

**Files:**
- Modify: `docs/episodes/ep01/summary.md`

- [ ] **Step 1: Replace the lead summary sentence**

Change:

```md
> 五个角色、八大议题、一场关于 AI 时代生存法则的深度碰撞。
```

to:

```md
> 五个角色、五个核心话题，集中拆解 AI 时代最值得公开讨论的团队问题。
```

- [ ] **Step 2: Rewrite the overview table to keep only the five promoted topics plus `lightning`**

Keep rows for:

1. `topic-1`
2. `topic-2`
3. `topic-4`
4. `topic-6`
5. `topic-8`
6. optional `lightning` row as supplementary reading

Remove rows for `topic-3`, `topic-5`, and `topic-7`.

- [ ] **Step 3: Run a regression search on the summary page**

Run:

```bash
rg -n "topic-3|topic-5|topic-7|八大议题" docs/episodes/ep01/summary.md
```

Expected: no matches.

- [ ] **Step 4: Commit the summary refresh**

```bash
git add docs/episodes/ep01/summary.md
git commit -m "feat: align EP01 summary with five-topic narrative"
```

### Task 6: Rebuild the interactive page around five topics only

**Files:**
- Modify: `docs/episodes/ep01/interactive.md`

- [ ] **Step 1: Update the page intro**

Change the opening copy from “8 个议题，8 次灵魂拷问” to a five-topic version such as:

```md
5 个核心话题，5 次必须表态的选择。看完五位嘉宾的观点，现在轮到你站队了。
```

- [ ] **Step 2: Keep only the poll blocks for `topic-1`, `topic-2`, `topic-4`, `topic-6`, and `topic-8`**

Delete the interactive sections for:

- `topic-3`
- `topic-5`
- `topic-7`

Also delete the entire “你是哪种 AI 时代生存者” persona-quiz section at the bottom.

- [ ] **Step 3: Renumber the remaining poll sections sequentially**

Expected final order:

1. AI 到底在放大个体，还是在重组团队？
2. 一个需求还需不需要完整链路？
3. 未来 6 个月，你最该升级的能力是什么？
4. AI 时代，新人还需要从零学起吗？
5. 人人全栈是解放还是灾难？

- [ ] **Step 4: Run regression checks against the interactive page**

Run:

```bash
rg -n "8 个议题，8 次灵魂拷问|议题 3：产品经理用 AI 出了设计稿和代码|议题 5：AI 写的代码上线出了事故|议题 7：团队只留 3 人|你是哪种 AI 时代生存者" docs/episodes/ep01/interactive.md
```

Expected: no matches. If the command still matches, removed-topic content or the old persona-quiz is still present and needs another edit pass.

- [ ] **Step 5: Commit the interactive-page rewrite**

```bash
git add docs/episodes/ep01/interactive.md
git commit -m "feat: focus EP01 interactive page on five core topics"
```

## Chunk 3: Supporting Copy, Wording Alignment, and Verification

### Task 7: Normalize the “未来 6 个月” wording and remove old-topic anchors from supporting pages

**Files:**
- Modify: `docs/episodes/ep01/topic-4.md`
- Modify: `docs/episodes/ep01/data.md`
- Modify: `README.md`

- [ ] **Step 1: Normalize `topic-4` title copy**

Update the frontmatter title and H1 so both use:

```md
未来 6 个月，每个岗位最该升级的能力是什么？
```

Keep the body content intact unless a sentence explicitly conflicts with the new public wording.

- [ ] **Step 2: Neutralize the `data.md` reference to `topic-7`**

Replace:

```md
来自 [议题 7：团队只留 3 人](/episodes/ep01/topic-7) 的投票结果。
```

with:

```md
基于本期关于角色取舍与团队重组的讨论整理的投票结果。
```

- [ ] **Step 3: Refresh the README narrative, but keep the file tree accurate**

Update the human-facing copy that describes EP01 as “八大议题”, while leaving the file-tree entries for `topic-3`, `topic-5`, and `topic-7` untouched because those files still exist.

Suggested narrative adjustments:

```md
- **第一期**：AI 时代 — 超级个体的崛起与团队的重构
- 当前对外主推 5 个核心话题，详情页保留完整圆桌讨论内容
```

- [ ] **Step 4: Run wording checks on the supporting pages**

Run:

```bash
rg -n "未来半年|未来 3 年|议题 7：团队只留 3 人|八大议题" \
  docs/episodes/ep01/topic-4.md \
  docs/episodes/ep01/data.md \
  README.md
```

Expected: no stale public-facing wording remains in these files.

- [ ] **Step 5: Commit the supporting-copy alignment**

```bash
git add docs/episodes/ep01/topic-4.md docs/episodes/ep01/data.md README.md
git commit -m "docs: align EP01 supporting copy with five-topic framing"
```

### Task 8: Run final regression and site verification

**Files:**
- Verify: `docs/.vitepress/theme/components/ColorfulHero.vue`
- Verify: `docs/.vitepress/theme/components/ColorfulCards.vue`
- Verify: `docs/.vitepress/config.mts`
- Verify: `docs/episodes/ep01/index.md`
- Verify: `docs/episodes/ep01/summary.md`
- Verify: `docs/episodes/ep01/interactive.md`
- Verify: `docs/episodes/ep01/topic-4.md`
- Verify: `docs/episodes/ep01/data.md`
- Verify: `README.md`

- [ ] **Step 1: Re-run the public-entry regression search**

Run:

```bash
rg -n "8 个议题|未来 3 年|topic-3|topic-5|topic-7" \
  docs/.vitepress/theme/components/ColorfulHero.vue \
  docs/.vitepress/theme/components/ColorfulCards.vue \
  docs/.vitepress/config.mts \
  docs/episodes/ep01/index.md \
  docs/episodes/ep01/summary.md \
  docs/episodes/ep01/interactive.md
```

Expected: no matches.

- [ ] **Step 2: Build the site**

Run:

```bash
npm run docs:build
```

Expected: exits 0 and writes the generated site to `docs/.vitepress/dist`.

- [ ] **Step 3: Spot-check the live local rendering**

Run:

```bash
npm run docs:dev
```

Expected: local VitePress server starts successfully. Manually confirm:

- Homepage hero shows `5 个核心话题`
- Homepage card grid shows 5 cards
- EP01 sidebar only promotes `topic-1 / 2 / 4 / 6 / 8`
- `interactive` no longer contains the persona quiz

Stop the dev server after inspection.

- [ ] **Step 4: Run @verification-before-completion discipline**

Expected: do not claim the refresh is complete until the regression search, build, and manual spot-check all pass.

- [ ] **Step 5: Confirm the final git state is clean after the chunk commits**

```bash
git status --short
```

Expected: no output. If verification required extra fixes, commit those fixes before closing the task, then re-run `git status --short` until the tree is clean.
