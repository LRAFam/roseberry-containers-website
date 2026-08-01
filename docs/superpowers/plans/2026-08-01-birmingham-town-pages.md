# Birmingham Town Service Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship eight lean Midlands town service pages nested under `/depots/birmingham/{town}` with unique copy, FAQ/schema, sitemap/prerender, and bidirectional internal links from the Birmingham depot hub.

**Architecture:** Add a `utils/depot-towns.ts` data module for Birmingham towns; a dynamic Nuxt page `pages/depots/[depot]/[town].vue`; SEO helpers in `utils/container-sales-seo.ts`; wire towns into sitemap + nitro prerender; add an “Areas we cover” section on the Birmingham depot page via shared data (not hardcoding).

**Tech Stack:** Nuxt 4, Vue 3, TypeScript, existing depot SEO helpers (`useHead`, JSON-LD), Tailwind classes already used on depot pages.

## Global Constraints

- Canonical host: `https://www.roseberrycontainers.com`
- Framing: stock and delivery from Birmingham depot only (not a separate depot)
- Towns: coventry, wolverhampton, oldbury, tamworth, solihull, leicester, derby, nottingham
- No region pages (West Midlands, Black Country, Warwickshire)
- Copy: no emojis; avoid em dash filler; unique intros per town
- Spec: `docs/superpowers/specs/2026-08-01-birmingham-town-pages-design.md`

## File map

| File | Responsibility |
|------|----------------|
| `utils/depot-towns.ts` | Town types, Birmingham town records, getters, path helpers |
| `utils/container-sales-seo.ts` | Town breadcrumb / service / FAQ schema helpers |
| `pages/depots/[depot]/[town].vue` | Lean town page UI + SEO head |
| `pages/depots/[depot].vue` | Areas we cover hub section (when towns exist) |
| `utils/sitemap.ts` | Include town URLs |
| `nuxt.config.ts` | Prerender town routes |

---

### Task 1: Town data module

**Files:**
- Create: `utils/depot-towns.ts`

**Interfaces:**
- Produces: `DepotTown`, `birminghamTowns`, `getTownBySlugs(depotSlug, townSlug)`, `townsForDepot(depotSlug)`, `townPagePath(depotSlug, townSlug)`, `townPageUrl(depotSlug, townSlug)`

- [ ] **Step 1: Create `utils/depot-towns.ts` with all eight unique town records**

Include for each town: `slug`, `name`, `parentDepotSlug: 'birmingham'`, `heroText`, `areaDescription`, `deliveryInfo`, `extraFaqs` (2 local questions). Content must be unique per town and state Birmingham depot clearly.

- [ ] **Step 2: Export helpers**

```ts
export function townsForDepot(depotSlug: string): DepotTown[]
export function getTownBySlugs(depotSlug: string, townSlug: string): DepotTown | undefined
export function townPagePath(depotSlug: string, townSlug: string): string
export function townPageUrl(depotSlug: string, townSlug: string): string
```

- [ ] **Step 3: Commit**

```bash
git add utils/depot-towns.ts
git commit -m "Add Birmingham Midlands town service page data."
```

---

### Task 2: SEO helpers for town pages

**Files:**
- Modify: `utils/container-sales-seo.ts`

**Interfaces:**
- Consumes: `SITE_URL` from depots; `DepotTown` shape (slug, name, parentDepotSlug)
- Produces: `townBreadcrumbSchema`, `townServiceSchema`, `townFaqs`

- [ ] **Step 1: Add `townFaqs(town, parentDepotName)` returning 4 base FAQs**
- [ ] **Step 2: Add `townBreadcrumbSchema(town, parentDepotName)`** ending at `/depots/{parent}/{town}`
- [ ] **Step 3: Add `townServiceSchema(town, parentDepotName)`** with Service type, areaServed = town, provider = Roseberry / Birmingham depot URL
- [ ] **Step 4: Commit**

```bash
git add utils/container-sales-seo.ts
git commit -m "Add JSON-LD and FAQ helpers for depot town pages."
```

---

### Task 3: Town page route

**Files:**
- Create: `pages/depots/[depot]/[town].vue`

- [ ] **Step 1: Implement lean page** matching depot visual language (gradient hero if no image), breadcrumbs All Depots → Birmingham → Town, unique body, FAQs, CTAs, sibling town links, parent depot link
- [ ] **Step 2: 404 UI when town/depot combo invalid**
- [ ] **Step 3: `useHead` with title `Shipping Containers for Sale {Town} | Roseberry Containers`, canonical, OG, FAQ + breadcrumb + service JSON-LD
- [ ] **Step 4: Commit**

```bash
git add pages/depots/[depot]/[town].vue
git commit -m "Add lean nested depot town service pages."
```

---

### Task 4: Birmingham hub + sitemap + prerender

**Files:**
- Modify: `pages/depots/[depot].vue`
- Modify: `utils/sitemap.ts`
- Modify: `nuxt.config.ts`

- [ ] **Step 1: On depot page, if `townsForDepot(depot.slug).length`, render Areas we cover grid linking to town pages**
- [ ] **Step 2: Append town locs to `staticSitemapEntries` via `birminghamTowns` / all towns list**
- [ ] **Step 3: Add town paths to `nitro.prerender.routes`**
- [ ] **Step 4: `npm run build` and confirm `/depots/birmingham/coventry` prerenders**
- [ ] **Step 5: Commit**

```bash
git add pages/depots/[depot].vue utils/sitemap.ts nuxt.config.ts
git commit -m "Link Birmingham hub to town pages; sitemap and prerender."
```

---

### Task 5: Verify and push

- [ ] **Step 1: Spot-check unique titles/copy for Coventry vs Leicester**
- [ ] **Step 2: Push to `origin/main`**
