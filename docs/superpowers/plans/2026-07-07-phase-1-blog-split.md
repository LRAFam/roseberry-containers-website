# Phase 1: Blog Split to Nitro — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan step-by-step. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move blog public + admin APIs from `roseberry-assistant` into Nuxt Nitro server routes in `roseberry-storage-website`, reusing the existing `blog_posts` table on Railway Postgres.

**Architecture:** Nitro `server/` layer with `pg` pool, blog repository ported from assistant, dual auth cookies (`site_token` for blog, `dashboard_token` for CRM). Public and admin blog pages call same-origin `/api/*`. Assistant blog routes deleted after deploy.

**Tech Stack:** Nuxt 3 Nitro, `pg`, `bcrypt`, `jsonwebtoken`, existing Vue admin pages

**Spec:** `docs/superpowers/specs/2026-07-07-website-backend-split-design.md`

---

## File Map

| File | Responsibility |
|------|----------------|
| `server/db/pool.ts` | Postgres connection pool from `DATABASE_URL` |
| `server/db/repositories/blog.ts` | Blog CRUD (ported from assistant) |
| `server/utils/password.ts` | bcrypt verify (ported from assistant) |
| `server/utils/auth.ts` | JWT cookie helpers, `requireSiteAdmin` |
| `server/api/blog/index.get.ts` | Public blog list |
| `server/api/blog/[slug].get.ts` | Public single post + view count |
| `server/api/admin/auth.post.ts` | Login against `clients` table |
| `server/api/admin/logout.post.ts` | Clear `site_token` |
| `server/api/admin/blog/index.get.ts` | Admin list + stats |
| `server/api/admin/blog/index.post.ts` | Create post |
| `server/api/admin/blog/[id].put.ts` | Update post |
| `server/api/admin/blog/[id]/publish.post.ts` | Publish draft |
| `server/api/admin/blog/[id].delete.ts` | Delete post |
| `server/api/admin/website-stats.get.ts` | Blog-only stats for `/admin/website` |
| `server/middleware/admin-blog.ts` | Protect `/api/admin/blog*` routes |
| `composables/useSiteApi.ts` | Same-origin authenticated fetch |
| `composables/useAdminApi.ts` | Add `siteAdminFetch` or `base: 'site' \| 'assistant'` |
| `pages/admin/login.vue` | Dual auth POST |
| `pages/admin/blog.vue` | Switch to `siteAdminFetch` |
| `pages/admin/website.vue` | Switch website-stats to site API |
| `pages/blog/index.vue`, `[slug].vue` | Same-origin `/api/blog` |
| `utils/sitemap.ts` | Same-origin blog fetch |
| `nuxt.config.ts` | `runtimeConfig` server secrets |
| `.env.example` | Document `DATABASE_URL`, `SITE_JWT_SECRET` |
| `roseberry-assistant/src/index.ts` | Remove blog route mount |
| `roseberry-assistant/src/routes/admin.ts` | Remove blog + website-stats routes |

---

### Task 1: Add server dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install packages**

```bash
cd /Users/adamdowning/Documents/GitHub/roseberry-storage-website
npm install pg bcrypt jsonwebtoken
npm install -D @types/pg @types/bcrypt @types/jsonwebtoken
```

- [ ] **Step 2: Verify install**

Run: `npm ls pg bcrypt jsonwebtoken`  
Expected: all three listed without errors

---

### Task 2: Database pool

**Files:**
- Create: `server/db/pool.ts`

- [ ] **Step 1: Create pool module**

```typescript
import pg from 'pg'

const { Pool } = pg

let pool: pg.Pool | null = null

export function getPool(): pg.Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL
    if (!connectionString) {
      throw new Error('DATABASE_URL is not set')
    }
    pool = new Pool({
      connectionString,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
    })
  }
  return pool
}

export async function query<T>(text: string, params?: unknown[]): Promise<T[]> {
  const { rows } = await getPool().query(text, params)
  return rows as T[]
}

export async function queryOne<T>(text: string, params?: unknown[]): Promise<T | null> {
  const rows = await query<T>(text, params)
  return rows[0] ?? null
}
```

- [ ] **Step 2: Add env vars to `.env.example`**

```bash
# Server-only — Railway Postgres (same DB as assistant in Phase 1)
DATABASE_URL=postgresql://user:password@host:port/railway

# Server-only — session cookie signing for site admin
SITE_JWT_SECRET=generate-with-openssl-rand-hex-32
```

- [ ] **Step 3: Update `nuxt.config.ts` runtimeConfig**

