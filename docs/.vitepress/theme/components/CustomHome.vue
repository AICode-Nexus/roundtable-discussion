<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MeshGradient from './MeshGradient.vue'
import ColorfulHero from './ColorfulHero.vue'
import ColorfulCards from './ColorfulCards.vue'
import ColorfulTimeline from './ColorfulTimeline.vue'

const { frontmatter } = useData()
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <MeshGradient />
      <ColorfulHero />
    </template>

    <!-- 隐藏默认 hero -->
    <template #home-hero-after>
      <div style="display:none"></div>
    </template>

    <!-- 替换默认 features -->
    <template #home-features-before>
      <ColorfulCards />
    </template>

    <template #home-features-after>
      <ColorfulTimeline />
    </template>
  </Layout>
</template>
