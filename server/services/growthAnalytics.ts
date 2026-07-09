import crypto from 'crypto'
import { query } from '../db/pool'
import { getGoogleAccessToken, getGscSiteUrl, isGoogleConfigured } from '../utils/googleAuth'

type GscRow = { keys?: string[]; clicks?: number; impressions?: number; ctr?: number; position?: number }

function hashDimension(value: string): string {
  return crypto.createHash('md5').update(value).digest('hex')
}

async function upsertRow(
  statDate: string,
  dimensionType: string,
  dimensionValue: string,
  row: GscRow,
): Promise<void> {
  const valueStr = dimensionValue.slice(0, 768)
  const valueHash = hashDimension(valueStr)
  await query(
    `INSERT INTO gsc_daily_stats
      (stat_date, dimension_type, dimension_value, dimension_hash, clicks, impressions, ctr, position, synced_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
     ON CONFLICT (stat_date, dimension_type, dimension_hash) DO UPDATE SET
      dimension_value = EXCLUDED.dimension_value,
      clicks = EXCLUDED.clicks,
      impressions = EXCLUDED.impressions,
      ctr = EXCLUDED.ctr,
      position = EXCLUDED.position,
      synced_at = NOW()`,
    [
      statDate,
      dimensionType,
      valueStr,
      valueHash,
      Math.round(row.clicks ?? 0),
      Math.round(row.impressions ?? 0),
      Number(((row.ctr ?? 0) * 100).toFixed(4)),
      Number((row.position ?? 0).toFixed(2)),
    ],
  )
}

async function fetchDimension(
  endpoint: string,
  token: string,
  start: string,
  end: string,
  dimension: string,
  anchorDate: string,
): Promise<number> {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      startDate: start,
      endDate: end,
      dimensions: [dimension],
      rowLimit: 250,
      dataState: 'final',
    }),
  })

  if (!res.ok) {
    throw new Error(`GSC API ${dimension}: ${await res.text()}`)
  }

  const data = await res.json() as { rows?: GscRow[] }
  let count = 0
  for (const row of data.rows ?? []) {
    const value = row.keys?.[0]
    if (!value) continue
    await upsertRow(anchorDate, dimension, String(value), row)
    count++
  }
  return count
}

async function fetchDateTrend(
  endpoint: string,
  token: string,
  start: string,
  end: string,
): Promise<number> {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      startDate: start,
      endDate: end,
      dimensions: ['date'],
      rowLimit: 400,
      dataState: 'final',
    }),
  })

  if (!res.ok) throw new Error(`GSC API date trend: ${await res.text()}`)

  const data = await res.json() as { rows?: GscRow[] }
  let count = 0
  for (const row of data.rows ?? []) {
    const date = row.keys?.[0]
    if (!date) continue
    await upsertRow(date, 'site', 'site-total', row)
    count++
  }
  return count
}

async function logSync(
  status: string,
  rows: number,
  message: string | null,
  periodStart?: string,
  periodEnd?: string,
) {
  await query(
    `INSERT INTO analytics_sync_logs (provider, status, rows_synced, message, period_start, period_end)
     VALUES ('gsc', $1, $2, $3, $4, $5)`,
    [status, rows, message, periodStart ?? null, periodEnd ?? null],
  )
}

