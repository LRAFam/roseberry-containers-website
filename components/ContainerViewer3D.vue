<template>
  <canvas
    ref="canvasEl"
    class="w-full h-full block cursor-grab active:cursor-grabbing"
    @mouseenter="setAutoRotate(false)"
    @mouseleave="setAutoRotate(true)"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  sizeFt?: 10 | 20 | 40
  isNew?: boolean
  hiCube?: boolean
}>(), { sizeFt: 20, isNew: false, hiCube: false })

const canvasEl = ref<HTMLCanvasElement | null>(null)
let cleanup: (() => void) | null = null
let orbitControls: any = null

function setAutoRotate(val: boolean) {
  if (orbitControls) orbitControls.autoRotate = val
}

onMounted(async () => {
  const canvas = canvasEl.value
  if (!canvas) return

  const [THREE, { OrbitControls }] = await Promise.all([
    import('three'),
    import('three/examples/jsm/controls/OrbitControls.js'),
  ])

  const w = canvas.clientWidth || 400
  const h = canvas.clientHeight || 256

  // ── Renderer ──────────────────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  // ── Scene ─────────────────────────────────────────────────────────────────
  const scene = new THREE.Scene()

  // ── Container dimensions ──────────────────────────────────────────────────
  // ISO proportions: 10ft≈1.25:1:1.06, 20ft≈2.5:1:1.06, 40ft≈5.0:1:1.06
  const sizeMap: Record<number, number> = { 10: 1.25, 20: 2.5, 40: 5.0 }
  const L = sizeMap[props.sizeFt] ?? 2.5
  const H = props.hiCube ? 1.22 : 1.06
  const D = 1.0
  const span = Math.sqrt(L * L + D * D + H * H)

  // ── Camera ────────────────────────────────────────────────────────────────
  const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 100)
  camera.position.set(L * 0.6, H * 1.1, span * 0.85)
  camera.lookAt(0, 0, 0)

  // ── Orbit controls ────────────────────────────────────────────────────────
  orbitControls = new OrbitControls(camera, canvas)
  orbitControls.enableDamping = true
  orbitControls.dampingFactor = 0.07
  orbitControls.enablePan = false
  orbitControls.autoRotate = true
  orbitControls.autoRotateSpeed = 1.2
  orbitControls.minPolarAngle = 0.25
  orbitControls.maxPolarAngle = Math.PI * 0.62
  orbitControls.minDistance = span * 0.5
  orbitControls.maxDistance = span * 2.5

  // ── Lights ────────────────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xffffff, 0.65))
  const sun = new THREE.DirectionalLight(0xffffff, 1.1)
  sun.position.set(4, 8, 5)
  sun.castShadow = true
  sun.shadow.mapSize.set(512, 512)
  scene.add(sun)
  const fill = new THREE.DirectionalLight(0x99ddbb, 0.3)
  fill.position.set(-4, 2, -4)
  scene.add(fill)

  // ── Material colours ───────────────────────────────────────────────────────
  const used = !props.isNew
  const mTop   = new THREE.MeshStandardMaterial({ color: used ? 0x357a56 : 0x48b872, roughness: used ? 0.72 : 0.5,  metalness: 0.2 })
  const mSide  = new THREE.MeshStandardMaterial({ color: used ? 0x27643e : 0x2e7d52, roughness: used ? 0.72 : 0.55, metalness: 0.15 })
  const mEnd   = new THREE.MeshStandardMaterial({ color: used ? 0x1b4d2f : 0x1c5c38, roughness: used ? 0.78 : 0.5,  metalness: 0.2 })
  const mBot   = new THREE.MeshStandardMaterial({ color: 0x0c2f1a, roughness: 0.9 })
  const mDark  = new THREE.MeshStandardMaterial({ color: 0x0a1e12, roughness: 0.7, metalness: 0.5 })
  const mLock  = new THREE.MeshStandardMaterial({ color: 0x4abe82, roughness: 0.3, metalness: 0.7, emissive: 0x1a5c3a, emissiveIntensity: 0.3 })
  const mRidge = new THREE.MeshStandardMaterial({ color: used ? 0x1a402c : 0x1a5038, roughness: 0.7, metalness: 0.2 })
  const mRail  = new THREE.MeshStandardMaterial({ color: 0x0c2f1a, roughness: 0.6, metalness: 0.5 })

  const group = new THREE.Group()
  scene.add(group)

  // ── Container body (face order: +X, -X, +Y, -Y, +Z, -Z) ──────────────────
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(L, H, D),
    [mEnd, mEnd, mTop, mBot, mSide, mSide]
  )
  body.castShadow = true
  body.receiveShadow = true
  group.add(body)

  // ── Corrugation ridges on ±Z faces ────────────────────────────────────────
  const nR = Math.max(6, Math.round(L * 2.8))
  const ridgeGeo = new THREE.BoxGeometry(0.02, H * 0.92, 0.045)
  for (let i = 0; i < nR; i++) {
    const x = -L / 2 + (i + 0.5) * (L / nR)
    for (const zDir of [1, -1]) {
      const r = new THREE.Mesh(ridgeGeo, mRidge)
      r.position.set(x, 0, zDir * (D / 2 + 0.022))
      group.add(r)
    }
  }

  // ── Corrugation ridges on ±X end faces ───────────────────────────────────
  const endGeo = new THREE.BoxGeometry(0.045, H * 0.92, 0.02)
  for (let i = 0; i < 4; i++) {
    const z = -D / 2 + (i + 0.5) * (D / 4)
    for (const xDir of [1, -1]) {
      const r = new THREE.Mesh(endGeo, mRidge)
      r.position.set(xDir * (L / 2 + 0.022), 0, z)
      group.add(r)
    }
  }

  // ── Rails on all 4 long edges ─────────────────────────────────────────────
  const railGeo = new THREE.BoxGeometry(L + 0.08, 0.05, 0.05)
  for (const y of [H / 2 + 0.025, -H / 2 - 0.025]) {
    for (const z of [D / 2, -D / 2]) {
      const r = new THREE.Mesh(railGeo, mRail)
      r.position.set(0, y, z)
      group.add(r)
    }
  }

  // ── Corner posts ──────────────────────────────────────────────────────────
  const postGeo = new THREE.BoxGeometry(0.06, H + 0.06, 0.06)
  for (const x of [-L / 2, L / 2]) {
    for (const z of [-D / 2, D / 2]) {
      const p = new THREE.Mesh(postGeo, mDark)
      p.position.set(x, 0, z)
      group.add(p)
    }
  }

  // ── Door details on +X face ───────────────────────────────────────────────
  const doorSplit = new THREE.Mesh(new THREE.BoxGeometry(0.02, H * 0.95, 0.02), mDark)
  doorSplit.position.set(L / 2 + 0.011, 0, 0)
  group.add(doorSplit)

  const camBarGeo = new THREE.BoxGeometry(0.02, 0.02, D * 0.75)
  for (const y of [H * 0.18, -H * 0.18]) {
    const bar = new THREE.Mesh(camBarGeo, mDark)
    bar.position.set(L / 2 + 0.016, y, 0)
    group.add(bar)
  }

  const lockGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.022, 10)
  for (const z of [-D * 0.15, D * 0.15]) {
    for (const y of [H * 0.18, -H * 0.18]) {
      const lock = new THREE.Mesh(lockGeo, mLock)
      lock.rotation.x = Math.PI / 2
      lock.position.set(L / 2 + 0.022, y, z)
      group.add(lock)
    }
  }

  // ── Branding text on ±Z faces ─────────────────────────────────────────────
  const tc = document.createElement('canvas')
  tc.width = 512; tc.height = 128
  const tctx = tc.getContext('2d')!
  tctx.textAlign = 'center'
  tctx.fillStyle = props.isNew ? '#f59e0b' : '#d97706'
  tctx.font = 'bold 46px Arial, sans-serif'
  tctx.fillText('ROSEBERRY', 256, 52)
  tctx.fillStyle = '#fcd34d'
  tctx.font = 'bold 28px Arial, sans-serif'
  tctx.fillText('CONTAINERS', 256, 92)
  const brandTex = new THREE.CanvasTexture(tc)
  const brandMat = new THREE.MeshBasicMaterial({ map: brandTex, transparent: true })
  for (const [zPos, rotY] of [[D / 2 + 0.055, 0], [-D / 2 - 0.055, Math.PI]] as [number, number][]) {
    const tm = new THREE.Mesh(new THREE.PlaneGeometry(L * 0.6, H * 0.34), brandMat)
    tm.position.set(0, 0, zPos)
    tm.rotation.y = rotY
    group.add(tm)
  }

  // ── Ground shadow ─────────────────────────────────────────────────────────
  const shadowMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(L * 1.15, D * 2.4),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.15, depthWrite: false })
  )
  shadowMesh.rotation.x = -Math.PI / 2
  shadowMesh.position.y = -H / 2 - 0.01
  scene.add(shadowMesh)

  // ── Animation loop ────────────────────────────────────────────────────────
  let animId = 0
  const tick = () => {
    animId = requestAnimationFrame(tick)
    orbitControls.update()
    renderer.render(scene, camera)
  }
  tick()

  // ── Resize ────────────────────────────────────────────────────────────────
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
    orbitControls.dispose()
    renderer.dispose()
    orbitControls = null
  }
})

onBeforeUnmount(() => cleanup?.())
</script>
