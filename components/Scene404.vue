<template>
  <canvas ref="canvasEl" class="w-full block" style="aspect-ratio: 16/7" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasEl = ref<HTMLCanvasElement | null>(null)
let cleanup: (() => void) | null = null

onMounted(async () => {
  const canvas = canvasEl.value
  if (!canvas) return

  const THREE = await import('three')

  const w = canvas.clientWidth || 600
  const h = canvas.clientHeight || 262

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100)
  camera.position.set(0, 3.5, 7)
  camera.lookAt(0, -0.2, 0)

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.8))
  const sun = new THREE.DirectionalLight(0xffffff, 0.8)
  sun.position.set(4, 10, 6)
  sun.castShadow = true
  scene.add(sun)

  // Helper: build a simple container mesh
  function makeContainer(L: number, H: number, D: number, color: number) {
    const g = new THREE.Group()
    const lighter = new THREE.Color(color).addScalar(0.06).getHex()
    const darker  = new THREE.Color(color).addScalar(-0.06).getHex()
    const mTop  = new THREE.MeshStandardMaterial({ color: lighter, roughness: 0.65 })
    const mSide = new THREE.MeshStandardMaterial({ color,          roughness: 0.7 })
    const mEnd  = new THREE.MeshStandardMaterial({ color: darker,  roughness: 0.7 })
    const mBot  = new THREE.MeshStandardMaterial({ color: 0x1a3322, roughness: 0.9 })
    const body  = new THREE.Mesh(new THREE.BoxGeometry(L, H, D), [mEnd, mEnd, mTop, mBot, mSide, mSide])
    body.castShadow = true
    body.receiveShadow = true
    g.add(body)

    // Corrugation stripes
    const nR = Math.max(5, Math.round(L * 2.5))
    const rMat = new THREE.MeshStandardMaterial({ color: darker, roughness: 0.75 })
    const rGeo = new THREE.BoxGeometry(0.022, H * 0.9, 0.04)
    for (let i = 0; i < nR; i++) {
      const r = new THREE.Mesh(rGeo, rMat)
      r.position.set(-L / 2 + (i + 0.5) * (L / nR), 0, D / 2 + 0.02)
      g.add(r)
    }

    // Corner posts
    const pMat = new THREE.MeshStandardMaterial({ color: 0x0a1e12, roughness: 0.7 })
    const pGeo = new THREE.BoxGeometry(0.055, H + 0.055, 0.055)
    for (const x of [-L / 2, L / 2]) {
      for (const z of [-D / 2, D / 2]) {
        const p = new THREE.Mesh(pGeo, pMat)
        p.position.set(x, 0, z)
        g.add(p)
      }
    }
    return g
  }

  // Three containers in muted tones — scattered/tumbled
  const c1 = makeContainer(3.2, 0.85, 0.85, 0x5e8c74)
  c1.position.set(-1.8, 0.05, 0.2)
  c1.rotation.set(0.08, -0.25, -1.57) // toppled on its long side
  scene.add(c1)

  const c2 = makeContainer(2.0, 0.78, 0.78, 0x4a7460)
  c2.position.set(1.0, -0.42, -0.4)
  c2.rotation.set(0.05, 0.65, 0.12)
  scene.add(c2)

  const c3 = makeContainer(1.3, 0.72, 0.72, 0x3a5e4a)
  c3.position.set(0.4, -0.45, 1.2)
  c3.rotation.set(-0.05, -0.45, 0.08)
  scene.add(c3)

  // Gentle floating animation with independent phases
  let t = 0, animId = 0
  const tick = () => {
    animId = requestAnimationFrame(tick)
    t += 0.008
    c1.position.y = 0.05  + Math.sin(t * 0.75)       * 0.05
    c2.position.y = -0.42 + Math.sin(t * 0.9  + 1.0) * 0.04
    c3.position.y = -0.45 + Math.sin(t * 0.65 + 2.1) * 0.035
    renderer.render(scene, camera)
  }
  tick()

  const ro = new ResizeObserver(() => {
    const w = canvas.clientWidth, h = canvas.clientHeight
    if (!w || !h) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  })
  ro.observe(canvas)

  cleanup = () => {
    cancelAnimationFrame(animId)
    ro.disconnect()
    renderer.dispose()
  }
})

onBeforeUnmount(() => cleanup?.())
</script>
