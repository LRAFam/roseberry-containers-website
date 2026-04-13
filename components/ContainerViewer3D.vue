<template>
  <div class="relative w-full h-full">
    <canvas
      ref="canvasEl"
      class="absolute inset-0 w-full h-full block cursor-grab active:cursor-grabbing"
      @mouseenter="setAutoRotate(false)"
      @mouseleave="setAutoRotate(true)"
    />
    <canvas ref="overlayEl" class="absolute inset-0 w-full h-full pointer-events-none" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  sizeFt?: 10 | 20 | 40
  isNew?: boolean
  hiCube?: boolean
}>(), { sizeFt: 20, isNew: false, hiCube: false })

const canvasEl = ref<HTMLCanvasElement | null>(null)
const overlayEl = ref<HTMLCanvasElement | null>(null)
let cleanup: (() => void) | null = null
let orbitControls: any = null

function setAutoRotate(val: boolean) {
  if (orbitControls) orbitControls.autoRotate = val
}

onMounted(async () => {
  const canvas = canvasEl.value
  const overlay = overlayEl.value
  if (!canvas || !overlay) return

  const [THREE, { OrbitControls }] = await Promise.all([
    import('three'),
    import('three/examples/jsm/controls/OrbitControls.js'),
  ])

  let w = canvas.clientWidth || 400
  let h = canvas.clientHeight || 256

  // ── Renderer ──────────────────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.1

  // ── Scene ─────────────────────────────────────────────────────────────────
  const scene = new THREE.Scene()

  // ── Container dimensions (Three.js units) ─────────────────────────────────
  // 10ft≈1.5:1:1.06 · 20ft≈3.0:1:1.06 · 40ft≈6.0:1:1.06
  const sizeMap: Record<number, number> = { 10: 1.5, 20: 3.0, 40: 6.0 }
  const L = sizeMap[props.sizeFt] ?? 3.0
  const H = props.hiCube ? 1.22 : 1.06
  const W = 1.0
  const span = Math.sqrt(L * L + W * W + H * H)

  // Real-world label strings
  const lengthLabels: Record<number, string> = { 10: '3.0m  |  10ft', 20: '6.1m  |  20ft', 40: '12.2m  |  40ft' }
  const lengthLabel = lengthLabels[props.sizeFt] ?? '6.1m  |  20ft'
  const heightLabel = props.hiCube ? '2.9m  (Hi-Cube)' : '2.59m'

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
  scene.add(new THREE.AmbientLight(0xd8eaf5, 0.55))
  const sun = new THREE.DirectionalLight(0xfff6e0, 1.5)
  sun.position.set(6, 14, 8)
  sun.castShadow = true
  sun.shadow.mapSize.set(1024, 1024)
  scene.add(sun)
  const fill = new THREE.DirectionalLight(0xc0d8ff, 0.4)
  fill.position.set(-6, 3, -6)
  scene.add(fill)

  // ── Materials — industrial painted steel ──────────────────────────────────
  const used = !props.isNew
  const mk = (col: number, roughness: number, metalness: number) =>
    new THREE.MeshStandardMaterial({ color: col, roughness, metalness })

  const mTop  = mk(used ? 0x357a50 : 0x3e7a52, used ? 0.62 : 0.42, 0.30)
  const mSide = mk(used ? 0x27643e : 0x2e6240, used ? 0.65 : 0.50, 0.26)
  const mFace = mk(used ? 0x1b4d30 : 0x265438, used ? 0.70 : 0.52, 0.26)
  const mBot  = mk(0x19301e, 0.80, 0.10)
  const mSt   = mk(0x1e2d22, 0.65, 0.58)
  const mCast = mk(0x3c3e3c, 0.60, 0.68)
  const mLock = mk(0xb2b6b2, 0.22, 0.90)
  const mRib  = mk(used ? 0x1f4a2e : 0x265838, used ? 0.68 : 0.54, 0.26)

  const group = new THREE.Group()
  scene.add(group)

  // ── Container body ────────────────────────────────────────────────────────
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(L, H, W),
    [mFace, mFace, mTop, mBot, mSide, mSide]
  )
  body.castShadow = true
  body.receiveShadow = true
  group.add(body)

  // ── Corrugation — wide ribs with visible gaps on all faces ────────────────
  const nRibs = Math.max(7, Math.round(L * 4.5))
  const ribW = (L / nRibs) * 0.58
  const ribH = H * 0.95
  const ribD = 0.062
  const ribGeo = new THREE.BoxGeometry(ribW, ribH, ribD)
  for (let i = 0; i < nRibs; i++) {
    const x = -L / 2 + (i + 0.5) * (L / nRibs)
    for (const zSign of [1, -1]) {
      const r = new THREE.Mesh(ribGeo, mRib)
      r.position.set(x, 0, zSign * (W / 2 + ribD / 2 - 0.006))
      r.castShadow = true
      group.add(r)
    }
  }
  const nEndRibs = 4
  const eRibGeo = new THREE.BoxGeometry(ribD, H * 0.95, (W / nEndRibs) * 0.58)
  for (let i = 0; i < nEndRibs; i++) {
    for (const xSign of [1, -1]) {
      const r = new THREE.Mesh(eRibGeo, mRib)
      r.position.set(xSign * (L / 2 + ribD / 2 - 0.006), 0, -W / 2 + (i + 0.5) * (W / nEndRibs))
      group.add(r)
    }
  }

  // ── ISO corner castings ───────────────────────────────────────────────────
  const csz = 0.11
  const castGeo = new THREE.BoxGeometry(csz, csz * 1.05, csz)
  for (const x of [-L / 2, L / 2]) for (const y of [-H / 2, H / 2]) for (const z of [-W / 2, W / 2]) {
    const c = new THREE.Mesh(castGeo, mCast)
    c.position.set(x, y, z)
    group.add(c)
  }

  // ── Top/bottom longitudinal rails ─────────────────────────────────────────
  const railGeo = new THREE.BoxGeometry(L + csz, 0.046, 0.050)
  for (const z of [W / 2, -W / 2]) {
    for (const y of [H / 2 + 0.023, -H / 2 - 0.023]) {
      const r = new THREE.Mesh(railGeo, mSt)
      r.position.set(0, y, z)
      group.add(r)
    }
  }

  // ── Floor cross-beams ─────────────────────────────────────────────────────
  const nBeams = Math.max(3, Math.round(L * 2.5))
  const beamGeo = new THREE.BoxGeometry(0.04, 0.085, W - 0.04)
  for (let i = 0; i <= nBeams; i++) {
    const bm = new THREE.Mesh(beamGeo, mSt)
    bm.position.set(-L / 2 + i * (L / nBeams), -H / 2 - 0.04, 0)
    group.add(bm)
  }

  // ── Door: centre bar, cam rods, lock pads, hinges ─────────────────────────
  const divMesh = new THREE.Mesh(new THREE.BoxGeometry(0.028, H, 0.034), mSt)
  divMesh.position.set(L / 2 + 0.014, 0, 0)
  group.add(divMesh)

  const rodGeo = new THREE.CylinderGeometry(0.019, 0.019, H * 0.92, 10)
  const lockGeo = new THREE.CylinderGeometry(0.040, 0.040, 0.030, 12)
  for (const z of [-W * 0.24, W * 0.24]) {
    const rod = new THREE.Mesh(rodGeo, mSt)
    rod.position.set(L / 2 + 0.030, 0, z)
    group.add(rod)
    for (const y of [H * 0.26, -H * 0.26]) {
      const lk = new THREE.Mesh(lockGeo, mLock)
      lk.rotation.x = Math.PI / 2
      lk.position.set(L / 2 + 0.036, y, z)
      group.add(lk)
    }
  }

  const hingeGeo = new THREE.BoxGeometry(0.026, 0.070, 0.084)
  for (const y of [H * 0.32, 0, -H * 0.32]) {
    const hg = new THREE.Mesh(hingeGeo, mSt)
    hg.position.set(L / 2 + 0.013, y, W / 2 + 0.020)
    group.add(hg)
  }

  // ── Branding texture on ±Z faces ──────────────────────────────────────────
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
  const brandMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(tc), transparent: true })
  for (const [zPos, rotY] of [[W / 2 + 0.07, 0], [-W / 2 - 0.07, Math.PI]] as [number, number][]) {
    const tm = new THREE.Mesh(new THREE.PlaneGeometry(L * 0.62, H * 0.36), brandMat)
    tm.position.set(0, 0, zPos)
    tm.rotation.y = rotY
    group.add(tm)
  }

  // ── Ground shadow ─────────────────────────────────────────────────────────
  const shadowMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(L * 1.2, W * 2.8),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.15, depthWrite: false })
  )
  shadowMesh.rotation.x = -Math.PI / 2
  shadowMesh.position.y = -H / 2 - 0.01
  scene.add(shadowMesh)

  // ── 2D dimension overlay ──────────────────────────────────────────────────
  const oc = overlay.getContext('2d')!
  overlay.width = w
  overlay.height = h

  function toScreen(v3: THREE.Vector3) {
    const v = v3.clone().project(camera)
    return { x: (v.x + 1) / 2 * overlay.width, y: (-v.y + 1) / 2 * overlay.height }
  }

  function drawDim(
    a: { x: number; y: number },
    b: { x: number; y: number },
    label: string,
    ox: number,
    oy: number
  ) {
    const ax = a.x + ox, ay = a.y + oy
    const bx = b.x + ox, by = b.y + oy
    const mx = (ax + bx) / 2, my = (ay + by) / 2
    oc.save()
    // Extension lines
    oc.strokeStyle = 'rgba(255,255,255,0.48)'
    oc.lineWidth = 1
    oc.setLineDash([3, 3])
    oc.beginPath(); oc.moveTo(a.x, a.y); oc.lineTo(ax, ay); oc.stroke()
    oc.beginPath(); oc.moveTo(b.x, b.y); oc.lineTo(bx, by); oc.stroke()
    // Dimension line
    oc.setLineDash([])
    oc.strokeStyle = 'rgba(255,255,255,0.82)'
    oc.lineWidth = 1.5
    oc.beginPath(); oc.moveTo(ax, ay); oc.lineTo(bx, by); oc.stroke()
    // Tick marks
    const dx = bx - ax, dy = by - ay
    const len = Math.sqrt(dx * dx + dy * dy)
    if (len > 0) {
      const px = -dy / len * 5, py = dx / len * 5
      for (const [ex, ey] of [[ax, ay], [bx, by]]) {
        oc.beginPath(); oc.moveTo(ex - px, ey - py); oc.lineTo(ex + px, ey + py); oc.stroke()
      }
    }
    // Label
    oc.font = 'bold 10px Inter, system-ui, Arial, sans-serif'
    const tw = oc.measureText(label).width
    const pad = 4
    const rx = mx - tw / 2 - pad, ry = my - 8, rw = tw + pad * 2, rh = 16
    oc.fillStyle = 'rgba(0,0,0,0.60)'
    oc.beginPath()
    oc.moveTo(rx + 3, ry); oc.lineTo(rx + rw - 3, ry)
    oc.quadraticCurveTo(rx + rw, ry, rx + rw, ry + 3)
    oc.lineTo(rx + rw, ry + rh - 3)
    oc.quadraticCurveTo(rx + rw, ry + rh, rx + rw - 3, ry + rh)
    oc.lineTo(rx + 3, ry + rh); oc.quadraticCurveTo(rx, ry + rh, rx, ry + rh - 3)
    oc.lineTo(rx, ry + 3); oc.quadraticCurveTo(rx, ry, rx + 3, ry)
    oc.closePath(); oc.fill()
    oc.fillStyle = '#fff'
    oc.textAlign = 'center'
    oc.textBaseline = 'middle'
    oc.fillText(label, mx, my)
    oc.restore()
  }

  // ── Animation loop ─────────────────────────────────────────────────────────
  let animId = 0
  ;(function loop() {
    animId = requestAnimationFrame(loop)
    orbitControls.update()
    renderer.render(scene, camera)
    // Project container corners to 2D each frame (camera moves with orbit)
    oc.clearRect(0, 0, overlay.width, overlay.height)
    // Length — front-bottom edge
    drawDim(
      toScreen(new THREE.Vector3(-L / 2, -H / 2, W / 2)),
      toScreen(new THREE.Vector3(L / 2, -H / 2, W / 2)),
      lengthLabel, 0, 26
    )
    // Height — front-right edge
    drawDim(
      toScreen(new THREE.Vector3(L / 2, -H / 2, W / 2)),
      toScreen(new THREE.Vector3(L / 2, H / 2, W / 2)),
      heightLabel, 30, 0
    )
    // Width — right-bottom edge
    drawDim(
      toScreen(new THREE.Vector3(L / 2, -H / 2, -W / 2)),
      toScreen(new THREE.Vector3(L / 2, -H / 2, W / 2)),
      '2.44m', 0, 26
    )
  })()

  // ── Resize ────────────────────────────────────────────────────────────────
  const ro = new ResizeObserver(() => {
    w = canvas.clientWidth; h = canvas.clientHeight
    if (!w || !h) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    overlay.width = w; overlay.height = h
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
