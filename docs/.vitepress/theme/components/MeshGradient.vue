<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
let animId = null

const colors = [
  [244, 63, 94],   // rose
  [245, 158, 11],  // amber
  [16, 185, 129],  // emerald
  [6, 182, 212],   // cyan
  [139, 92, 246],  // violet
  [217, 70, 239],  // fuchsia
]

class Blob {
  constructor(w, h, color) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.vx = (Math.random() - 0.5) * 0.4
    this.vy = (Math.random() - 0.5) * 0.4
    this.r = 180 + Math.random() * 160
    this.color = color
    this.w = w
    this.h = h
  }
  update() {
    this.x += this.vx
    this.y += this.vy
    if (this.x < -this.r) this.x = this.w + this.r
    if (this.x > this.w + this.r) this.x = -this.r
    if (this.y < -this.r) this.y = this.h + this.r
    if (this.y > this.h + this.r) this.y = -this.r
  }
  draw(ctx) {
    const [r, g, b] = this.color
    const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r)
    grad.addColorStop(0, `rgba(${r},${g},${b},0.35)`)
    grad.addColorStop(0.5, `rgba(${r},${g},${b},0.12)`)
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
    ctx.fillStyle = grad
    ctx.fillRect(this.x - this.r, this.y - this.r, this.r * 2, this.r * 2)
  }
}

let blobs = []

function init() {
  const el = canvas.value
  if (!el) return
  const dpr = window.devicePixelRatio || 1
  const w = el.offsetWidth
  const h = el.offsetHeight
  el.width = w * dpr
  el.height = h * dpr
  const ctx = el.getContext('2d')
  ctx.scale(dpr, dpr)

  blobs = colors.map(c => new Blob(w, h, c))

  function frame() {
    ctx.clearRect(0, 0, w, h)
    blobs.forEach(b => { b.update(); b.draw(ctx) })
    animId = requestAnimationFrame(frame)
  }
  frame()
}

onMounted(() => {
  init()
  window.addEventListener('resize', init)
})
onUnmounted(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', init)
})
</script>

<template>
  <canvas ref="canvas" class="mesh-bg" aria-hidden="true" />
</template>

<style scoped>
.mesh-bg {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.7;
}
.dark .mesh-bg {
  opacity: 0.4;
}
</style>
