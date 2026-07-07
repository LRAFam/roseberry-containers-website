# Roseberry Website Backend Split — Design Spec

**Date:** 2026-07-07  
**Status:** Approved  
**Repos:** `roseberry-storage-website`, `roseberry-assistant`

---

## Goal

Separate the Roseberry **website platform** (blogs, SEO, CMS, marketing analytics, CRM admin UI) from the **AI assistant** (`roseberry-assistant`), which should only handle conversational AI, automation, and operational AI workflows.

---

## Decision Summary

| Decision | Choice |
|----------|--------|
| Website backend location | **Nuxt Nitro server routes** inside `roseberry-storage-website` |
| Database (Phase 1) | **Same Railway Postgres** as assistant — reuse `blog_posts` table, zero data migration |
| Database (Phase 3+) | New dedicated Postgres when CRM moves off assistant |
| SEO ownership | **Website backend** — not AI assistant |
| CRM / leads (interim) | Stays on assistant API until Phase 3 |
| Auth (interim) | Dual session: Nitro `site_token` for blog/site admin; assistant `dashboard_token` for CRM |

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│              roseberry-storage-website (Nuxt)               │
│                                                             │
│  Public pages          Admin UI (/admin/*)                  │
│  /blog, /depots, …     Sales CRM │ Blog │ Website │ Settings│
│         │                    │         │                    │
│         ▼                    ▼         ▼                    │
│  Nitro /api/blog/*     assistant API   Nitro /api/admin/*   │
│  (same origin)         (external)      (blog, website-stats)│
└────────────┬───────────────────────────────┬────────────────┘
             │                               │
             ▼                               ▼
    ┌────────────────┐              ┌─────────────────────────┐
    │  PostgreSQL    │              │  roseberry-assistant    │
    │  blog_posts    │              │  AI chat, social, Vapi  │
    │  (Phase 1)     │              │  leads CRM, follow-ups  │
    └────────────────┘              │  briefing, depot tools  │
                                    └─────────────────────────┘
```

### Boundary rules

**AI assistant (`roseberry-assistant`) — KEEP**
- `POST /api/chat`, Meta webhooks, Vapi voice calls
- Message processing, follow-ups, owner alerts, daily briefing
- Social OAuth and platform handlers
- `client_configs` (AI prompt, model, alert numbers)
- CRM data model and admin API: leads, customers, depot, haulage, invoices, calls
- Slim `dashboard/` app (briefing + leads overview)

**Website backend (Nitro in `roseberry-storage-website`) — OWN**
- Blog public API + admin CMS
- Per-post SEO fields (`seo_title`, `seo_description`)
- Website stats (blog counts; GSC/GA4 in Phase 2)
- Sitemap generation (already Nitro — point at local blog API)
- Future: page-meta CMS, contact form intake, media library
- Future: CRM read/write when Phase 3 completes

**SEO specifically**
- Per-post SEO → with blog CMS on website backend
- Sitemap, redirects, canonicals → Nuxt server routes (already in website repo)
- Page-level SEO for depot/sales pages → code modules initially (`utils/*-seo.ts`), optional CMS later
- GSC / GA4 / Plausible dashboards → website admin Phase 2 (UpForge `AdminSectionGrowthAcquisition` pattern)
- AI may *suggest* SEO copy in future; website backend *stores and publishes* it

---

## Authentication (Phased)

### Phase 1 — Dual login (minimal change)

`/admin/login` calls both backends on submit:

1. `POST {assistant}/admin/auth` → `dashboard_token` cookie (CRM)
2. `POST /api/admin/auth` → `site_token` cookie (blog/site)

Nitro auth verifies `api_key` + password against the `clients` row for `NUXT_PUBLIC_CLIENT_ID` (same credentials, same Postgres).

Middleware:
- `admin-auth.ts` — continues pinging assistant `GET /admin/leads` (CRM pages)
- New Nitro middleware on `/api/admin/blog*` — validates `site_token`

### Phase 3 — Unified site auth

Replace dual cookies with single website-backend session. Assistant receives lead events via webhook; no admin cookies on assistant.

---

## Phase Plan

### Phase 1 — Blog split (this implementation plan)
- Add Nitro server layer with `pg`, blog repository, admin auth
- Point public blog pages, admin blog, sitemap at same-origin `/api/blog`
- Remove blog routes from `roseberry-assistant`
- Export existing posts: no migration needed (same `blog_posts` table)

### Phase 2 — Admin upgrade
- Restructure admin nav: **Operations** (CRM) vs **Marketing** (blog, website, SEO)
- Split `pages/admin/index.vue` into tab components
- Embed GSC/GA4 analytics on `/admin/website` (UpForge services pattern)
- Blog UX: slug editor, markdown preview, image upload
- Hide chat widget on `/admin/*`
- Unify `useAdminApi` — `assistant` vs `site` base URL

### Phase 3 — CRM migration
- Move leads/customers admin API to Nitro
- Assistant writes leads via `POST /api/internal/leads` webhook
- New dedicated Postgres for website platform
- Remove CRM admin routes from assistant

### Phase 4 — Assistant cleanup
- Delete dead blog code, trim `admin.ts`, update `PRODUCTION_SETUP.md`
- Document integration boundary

---

## Environment Variables

### `roseberry-storage-website` (new / changed)

| Variable | Scope | Purpose |
|----------|-------|---------|
| `DATABASE_URL` | Server only | Postgres connection (same Railway DB in Phase 1) |
| `SITE_JWT_SECRET` | Server only | Signs `site_token` session cookie |
| `NUXT_PUBLIC_CLIENT_ID` | Public | Scopes blog posts to tenant row |
| `NUXT_PUBLIC_API_BASE` | Public | Assistant API URL (CRM only after Phase 1) |

### `roseberry-assistant` (unchanged for Phase 1)

CRM, chat, social env vars remain. Blog routes removed after Phase 1 deploy.

---

## Data Model (Phase 1 — no change)

Reuse existing `blog_posts` table from migration `008_blog_posts.sql`:

```sql
blog_posts (
  id, client_id, title, slug, excerpt, content, category,
  status, seo_title, seo_description, featured_image, tags,
  view_count, published_at, created_at, updated_at
)
```

---

## API Contract (Nitro — mirrors current assistant shapes)

### Public
- `GET /api/blog?clientId&category&page&per_page`
- `GET /api/blog/:slug?clientId`

### Admin (requires `site_token` cookie)
- `POST /api/admin/auth` — `{ api_key, password }`
- `POST /api/admin/logout`
- `GET /api/admin/blog?status&search&page&per_page`
- `POST /api/admin/blog`
- `PUT /api/admin/blog/:id`
- `POST /api/admin/blog/:id/publish`
- `DELETE /api/admin/blog/:id`
- `GET /api/admin/website-stats` — blog counts only in Phase 1

Response shapes must match what `pages/admin/blog.vue` and `pages/blog/*` already expect.

---

## Rollback

If Phase 1 fails in production:
1. Revert website deploy (blog pages call assistant API again)
2. Re-enable blog routes on assistant (git revert)
3. No data loss — same `blog_posts` table throughout

---

## Success Criteria

- [ ] Public `/blog` loads posts from Nitro `/api/blog`
- [ ] Admin blog CRUD works via Nitro without calling assistant
- [ ] Sitemap includes blog slugs from Nitro
- [ ] Assistant has zero blog routes deployed
- [ ] CRM admin (`/admin` sales tabs) still works via assistant API
- [ ] Login works with existing api_key + password

---

## References

- UpForge blog CMS: `upforge-api/app/Http/Controllers/API/AdminBlogController.php`
- UpForge GSC analytics: `upforge-api/app/Services/AdminGrowthAnalyticsService.php`
- Current assistant blog: `roseberry-assistant/src/routes/blog.ts`, `src/db/repositories/blogRepository.ts`
- Current website admin: `roseberry-storage-website/pages/admin/`
