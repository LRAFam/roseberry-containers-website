# Roseberry Platform Integration Boundary

## Overview

| System | Repo | Responsibility |
|--------|------|----------------|
| **Website** | `roseberry-storage-website` | Public site, blog CMS, CRM admin, SEO analytics |
| **Assistant** | `roseberry-assistant` | AI chat, social webhooks, voice calls, automation jobs |
| **Slim dashboard** | `roseberry-assistant/dashboard` | Daily briefing email UI only |

Both services share **one Postgres database** in production today. CRM admin APIs are served only by the website Nitro layer.

---

## Website → Assistant (public)

| Endpoint | Used for |
|----------|----------|
| `POST {API_BASE}/api/chat` | James chat widget |

Env: `NUXT_PUBLIC_API_BASE`, `NUXT_PUBLIC_CLIENT_ID`

---

## Website contact form (same origin)

| Endpoint | Used for |
|----------|----------|
| `POST /api/contact` | Contact form submissions (lead + Resend email) |

Env (Vercel): `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `NOTIFICATION_EMAIL`, `NUXT_PUBLIC_CLIENT_ID`, `DATABASE_URL`

---

## Website admin (same origin)

All `/admin/*` pages authenticate via `site_token` and call `/api/admin/*`:

- CRM: leads, customers, depot, haulage, follow-ups, invoices, calls
- Marketing: blog, website-stats, GSC analytics
- Account: password change

Env: `DATABASE_URL`, `SITE_JWT_SECRET`

---

## Assistant → Website (internal, optional)

| Endpoint | Purpose |
|----------|---------|
| `POST /api/internal/leads` | Future: assistant creates leads on website DB |

Auth: `X-API-Key: INTERNAL_API_KEY` (website) — same value as assistant `API_KEY` if unset.

**Current behaviour:** assistant still inserts leads directly into Postgres via `leadRepository`.

---

## Assistant operational APIs (client API key)

Used by AI tools during conversations — not by the website admin UI:

- `/depot/stock`, `/haulage/quotes`, `/invoices`, `/calls/*`

Auth: client `api_key` header (`requireClientKey`)

---

## Invoice PDFs

Generated and served by the assistant at `{API_BASE}/invoices/{pdf_path}`. Website admin links to these URLs.

---

## Slim dashboard (briefing only)

- Auth: `dashboard_token` via `{API_BASE}/admin/auth`
- Data: `{API_BASE}/admin/briefing`, `/admin/briefing/send`
- CRM link: `{NUXT_PUBLIC_SITE_URL}/admin`

---

## What was removed from assistant

CRM admin routes (`/admin/leads`, `/admin/stats`, `/admin/customers`, etc.) — migrated to website Nitro in Phase 3.

Blog routes — removed in Phase 1.