```typescript
runtimeConfig: {
  databaseUrl: process.env.DATABASE_URL ?? '',
  siteJwtSecret: process.env.SITE_JWT_SECRET ?? '',
  public: {
    // existing public keys unchanged
  },
},
```

---

### Task 3: Port blog repository

**Files:**
- Create: `server/db/repositories/blog.ts`
- Reference: `roseberry-assistant/src/db/repositories/blogRepository.ts`

- [ ] **Step 1: Copy and adapt blog repository**

Port all exports from assistant `blogRepository.ts`:
- `listBlogPosts`
- `listPublishedBlogPosts`
- `getBlogPostBySlug`
- `getBlogPostById`
- `createBlogPost`
- `updateBlogPost`
- `publishBlogPost`
- `deleteBlogPost`
- `incrementBlogViewCount`
- `getBlogStats`

Change imports from `../pool` to `~/server/db/pool` pattern (`import { query, queryOne } from '../../db/pool'`).

Export `BlogPost` interface unchanged.

- [ ] **Step 2: Smoke test locally**

Run dev server with `DATABASE_URL` set to Railway Postgres.  
In another terminal:

```bash
curl "http://localhost:3000/api/blog?clientId=YOUR_CLIENT_UUID&per_page=1"
```

Expected: JSON with `{ posts: [...], pagination: {...} }` or `{ posts: [], pagination: {...} }`

---

### Task 4: Public blog API routes

**Files:**
- Create: `server/api/blog/index.get.ts`
- Create: `server/api/blog/[slug].get.ts`

- [ ] **Step 1: Create list route**

```typescript
import { listPublishedBlogPosts } from '../../db/repositories/blog'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const clientId = String(query.clientId ?? '')
  if (!clientId) {
    throw createError({ statusCode: 400, message: 'clientId query parameter is required' })
  }

  const page = query.page ? Number(query.page) : 1
  const perPage = query.per_page ? Number(query.per_page) : 12
  const category = query.category ? String(query.category) : undefined

  const result = await listPublishedBlogPosts(clientId, { category, page, perPage })
  return {
    posts: result.posts,
    pagination: {
      total: result.total,
      page,
      per_page: perPage,
      last_page: Math.max(1, Math.ceil(result.total / perPage)),
    },
  }
})
```

- [ ] **Step 2: Create slug route**

```typescript
import { getBlogPostBySlug, incrementBlogViewCount } from '../../db/repositories/blog'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const clientId = String(getQuery(event).clientId ?? '')
  if (!clientId) {
    throw createError({ statusCode: 400, message: 'clientId query parameter is required' })
  }
  if (!slug) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  const post = await getBlogPostBySlug(clientId, slug, true)
  if (!post) {
    throw createError({ statusCode: 404, message: 'Post not found' })
  }

  await incrementBlogViewCount(clientId, slug).catch(() => undefined)
  return post
})
```

- [ ] **Step 3: Verify both routes with curl** (see Task 3 step 2)

---

### Task 5: Site admin auth

**Files:**
- Create: `server/utils/password.ts`
- Create: `server/utils/auth.ts`
- Create: `server/api/admin/auth.post.ts`
- Create: `server/api/admin/logout.post.ts`

- [ ] **Step 1: Port password utils**

Copy `verifyPassword` from `roseberry-assistant/src/utils/password.ts` (bcrypt only — no legacy scrypt needed if hashes are bcrypt).

- [ ] **Step 2: Create auth utils**

```typescript
import jwt from 'jsonwebtoken'
import type { H3Event } from 'h3'

const COOKIE_NAME = 'site_token'
const MAX_AGE = 8 * 60 * 60 // 8 hours

export function setSiteToken(event: H3Event, clientId: string) {
  const config = useRuntimeConfig()
  const secret = config.siteJwtSecret
  if (!secret) throw new Error('SITE_JWT_SECRET is not set')

  const token = jwt.sign({ role: 'site_admin', client_id: clientId }, secret, { expiresIn: '8h' })
  setCookie(event, COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: MAX_AGE,
    path: '/',
  })
}

export function clearSiteToken(event: H3Event) {
  deleteCookie(event, COOKIE_NAME, { path: '/' })
}

export function requireSiteAdmin(event: H3Event): { clientId: string } {
  const config = useRuntimeConfig()
  const token = getCookie(event, COOKIE_NAME)
  if (!token) throw createError({ statusCode: 401, message: 'Unauthorized' })

  try {
    const payload = jwt.verify(token, config.siteJwtSecret) as { client_id: string }
    return { clientId: payload.client_id }
  } catch {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
}
```

- [ ] **Step 3: Create auth POST handler**

Verify `api_key` + `password` against `clients` table:

