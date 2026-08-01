# Birmingham town service pages (SEO)

**Date:** 2026-08-01  
**Status:** Approved in principle (awaiting final user review of this spec)  
**Goal:** Capture Midlands local search demand with honest “served from Birmingham depot” pages and strong internal linking.

## Problem

The Birmingham depot page ranks weakly for high-demand Midlands queries (especially Coventry, Leicester, Derby). Listing towns only in copy/schema is not enough. Separate thin “region” pages (e.g. West Midlands) risk looking spammy. Fake depots would misrepresent the business.

## Decision

Build **lean town service pages nested under Birmingham**:

- URL pattern: `/depots/birmingham/{town}`
- Framing: stock and delivery from the **Birmingham depot** (not a separate depot)
- Internal links: Birmingham hub ↔ each town; towns ↔ sibling towns
- Depth: lean v1; deepen later only for towns that gain traction

## Scope (v1)

### Included towns (8)

| Town | Slug |
|------|------|
| Coventry | `coventry` |
| Wolverhampton | `wolverhampton` |
| Oldbury | `oldbury` |
| Tamworth | `tamworth` |
| Solihull | `solihull` |
| Leicester | `leicester` |
| Derby | `derby` |
| Nottingham | `nottingham` |

### Excluded (v1)

- Region / county pages: West Midlands, Black Country, Warwickshire
- Fake depot claims, separate phone numbers, or invented addresses
- Full Newcastle-style long-form pages for every town
- Town pages for other depots (can reuse the pattern later)

## URL and information architecture

```
/depots/birmingham                 ← parent depot (hub)
/depots/birmingham/coventry        ← town service page
/depots/birmingham/wolverhampton
...
```

Breadcrumbs:

`Home → Container Sales → Nationwide Depots → Birmingham → {Town}`

## Page content (lean template)

Each town page must include:

1. **H1:** Shipping Containers for Sale in {Town}
2. **Unique intro** (town-specific; not find-replace spam)
3. Explicit line: supplied and delivered from the **Birmingham depot**
4. Short delivery / coverage note for that town
5. **3–4 FAQs** (localised) + visible FAQ UI
6. CTAs: call `07793 251550`, enquire, link to `/depots/birmingham`
7. Links to sibling towns + parent Birmingham page
8. SEO head: title, meta description, keywords, canonical, OG/Twitter
9. JSON-LD:
   - BreadcrumbList
   - FAQPage
   - Service or LocalBusiness-style entity with `areaServed` = town and clear relationship to Birmingham / Roseberry Containers

Optional later (per ranking town): longer copy, local image, more FAQs.

## Birmingham depot hub updates

On `/depots/birmingham`:

- Add an **Areas we cover** section listing all 8 towns with links to their pages
- Keep existing Birmingham copy and `areasServed` schema
- Town pages are the primary place for town-specific intent; hub summarises and links

## Data model

Centralise town definitions (e.g. in `utils/` next to depots) so sitemap, prerender, Birmingham hub links, and the dynamic page stay in sync.

Each town record should include at least:

- `slug`, `name`
- `parentDepotSlug` (`birmingham`)
- Short unique `heroText` / `areaDescription` / `deliveryInfo`
- Optional `extraFaqs`
- Optional `nearbyTowns` (siblings)

## Technical notes

- Dynamic route under depots, e.g. `pages/depots/birmingham/[town].vue` **or** a shared `pages/depots/[depot]/[town].vue` if we want the pattern reusable (prefer reusable if cheap).
- 404 for unknown town slugs
- Add all town URLs to sitemap
- Prerender all town URLs at build
- Canonical host remains `https://www.roseberrycontainers.com`
- Copy rules: no emoji; avoid em dash filler; honest wording

## Success criteria

- All 8 URLs live, indexed in sitemap, prerendered
- Each page unique enough to avoid duplicate-content flags
- Birmingham hub links to all 8; each town links back to Birmingham
- Client-facing story remains: one Birmingham depot, wider Midlands delivery

## Out of scope / follow-ups

- Google Business Profile / citations / external backlinks
- Deepening Coventry (or others) after GSC traction
- Rolling the same pattern out under Newcastle / Teesside

## Open risks

- Thin content if intros are too similar → mitigate with genuine town-specific delivery/context lines
- Users mistaking town pages for depots → mitigate with repeated “from our Birmingham depot” wording and CTAs to the parent page
