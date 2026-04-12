<template>
  <canvas ref="canvasEl" class="w-full block" style="aspect-ratio: 1" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasEl = ref<HTMLCanvasElement | null>(null)
let cleanup: (() => void) | null = null

onMounted(async () => {
  const canvas = canvasEl.value
  if (!canvas) return

  const THREE = await import('three')

  const w = canvas.clientWidth || 420
  const h = canvas.clientHeight || 420

  // ── Renderer ──────────────────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  // ── Scene ─────────────────────────────────────────────────────────────────
  const scene = new THREE.Scene()

  // ── Orthographic camera at isometric angle ────────────────────────────────
  const zoom = 3.8
  const aspect = w / h
  const camera = new THREE.OrthographicCamera(
    -zoom * aspect, zoom * aspect, zoom, -zoom, 0.1, 200
  )
  camera.position.set(10, 7, 10)
  camera.lookAt(0, 0, 0)

  // ── Lighting ──────────────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xffffff, 0.65))

  const sun = new THREE.DirectionalLight(0xffffff, 1.1)
  sun.position.set(6, 14, 8)
  sun.castShadow = true
  sun.shadow.mapSize.set(1024, 1024)
  scene.add(sun)

  const fill = new THREE.DirectionalLight(0x99ddbb, 0.3)
  fill.position.set(-6, 3, -4)
  scene.add(fill)

  // ── Container group (everything moves together for animation) ─────────────
  const group = new THREE.Group()
  scene.add(group)

  // Dimensions: 40ft proportions ≈ 5.2 : 1 : 1
  const L = 5.2, H = 1.0, D = 1.0

  // ── Materials ─────────────────────────────────────────────────────────────
  const mTop   = new THREE.MeshStandardMaterial({ color: 0x48b872, roughness: 0.5,  metalness: 0.2 })
  const mSide  = new THREE.MeshStandardMaterial({ color: 0x2e7d52, roughness: 0.55, metalness: 0.2 })
  const mEnd   = new THREE.MeshStandardMaterial({ color: 0x1c5c38, roughness: 0.5,  metalness: 0.25 })
  const mBot   = new THREE.MeshStandardMaterial({ color: 0x0c2f1a, roughness: 0.9 })
  const mDark  = new THREE.MeshStandardMaterial({ color: 0x0a1e12, roughness: 0.7,  metalness: 0.5 })
  const mLock  = new THREE.MeshStandardMaterial({ color: 0x4abe82, roughness: 0.3,  metalness: 0.7, emissive: 0x1a5c3a, emissiveIntensity: 0.3 })
  const mRidge = new THREE.MeshStandardMaterial({ color: 0x1a5038, roughness: 0.65, metalness: 0.2 })
  const mRail  = new THREE.MeshStandardMaterial({ color: 0x0c2f1a, roughness: 0.6,  metalness: 0.5 })

  // ── Container body: face order [+X, -X, +Y, -Y, +Z, -Z] ──────────────────
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(L, H, D),
    [mEnd, mEnd, mTop, mBot, mSide, mSide]
  )
  body.castShadow = true
  body.receiveShadow = true
  group.add(body)

  // ── Corrugation ridges on +Z face (front long side) ───────────────────────
  const nRidges = 14
  const rW = 0.022, rH = H * 0.93, rD = 0.048
  const ridgeGeo = new THREE.BoxGeometry(rW, rH, rD)
  for (let i = 0; i < nRidges; i++) {
    const r = new THREE.Mesh(ridgeGeo, mRidge)
    r.position.set(-L / 2 + (i + 0.5) * (L / nRidges), 0, D / 2 + rD / 2)
    group.add(r)
  }

  // ── Corrugation ridges on -X face (non-door end, visible) ─────────────────
  const nEndR = 4
  const erW = 0.048, erD = 0.022
  const endRidgeGeo = new THREE.BoxGeometry(erW, H * 0.93, erD)
  for (let i = 0; i < nEndR; i++) {
    const r = new THREE.Mesh(endRidgeGeo, mRidge)
    r.position.set(-L / 2 - erW / 2, 0, -D / 2 + (i + 0.5) * (D / nEndR))
    group.add(r)
  }

  // ── Top & bottom rails along front edge ───────────────────────────────────
  const railGeo = new THREE.BoxGeometry(L + 0.1, 0.055, 0.055)
  for (const y of [H / 2 + 0.027, -H / 2 - 0.027]) {
    const r = new THREE.Mesh(railGeo, mRail)
    r.position.set(0, y, D / 2)
    group.add(r)
  }

  // ── Corner posts ──────────────────────────────────────────────────────────
  const postGeo = new THREE.BoxGeometry(0.065, H + 0.065, 0.065)
  const corners: [number, number][] = [[-L/2, D/2], [L/2, D/2], [-L/2, -D/2], [L/2, -D/2]]
  for (const [x, z] of corners) {
    const p = new THREE.Mesh(postGeo, mDark)
    p.position.set(x, 0, z)
    group.add(p)
  }

  // ── Door end (+X face) ────────────────────────────────────────────────────
  // Vertical centre split
  const split = new THREE.Mesh(new THREE.BoxGeometry(0.025, H * 0.95, 0.025), mDark)
  split.position.set(L / 2 + 0.013, 0, 0)
  group.add(split)

  // Horizontal cam lock bars
  const camBarGeo = new THREE.BoxGeometry(0.025, 0.025, D * 0.75)
  for (const y of [H * 0.18, -H * 0.18]) {
    const bar = new THREE.Mesh(camBarGeo, mDark)
    bar.position.set(L / 2 + 0.02, y, 0)
    group.add(bar)
  }

  // Lock handles (cylinder, glowing green)
  const lockGeo = new THREE.CylinderGeometry(0.048, 0.048, 0.025, 10)
  for (const z of [-D * 0.16, D * 0.16]) {
    for (const y of [H * 0.18, -H * 0.18]) {
      const lock = new THREE.Mesh(lockGeo, mLock)
      lock.rotation.x = Math.PI / 2
      lock.position.set(L / 2 + 0.028, y, z)
      group.add(lock)
    }
  }

  // Hinge bars on door outer edge
  const hingeGeo = new THREE.BoxGeometry(0.025, 0.07, 0.07)
  for (const y of [H * 0.3, 0, -H * 0.3]) {
    const hinge = new THREE.Mesh(hingeGeo, mDark)
    hinge.position.set(L / 2 + 0.013, y, D / 2 + 0.01)
    group.add(hinge)
  }

  // ── Branding text on +Z face via canvas texture ───────────────────────────
  const tc = document.createElement('canvas')
  tc.width = 512; tc.height = 128
  const tctx = tc.getContext('2d')!
  tctx.textAlign = 'center'
  tctx.fillStyle = '#f59e0b'
  tctx.font = 'bold 52px Arial, sans-serif'
  tctx.fillText('ROSEBERRY', 256, 55)
  tctx.fillStyle = '#fcd34d'
  tctx.font = 'bold 32px Arial, sans-serif'
  tctx.fillText('CONTAINERS', 256, 100)
  const textMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(L * 0.65, H * 0.38),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(tc), transparent: true })
  )
  textMesh.position.set(0, 0, D / 2 + 0.07)
  group.add(textMesh)

  // ── Ground shadow ellipse ─────────────────────────────────────────────────
  const shadowMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(L * 1.2, D * 2.8),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.2, depthWrite: false })
  )
  shadowMesh.rotation.x = -Math.PI / 2
  shadowMesh.position.y = -H / 2 - 0.01
  scene.add(shadowMesh)

  // ── Animation loop ─────────────────────────────────────────────────────────
  let animId = 0
  let t = 0
  const tick = () => {
    animId = requestAnimationFrame(tick)
    t += 0.012
    // Float up/down + gentle rotation to show 3D
    group.position.y = Math.sin(t * 0.8) * 0.1
    group.rotation.y = Math.sin(t * 0.18) * 0.13
    renderer.render(scene, camera)
  }
  tick()

  // ── Resize handling ────────────────────────────────────────────────────────
  const ro = new ResizeObserver(() => {
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    if (!w || !h) return
    const a = w / h
    camera.left = -zoom * a; camera.right = zoom * a
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