export async function syncGsc(days = 28): Promise<{ status: string; rows: number; message: string | null }> {
  if (!isGoogleConfigured()) {
    await logSync('skipped', 0, 'GSC not configured')
    return { status: 'skipped', rows: 0, message: 'Set GOOGLE_SERVICE_ACCOUNT_JSON and GSC_SITE_URL' }
  }

  const siteUrl = getGscSiteUrl()!
  const token = await getGoogleAccessToken(['https://www.googleapis.com/auth/webmasters.readonly'])
  if (!token) {
    await logSync('failed', 0, 'Google token exchange failed')
    return { status: 'failed', rows: 0, message: 'Token exchange failed' }
  }

  const end = new Date()
  end.setDate(end.getDate() - 1)
  const start = new Date(end)
  start.setDate(start.getDate() - (days - 1))

  const startStr = start.toISOString().slice(0, 10)
  const endStr = end.toISOString().slice(0, 10)
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`

  try {
    await query(
      `DELETE FROM gsc_daily_stats
       WHERE dimension_type IN ('query', 'page') AND stat_date >= $1`,
      [startStr],
    )
    await query(
      `DELETE FROM gsc_daily_stats
       WHERE dimension_type = 'site' AND stat_date >= $1 AND stat_date <= $2`,
      [startStr, endStr],
    )

    let rows = 0
    rows += await fetchDimension(endpoint, token, startStr, endStr, 'query', endStr)
    rows += await fetchDimension(endpoint, token, startStr, endStr, 'page', endStr)
    rows += await fetchDateTrend(endpoint, token, startStr, endStr)

    await logSync('success', rows, null, startStr, endStr)
    return { status: 'success', rows, message: null }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'GSC sync failed'
    await logSync('failed', 0, message, startStr, endStr)
    return { status: 'failed', rows: 0, message }
  }
}

export async function getGrowthAnalytics(periodDays = 30) {
  const configured = isGoogleConfigured()
  const plausibleDomain = process.env.NUXT_PUBLIC_PLAUSIBLE_DOMAIN || ''
  const gaId = process.env.NUXT_PUBLIC_GA_ID || ''

  if (!configured) {
    return {
      period_days: periodDays,
      configured: { gsc: false, plausible: !!plausibleDomain, ga4: !!gaId },
      seo: null,
      last_sync: null,
    }
  }

  const since = new Date()
  since.setDate(since.getDate() - periodDays)
  const sinceStr = since.toISOString().slice(0, 10)

  const [totals, topQueries, topPages, dailyTrend, lastSync] = await Promise.all([
    query<{ clicks: string; impressions: string; ctr: string; position: string }>(
      `SELECT
        COALESCE(SUM(clicks), 0)::TEXT AS clicks,
        COALESCE(SUM(impressions), 0)::TEXT AS impressions,
        COALESCE(AVG(ctr), 0)::TEXT AS ctr,
        COALESCE(AVG(position), 0)::TEXT AS position
       FROM gsc_daily_stats
       WHERE dimension_type = 'site' AND stat_date >= $1`,
      [sinceStr],
    ),
    query<{ dimension_value: string; clicks: number; impressions: number; ctr: number; position: number }>(
      `SELECT dimension_value, clicks, impressions, ctr, position
       FROM gsc_daily_stats
       WHERE dimension_type = 'query' AND stat_date >= $1
       ORDER BY clicks DESC
       LIMIT 10`,
      [sinceStr],
    ),
    query<{ dimension_value: string; clicks: number; impressions: number; ctr: number; position: number }>(
      `SELECT dimension_value, clicks, impressions, ctr, position
       FROM gsc_daily_stats
       WHERE dimension_type = 'page' AND stat_date >= $1
       ORDER BY clicks DESC
       LIMIT 10`,
      [sinceStr],
    ),
    query<{ stat_date: string; clicks: number; impressions: number }>(
      `SELECT stat_date::TEXT, clicks, impressions
       FROM gsc_daily_stats
       WHERE dimension_type = 'site' AND stat_date >= $1
       ORDER BY stat_date ASC`,
      [sinceStr],
    ),
    query<{ created_at: Date; status: string }>(
      `SELECT created_at, status FROM analytics_sync_logs
       WHERE provider = 'gsc' ORDER BY created_at DESC LIMIT 1`,
    ),
  ])

  const t = totals[0]
  return {
    period_days: periodDays,
    configured: { gsc: true, plausible: !!plausibleDomain, ga4: !!gaId },
    seo: {
      totals: {
        clicks: parseInt(t?.clicks ?? '0', 10),
        impressions: parseInt(t?.impressions ?? '0', 10),
        ctr: parseFloat(t?.ctr ?? '0'),
        position: parseFloat(t?.position ?? '0'),
      },
      top_queries: topQueries,
      top_pages: topPages,
      daily_trend: dailyTrend,
    },
    last_sync: lastSync[0]?.created_at ?? null,
    last_sync_status: lastSync[0]?.status ?? null,
  }
}
