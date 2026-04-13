<template>
  <div class="relative w-full block" style="aspect-ratio: 1">
    <canvas ref="canvasEl" class="absolute inset-0 w-full h-full" />
    <canvas ref="overlayEl" class="absolute inset-0 w-full h-full pointer-events-none" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvasEl = ref<HTMLCanvasElement | null>(null)
const overlayEl = ref<HTMLCanvasElement | null>(null)
let cleanup: (() => void) | null = null

onMounted(async () => {
  const canvas = canvasEl.value
  const overlay = overlayEl.value
  if (!canvas || !overlay) return

  const THREE = await import('three')

  let w = canvas.clientWidth || 440
  let h = canvas.clientHeight || 440

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

  // ── Orthographic isometric camera ─────────────────────────────────────────
  const zoom = 2.7
  let aspect = w / h
  const camera = new THREE.OrthographicCamera(
    -zoom * aspect, zoom * aspect, zoom, -zoom, 0.1, 200
  )
  camera.position.set(10, 7, 10)
  camera.lookAt(0, 0, 0)

  // ── Lighting ──────────────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xd8eaf5, 0.55))

  const sun = new THREE.DirectionalLight(0xfff6e0, 1.55)
  sun.position.set(10, 20, 12)
  sun.castShadow = true
  sun.shadow.mapSize.set(2048, 2048)
  sun.shadow.camera.left = -10
  sun.shadow.camera.right = 10
  sun.shadow.camera.top = 10
  sun.shadow.camera.bottom = -10
  scene.add(sun)

  const fill = new THREE.DirectionalLight(0xc0d8ff, 0.4)
  fill.position.set(-8, 4, -8)
  scene.add(fill)

  // ── Container dimensions: 20ft proportions (6.1m × 2.44m × 2.59m, scaled) ─
  const L = 3.2, W = 1.28, H = 1.30

  // ── Container group ───────────────────────────────────────────────────────
  const grp = new THREE.Group()
  scene.add(grp)

  // ── Helper: make a MeshStandardMaterial ───────────────────────────────────
  const mat = (col: number, roughness: number, metalness: number) =>
    new THREE.MeshStandardMaterial({ color: col, roughness, metalness })

  // Industrial painted-steel green palette
  const mTop  = mat(0x3e7a52, 0.42, 0.32)  // lighter for top face
  const mSide = mat(0x2e6240, 0.50, 0.28)  // main side — RAL 6025-ish
  const mFace = mat(0x265438, 0.52, 0.28)  // end faces (darker, angled away)
  const mBot  = mat(0x19301e, 0.80, 0.10)  // underside
  const mSt   = mat(0x1e2d22, 0.65, 0.58)  // structural dark steel
  const mCast = mat(0x3c3e3c, 0.60, 0.68)  // ISO corner castings — grey steel
  const mLock = mat(0xb2b6b2, 0.22, 0.90)  // stainless cam locks
  const mRib  = mat(0x265838, 0.54, 0.28)  // corrugation ribs (slightly different shade)

  // ── Main body ─────────────────────────────────────────────────────────────
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(L, H, W),
    [mFace, mFace, mTop, mBot, mSide, mSide]  // +X, -X, +Y, -Y, +Z, -Z
  )
  body.castShadow = true
  body.receiveShadow = true
  grp.add(body)

  // ── Corrugation — wide flat ribs with visible gaps (real container panels) ─
  // Real 20ft containers have ~15 corrugation bays on long sides
  const nRibs = 14
  const ribW = (L / nRibs) * 0.60  // wide ribs with small gaps
  const ribH = H * 0.96
  const ribD = 0.065
  const ribGeo = new THREE.BoxGeometry(ribW, ribH, ribD)
  for (let i = 0; i < nRibs; i++) {
    const x = -L / 2 + (i + 0.5) * (L / nRibs)
    // Front face (+Z)
    const rf = new THREE.Mesh(ribGeo, mRib)
    rf.position.set(x, 0, W / 2 + ribD / 2 - 0.006)
    rf.castShadow = true
    grp.add(rf)
    // Back face (-Z)
    const rb = new THREE.Mesh(ribGeo, mRib)
    rb.position.set(x, 0, -W / 2 - ribD / 2 + 0.006)
    grp.add(rb)
  }

  // Non-door end (-X) corrugation
  const nEndRibs = 5
  const eRibW = ribD
  const eRibD = (W / nEndRibs) * 0.55
  const eRibGeo = new THREE.BoxGeometry(eRibW, H * 0.96, eRibD)
  for (let i = 0; i < nEndRibs; i++) {
    const er = new THREE.Mesh(eRibGeo, mRib)
    er.position.set(-L / 2 - eRibW / 2 + 0.006, 0, -W / 2 + (i + 0.5) * (W / nEndRibs))
    grp.add(er)
  }

  // ── ISO corner castings — the most distinctive feature of real containers ──
  // Real castings: ~178mm × 162mm × 118mm. In our scale: ~0.12 × 0.13 × 0.12
  const csz = 0.13
  const castGeo = new THREE.BoxGeometry(csz, csz * 1.05, csz)
  const corners: [number, number, number][] = [
    [-L / 2, H / 2, W / 2], [L / 2, H / 2, W / 2],
    [-L / 2, H / 2, -W / 2], [L / 2, H / 2, -W / 2],
    [-L / 2, -H / 2, W / 2], [L / 2, -H / 2, W / 2],
    [-L / 2, -H / 2, -W / 2], [L / 2, -H / 2, -W / 2],
  ]
  for (const [x, y, z] of corners) {
    const c = new THREE.Mesh(castGeo, mCast)
    c.position.set(x, y, z)
    grp.add(c)
  }

  // ── Longitudinal top & bottom rails ───────────────────────────────────────
  const railGeo = new THREE.BoxGeometry(L + csz, 0.048, 0.052)
  for (const z of [W / 2, -W / 2]) {
    const tr = new THREE.Mesh(railGeo, mSt)
    tr.position.set(0, H / 2 + 0.024, z)
    grp.add(tr)
    const br = new THREE.Mesh(railGeo, mSt)
    br.position.set(0, -H / 2 - 0.024, z)
    grp.add(br)
  }

  // End rails (width direction)
  const endRailGeo = new THREE.BoxGeometry(0.048, 0.048, W + csz)
  for (const x of [-L / 2, L / 2]) {
    for (const y of [H / 2 + 0.024, -H / 2 - 0.024]) {
      const r = new THREE.Mesh(endRailGeo, mSt)
      r.position.set(x, y, 0)
      grp.add(r)
    }
  }

  // ── Floor cross-beams (forged steel hat sections) ─────────────────────────
  const nBeams = 7
  const beamGeo = new THREE.BoxGeometry(0.045, 0.09, W - 0.05)
  for (let i = 0; i <= nBeams; i++) {
    const bm = new THREE.Mesh(beamGeo, mSt)
    bm.position.set(-L / 2 + i * (L / nBeams), -H / 2 - 0.042, 0)
    grp.add(bm)
  }

  // ── Door end (+X): two door panels with cam rods ──────────────────────────
  // Centre divider bar
  const divMesh = new THREE.Mesh(new THREE.BoxGeometry(0.032, H, 0.038), mSt)
  divMesh.position.set(L / 2 + 0.016, 0, 0)
  grp.add(divMesh)

  // Vertical cam rods (one per door half) + cam lock pads
  const rodGeo = new THREE.CylinderGeometry(0.022, 0.022, H * 0.93, 10)
  const lockGeo = new THREE.CylinderGeometry(0.044, 0.044, 0.034, 12)
  for (const z of [-W * 0.25, W * 0.25]) {
    const rod = new THREE.Mesh(rodGeo, mSt)
    rod.position.set(L / 2 + 0.035, 0, z)
    grp.add(rod)
    for (const y of [H * 0.27, -H * 0.27]) {
      const lk = new THREE.Mesh(lockGeo, mLock)
      lk.rotation.x = Math.PI / 2
      lk.position.set(L / 2 + 0.042, y, z)
      grp.add(lk)
    }
  }

  // Door hinges (3 per visible door edge)
  const hingeGeo = new THREE.BoxGeometry(0.030, 0.078, 0.092)
  for (const y of [H * 0.33, 0, -H * 0.33]) {
    const hg = new THREE.Mesh(hingeGeo, mSt)
    hg.position.set(L / 2 + 0.015, y, W / 2 + 0.022)
    grp.add(hg)
  }

  // ── Branding texture on front face ────────────────────────────────────────
  const tc = document.createElement('canvas')
  tc.width = 512; tc.height = 128
  const tctx = tc.getContext('2d')!
  tctx.textAlign = 'center'
  tctx.fillStyle = '#f59e0b'
  tctx.font = 'bold 54px Arial, sans-serif'
  tctx.fillText('ROSEBERRY', 256, 57)
  tctx.fillStyle = '#fcd34d'
  tctx.font = 'bold 32px Arial, sans-serif'
  tctx.fillText('CONTAINERS', 256, 104)
  const brand = new THREE.Mesh(
    new THREE.PlaneGeometry(L * 0.66, H * 0.44),
    new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(tc), transparent: true })
  )
  brand.position.set(0, 0, W / 2 + 0.08)
  grp.add(brand)

  // ── Ground shadow ─────────────────────────────────────────────────────────
  const shadowMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(L * 1.5, W * 3.5),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.15, depthWrite: false })
  )
  shadowMesh.rotation.x = -Math.PI / 2
  shadowMesh.position.y = -H / 2 - 0.07
  scene.add(shadowMesh)

  // ── 2D dimension overlay ──────────────────────────────────────────────────
  const oc = overlay.getContext('2d')!
  overlay.width = w
  overlay.height = h

  // Project a world-space Vector3 to 2D screen coords on the overlay canvas
  function toScreen(v3: THREE.Vector3) {
    const v = v3.clone().project(camera)
    return { x: (v.x + 1) / 2 * overlay.width, y: (-v.y + 1) / 2 * overlay.height }
  }

  // Draw an engineering dimension line between two projected screen points,
  // offset perpendicularly by (ox, oy) pixels from the actual edge
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

    // Extension lines (dashed, from container edge to dimension line)
    oc.strokeStyle = 'rgba(255,255,255,0.50)'
    oc.lineWidth = 1
    oc.setLineDash([3, 3])
    oc.beginPath(); oc.moveTo(a.x, a.y); oc.lineTo(ax, ay); oc.stroke()
    oc.beginPath(); oc.moveTo(b.x, b.y); oc.lineTo(bx, by); oc.stroke()

    // Solid dimension line
    oc.setLineDash([])
    oc.strokeStyle = 'rgba(255,255,255,0.82)'
    oc.lineWidth = 1.5
    oc.beginPath(); oc.moveTo(ax, ay); oc.lineTo(bx, by); oc.stroke()

    // Tick marks at ends (perpendicular to dimension line)
    const dx = bx - ax, dy = by - ay
    const len = Math.sqrt(dx * dx + dy * dy)
    if (len > 0) {
      const px = -dy / len * 5, py = dx / len * 5
      oc.lineWidth = 1.5
      for (const [ex, ey] of [[ax, ay], [bx, by]]) {
        oc.beginPath(); oc.moveTo(ex - px, ey - py); oc.lineTo(ex + px, ey + py); oc.stroke()
      }
    }

    // Label with rounded-rect background
    oc.font = 'bold 11px Inter, system-ui, Arial, sans-serif'
    const tw = oc.measureText(label).width
    const pad = 5
    oc.fillStyle = 'rgba(0,0,0,0.62)'
    const rx = mx - tw / 2 - pad, ry = my - 9, rw = tw + pad * 2, rh = 18
    oc.beginPath()
    oc.moveTo(rx + 3, ry); oc.lineTo(rx + rw - 3, ry)
    oc.quadraticCurveTo(rx + rw, ry, rx + rw, ry + 3)
    oc.lineTo(rx + rw, ry + rh - 3)
    oc.quadraticCurveTo(rx + rw, ry + rh, rx + rw - 3, ry + rh)
    oc.lineTo(rx + 3, ry + rh); oc.quadraticCurveTo(rx, ry + rh, rx, ry + rh - 3)
    oc.lineTo(rx, ry + 3); oc.quadraticCurveTo(rx, ry, rx + 3, ry)
    oc.closePath(); oc.fill()
    oc.fillStyle = '#ffffff'
    oc.textAlign = 'center'
    oc.textBaseline = 'middle'
    oc.fillText(label, mx, my)

    oc.restore()
  }

  // ── Animation loop ─────────────────────────────────────────────────────────
  let animId = 0
  let t = 0

  ;(function loop() {
    animId = requestAnimationFrame(loop)
    t += 0.01
    grp.position.y = Math.sin(t * 0.7) * 0.09
    renderer.render(scene, camera)
    grp.updateMatrixWorld()
    oc.clearRect(0, 0, overlay.width, overlay.height)
    const gy = grp.position.y
    // Length — front bottom edge
    drawDim(
      toScreen(new THREE.Vector3(-L / 2, -H / 2 + gy, W / 2)),
      toScreen(new THREE.Vector3(L / 2, -H / 2 + gy, W / 2)),
      '6.1m  |  20ft', 0, 30
    )
    // Height — front right edge
    drawDim(
      toScreen(new THREE.Vector3(L / 2, -H / 2 + gy, W / 2)),
      toScreen(new THREE.Vector3(L / 2, H / 2 + gy, W / 2)),
      '2.59m', 36, 0
    )
    // Width — right bottom edge (depth)
    drawDim(
      toScreen(new THREE.Vector3(L / 2, -H / 2 + gy, -W / 2)),
      toScreen(new THREE.Vector3(L / 2, -H / 2 + gy, W / 2)),
      '2.44m', 0, 30
    )
  })()

  // ── Resize ─────────────────────────────────────────────────────────────────
  const ro = new ResizeObserver(() => {
    w = canvas.clientWidth; h = canvas.clientHeight
    if (!w || !h) return
    aspect = w / h
    camera.left = -zoom * aspect; camera.right = zoom * aspect
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    overlay.width = w; overlay.height = h
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