```typescript
import { queryOne } from '../../db/pool'
import { verifyPassword } from '../../utils/password'
import { setSiteToken } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const apiKey = String(body?.api_key ?? '').trim()
  const password = String(body?.password ?? '').trim()

  if (!apiKey || !password) {
    throw createError({ statusCode: 401, message: 'API key and password are required.' })
  }

  const client = await queryOne<{
    id: string
    api_key: string
    dashboard_password_hash: string | null
  }>(
    'SELECT id, api_key, dashboard_password_hash FROM clients WHERE api_key = $1 AND active = TRUE',
    [apiKey],
  )

  if (!client?.dashboard_password_hash || !verifyPassword(password, client.dashboard_password_hash)) {
    throw createError({ statusCode: 401, message: 'Incorrect password.' })
  }

  setSiteToken(event, client.id)
  return { success: true }
})
```

- [ ] **Step 4: Create logout handler**

```typescript
import { clearSiteToken } from '../../utils/auth'

export default defineEventHandler((event) => {
  clearSiteToken(event)
  return { success: true }
})
```

---

### Task 6: Admin blog API routes

**Files:**
- Create: `server/api/admin/blog/index.get.ts`
- Create: `server/api/admin/blog/index.post.ts`
- Create: `server/api/admin/blog/[id].put.ts`
- Create: `server/api/admin/blog/[id]/publish.post.ts`
- Create: `server/api/admin/blog/[id].delete.ts`
- Create: `server/api/admin/website-stats.get.ts`

- [ ] **Step 1: Admin list route**

Mirror assistant `GET /admin/blog` response shape (`posts`, `pagination`, `stats`):

```typescript
import { listBlogPosts, getBlogStats } from '../../../db/repositories/blog'
import { requireSiteAdmin } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  const q = getQuery(event)
  const page = q.page ? Number(q.page) : 1
  const perPage = q.per_page ? Number(q.per_page) : 20

  const [result, stats] = await Promise.all([
    listBlogPosts(clientId, {
      status: q.status ? String(q.status) : undefined,
      search: q.search ? String(q.search) : undefined,
      page,
      perPage,
    }),
    getBlogStats(clientId),
  ])

  return {
    posts: result.posts,
    pagination: {
      total: result.total,
      current_page: result.page,
      per_page: perPage,
      last_page: result.lastPage,
    },
    stats,
  }
})
```

- [ ] **Step 2: Create, update, publish, delete routes**

Port logic from `roseberry-assistant/src/routes/admin.ts` lines 574–620. Each handler calls `requireSiteAdmin(event)` and passes `clientId` to repository functions.

- [ ] **Step 3: Website stats route (blog-only Phase 1)**

```typescript
import { getBlogStats } from '../../../db/repositories/blog'
import { requireSiteAdmin } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  const blog = await getBlogStats(clientId)
  return { blog }
})
```

- [ ] **Step 4: Test admin routes with cookie**

```bash
# Login
curl -c cookies.txt -X POST http://localhost:3000/api/admin/auth \
  -H "Content-Type: application/json" \
  -d '{"api_key":"CLIENT_KEY","password":"YOUR_PASSWORD"}'

# List
curl -b cookies.txt http://localhost:3000/api/admin/blog
```

Expected: `{ posts: [...], pagination: {...}, stats: {...} }`

---

### Task 7: Frontend — site API composable

**Files:**
- Create: `composables/useSiteApi.ts`
- Modify: `composables/useAdminApi.ts`

- [ ] **Step 1: Create useSiteApi**

```typescript
export function useSiteApi() {
  async function siteFetch(path: string, init: RequestInit = {}): Promise<Response> {
    const headers: Record<string, string> = {
      ...(init.headers as Record<string, string> | undefined),
    }

    if (import.meta.server) {
      const requestHeaders = useRequestHeaders(['cookie'])
      if (requestHeaders.cookie) headers.cookie = requestHeaders.cookie
    }

    const res = await fetch(path, {
      ...init,
      credentials: 'include',
      headers,
    })

    if (res.status === 401) {
      await navigateTo('/admin/login')
      throw new Error('Unauthorized')
    }

    return res
  }

  return { siteFetch }
}
```

- [ ] **Step 2: Update blog.vue**

Replace `adminFetch` with `siteFetch` from `useSiteApi()` for all `/admin/blog*` calls. Paths become `/api/admin/blog...`.

- [ ] **Step 3: Update website.vue**

Replace `adminFetch('/admin/website-stats')` with `siteFetch('/api/admin/website-stats')`.

---

### Task 8: Frontend — public blog + sitemap

