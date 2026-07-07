# Phase 3 & 4 — CRM Migration + Assistant Cleanup

**Date:** 2026-07-07  
**Status:** Complete (same Postgres; dedicated DB deferred)

## Phase 3 — CRM on website backend

### Moved to Nitro (`/api/admin/*`)
- Dashboard stats, leads, customers, depot, haulage, follow-ups, invoices, calls
- Password change (`POST /api/admin/password`)
- Unified `website-stats` (leads + blog)

### Auth
- Website admin uses **single** `site_token` session
- Login: `POST /api/admin/auth` only (no assistant cookie)
- Middleware pings `/api/admin/stats`

### Internal webhook (future DB split)
- `POST /api/internal/leads` — `X-API-Key: INTERNAL_API_KEY` (or `API_KEY`)
- Assistant still writes leads directly to Postgres today (same DB)

### Assistant keeps
- AI chat, Meta webhooks, Vapi, contact form, follow-up jobs
- Slim dashboard: briefing only (`/admin/briefing`)
- Operational APIs: `/depot`, `/haulage`, `/invoices` (client-key auth)

## Phase 4 — Assistant cleanup

- Removed CRM routes from `roseberry-assistant/src/routes/admin.ts`
- Slim dashboard links to website CRM (`NUXT_PUBLIC_WEBSITE_URL/admin`)
- Integration boundary documented in `docs/INTEGRATION.md`

## Deploy

### Website
| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | Postgres (shared with assistant for now) |
| `SITE_JWT_SECRET` | Admin session |
| `INTERNAL_API_KEY` | Optional webhook auth |

### Assistant
| Variable | Purpose |
|----------|---------|
| `DASHBOARD_JWT_SECRET` | Slim briefing dashboard only |
| `DATABASE_URL` | Same Postgres |

### Slim dashboard
| Variable | Purpose |
|----------|---------|
| `NUXT_PUBLIC_WEBSITE_URL` | Link to full CRM admin |

## Deferred
- Separate Postgres for website platform
- Assistant lead creation via webhook only
- GA4, blog image upload, CRM tab component split
