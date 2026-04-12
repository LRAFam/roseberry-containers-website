<template>
  <canvas ref="canvasEl" class="absolute inset-0 w-full h-full pointer-events-none" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasEl = ref<HTMLCanvasElement | null>(null)
let animId = 0
let cleanup: (() => void) | null = null

onMounted(() => {
  const canvas = canvasEl.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')!

  interface Particle {
    x: number; y: number
    vx: number; vy: number
    r: number; alpha: number; alphaDir: number
  }

  const COUNT = 55
  let particles: Particle[] = []
  let W = 0, H = 0

  function resize() {
    const rect = canvas.parentElement!.getBoundingClientRect()
    W = rect.width; H = rect.height
    canvas.width  = W * window.devicePixelRatio
    canvas.height = H * window.devicePixelRatio
    canvas.style.width  = W + 'px'
    canvas.style.height = H + 'px'
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    init()
  }

  function rand(a: number, b: number) { return a + Math.random() * (b - a) }

  function init() {
    particles = Array.from({ length: COUNT }, () => ({
      x: rand(0, W), y: rand(0, H),
      vx: rand(-0.12, 0.12), vy: rand(-0.18, -0.06),
      r: rand(1, 2.8),
      alpha: rand(0.08, 0.45),
      alphaDir: Math.random() > 0.5 ? 1 : -1,
    }))
  }

  function tick() {
    animId = requestAnimationFrame(tick)
    ctx.clearRect(0, 0, W, H)

    for (const p of particles) {
      // Drift
      p.x += p.vx
      p.y += p.vy

      // Pulse alpha
      p.alpha += p.alphaDir * 0.003
      if (p.alpha > 0.48 || p.alpha < 0.05) p.alphaDir *= -1

      // Wrap edges
      if (p.y < -4) { p.y = H + 4; p.x = rand(0, W) }
      if (p.x < -4) p.x = W + 4
      if (p.x > W + 4) p.x = -4

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(74, 190, 130, ${p.alpha})`
      ctx.fill()
    }
  }

  resize()
  tick()

  const ro = new ResizeObserver(resize)
  ro.observe(canvas.parentElement!)

  cleanup = () => {
    cancelAnimationFrame(animId)
    ro.disconnect()
  }
})

onBeforeUnmount(() => cleanup?.())
</script>
