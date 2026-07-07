# Phase 2 — Admin UX & SEO Analytics

**Date:** 2026-07-07  
**Status:** Complete (pending production migration + GSC credentials)

## Goals

1. Polish admin UX (nav, unified API client, blog preview)
2. Move SEO analytics scaffold to website backend (GSC)
3. Dual-auth middleware for split backends
4. Keep CRM on assistant; marketing on site

## Completed

### Admin UX
- Hide chat widget on `/admin/*`
- Sidebar grouped: Operations | Marketing | Account
- `useAdminApi` — unified `adminFetch` / `siteFetch`
- `useAdminOperations` — CRM logic extracted from dashboard
- Blog: slug editor, SEO char counts, markdown preview modal
- Breadcrumb JSON-LD on blog posts (`useSEO.setBreadcrumbJsonLd`)

### SEO analytics (GSC)
- Migration `server/db/migrations/002_analytics.sql`
- `server/services/growthAnalytics.ts` — sync + read
- `server/api/admin/analytics/growth.get.ts`, `sync.post.ts`
- `components/admin/AdminGrowthPanel.vue` on `/admin/website`

### Auth
- Dual login unchanged (both cookies on sign-in)
- `middleware/admin-auth.ts` — route meta `adminAuth`:
  - `assistant` — Sales Dashboard, Settings (default)
  - `site` — Blog
  - `both` — Analytics & SEO

### Tooling
- `npm run db:migrate -- 002_analytics.sql` — apply SQL migrations

## Deploy checklist

### Website (Vercel / Railway)

| Variable | Required |
|----------|----------|
| `DATABASE_URL` | Yes |
| `SITE_JWT_SECRET` | Yes (`openssl rand -hex 32`) |
| `NUXT_PUBLIC_API_BASE` | Yes |
| `NUXT_PUBLIC_CLIENT_ID` | Yes |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | Optional (GSC sync) |
| `GSC_SITE_URL` | Optional (e.g. `sc-domain:roseberrycontainers.com`) |

### Database

```bash
npm run db:migrate -- 002_analytics.sql
```

### GSC setup (optional)

1. Create Google Cloud service account with Search Console API enabled
2. Add service account email as user in Search Console (restricted)
3. Set `GOOGLE_SERVICE_ACCOUNT_JSON` (full JSON, one line) and `GSC_SITE_URL`
4. Open `/admin/website` → Sync GSC

## Deferred (Phase 3+)

- Split CRM dashboard template into tab components
- Blog image upload (URL-only today)
- GA4 integration
- CRM migration to Nitro
- Single auth gateway

## Verification

```bash
npm run build
npm run db:migrate -- 002_analytics.sql   # once per environment
```