**Files:**
- Modify: `pages/blog/index.vue`
- Modify: `pages/blog/[slug].vue`
- Modify: `utils/sitemap.ts`

- [ ] **Step 1: Update blog index fetch**

Change from `${apiBase}/api/blog?...` to `/api/blog?clientId=...` (same origin).

- [ ] **Step 2: Update blog slug fetch**

Change from `${apiBase}/api/blog/${slug}?...` to `/api/blog/${slug}?clientId=...`.

- [ ] **Step 3: Update sitemap**

In `fetchBlogSitemapEntries`, change:

```typescript
const res = await fetch(`/api/blog?clientId=${clientId}&per_page=100`)
```

Remove `apiBase` dependency for blog.

- [ ] **Step 4: Verify**

Run `npm run dev`, visit `/blog` and `/sitemap.xml`. Confirm posts render.

---

### Task 9: Dual login

**Files:**
- Modify: `pages/admin/login.vue`
- Modify: `layouts/admin.vue`

- [ ] **Step 1: Update login to call both backends**

```typescript
async function login() {
  error.value = ''
  isLoading.value = true

  try {
    const [siteRes, assistantRes] = await Promise.all([
      fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ password: password.value, api_key: apiKey.value }),
      }),
      fetch(`${apiBase}/admin/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ password: password.value, api_key: apiKey.value }),
      }),
    ])

    if (!siteRes.ok || !assistantRes.ok) {
      const data = await (siteRes.ok ? assistantRes : siteRes).json()
      error.value = data.error || 'Login failed.'
      return
    }

    await router.push('/admin')
  } catch {
    error.value = 'Could not connect to server.'
  } finally {
    isLoading.value = false
  }
}
```

- [ ] **Step 2: Update logout in layouts/admin.vue**

Call both:

```typescript
await Promise.all([
  fetch('/api/admin/logout', { method: 'POST', credentials: 'include' }),
  fetch(`${apiBase}/admin/logout`, { method: 'POST', credentials: 'include' }),
])
```

---

### Task 10: Remove blog from assistant

**Files:**
- Modify: `roseberry-assistant/src/index.ts`
- Modify: `roseberry-assistant/src/routes/admin.ts`
- Delete: `roseberry-assistant/src/routes/blog.ts`
- Delete: `roseberry-assistant/src/db/repositories/blogRepository.ts`

- [ ] **Step 1: Remove blog route mount from index.ts**

Remove `import blogRoutes` and `app.use('/api/blog', blogRoutes)`.

- [ ] **Step 2: Remove blog imports and routes from admin.ts**

Delete lines importing `blogRepository` functions and all `/blog*` and `/website-stats` route handlers.

- [ ] **Step 3: Delete blog.ts and blogRepository.ts**

- [ ] **Step 4: Build assistant**

```bash
cd /Users/adamdowning/Documents/GitHub/roseberry-assistant
npm run build
```

Expected: compiles without errors

---

### Task 11: Deploy checklist

- [ ] **Step 1: Set Railway/Vercel env vars on website service**

```
DATABASE_URL=<same Railway Postgres URL>
SITE_JWT_SECRET=<openssl rand -hex 32>
NUXT_PUBLIC_CLIENT_ID=<roseberry client UUID>
NUXT_PUBLIC_API_BASE=<assistant API URL>
```

- [ ] **Step 2: Deploy website first** (blog works on Nitro, assistant blog still available during overlap)

- [ ] **Step 3: Deploy assistant** (blog routes removed)

- [ ] **Step 4: Production smoke test**

1. `/blog` loads posts
2. `/admin/login` → `/admin/blog` CRUD works
3. `/admin` CRM tabs still work
4. `/sitemap.xml` includes blog URLs

---

### Task 12: Update documentation

**Files:**
- Modify: `DEPLOYMENT.md`
- Modify: `.env.example`

- [ ] **Step 1: Document new server env vars and dual-backend architecture**

- [ ] **Step 2: Note assistant no longer serves blog APIs**

---

## Spec Coverage Check

| Spec requirement | Task |
|------------------|------|
| Nitro blog public API | Tasks 3–4 |
| Nitro blog admin API | Tasks 5–6 |
| Same Postgres Phase 1 | Task 2 |
| Dual auth | Task 9 |
| Public pages updated | Task 8 |
| Admin blog updated | Task 7 |
| Assistant blog removed | Task 10 |
| Rollback documented | Design spec |
| CRM unchanged | No tasks (stays on assistant) |

## Out of Scope (Phase 2+)

- GSC/GA4 embedded analytics
- Admin nav restructure
- CRM migration to Nitro
- `pages/admin/index.vue` component split
- Chat widget hidden on admin
