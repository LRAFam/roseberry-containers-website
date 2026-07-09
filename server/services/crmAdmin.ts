import { query, queryOne } from '../db/pool'
import { hashPassword, validatePasswordStrength, verifyPassword } from '../utils/password'

function generateInvoiceNumber(): string {
  const date = new Date()
  const stamp = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`
  const rand = Math.floor(Math.random() * 9000) + 1000
  return `INV-${stamp}-${rand}`
}

export async function getDashboardStats(clientId: string) {
  const [statusCounts, revenueRow, todayRow, sourceRow, convRow] = await Promise.all([
    query<{ status: string; count: string }>(
      `SELECT status, COUNT(*)::TEXT AS count FROM leads WHERE client_id = $1 GROUP BY status`,
      [clientId],
    ),
    queryOne<{ total: string }>(
      `SELECT COALESCE(SUM(total_pence), 0)::TEXT AS total FROM invoices WHERE status = 'paid' AND client_id = $1`,
      [clientId],
    ),
    queryOne<{ count: string }>(
      `SELECT COUNT(*)::TEXT AS count FROM leads WHERE client_id = $1 AND created_at >= NOW() - INTERVAL '24 hours'`,
      [clientId],
    ),
    query<{ source: string; count: string }>(
      `SELECT source, COUNT(*)::TEXT AS count FROM leads WHERE client_id = $1 GROUP BY source`,
      [clientId],
    ),
    queryOne<{ won: string; total: string }>(
      `SELECT
        COUNT(*) FILTER (WHERE status = 'won')::TEXT AS won,
        COUNT(*)::TEXT AS total
       FROM leads
       WHERE client_id = $1`,
      [clientId],
    ),
  ])

  const byStatus = Object.fromEntries(statusCounts.map((r) => [r.status, parseInt(r.count, 10)]))
  const bySource = Object.fromEntries(sourceRow.map((r) => [r.source, parseInt(r.count, 10)]))
  const totalLeads = parseInt(convRow?.total ?? '0', 10)
  const wonLeads = parseInt(convRow?.won ?? '0', 10)

  return {
    newToday: parseInt(todayRow?.count ?? '0', 10),
    byStatus,
    bySource,
    totalRevenuePence: parseInt(revenueRow?.total ?? '0', 10),
    conversionRate: totalLeads > 0 ? Math.round((wonLeads / totalLeads) * 100) : 0,
    totalLeads,
  }
}

export async function getWebsiteLeadStats(clientId: string) {
  const [leadsWeek, leadsMonth, websiteLeadsMonth] = await Promise.all([
    queryOne<{ count: string }>(
      `SELECT COUNT(*)::TEXT AS count FROM leads
       WHERE client_id = $1 AND created_at >= NOW() - INTERVAL '7 days'`,
      [clientId],
    ),
    queryOne<{ count: string }>(
      `SELECT COUNT(*)::TEXT AS count FROM leads
       WHERE client_id = $1 AND created_at >= NOW() - INTERVAL '30 days'`,
      [clientId],
    ),
    queryOne<{ count: string }>(
      `SELECT COUNT(*)::TEXT AS count FROM leads
       WHERE client_id = $1 AND source = 'website' AND created_at >= NOW() - INTERVAL '30 days'`,
      [clientId],
    ),
  ])

  return {
    leadsThisWeek: parseInt(leadsWeek?.count ?? '0', 10),
    leadsThisMonth: parseInt(leadsMonth?.count ?? '0', 10),
    websiteLeadsThisMonth: parseInt(websiteLeadsMonth?.count ?? '0', 10),
    analyticsConfigured: !!(
      process.env.NUXT_PUBLIC_PLAUSIBLE_DOMAIN
      || process.env.NUXT_PUBLIC_GA_ID
      || process.env.PLAUSIBLE_SITE_ID
      || process.env.GA_MEASUREMENT_ID
    ),
  }
}

export async function listLeads(clientId: string) {
  return query(
    `SELECT * FROM leads WHERE client_id = $1 ORDER BY created_at DESC`,
    [clientId],
  )
}

export async function getLeadWithMessages(clientId: string, id: string) {
  const [lead, messages] = await Promise.all([
    queryOne(`SELECT * FROM leads WHERE id = $1 AND client_id = $2`, [id, clientId]),
    query(
      `SELECT m.* FROM messages m
       INNER JOIN leads l ON l.id = m.lead_id
       WHERE m.lead_id = $1 AND l.client_id = $2
       ORDER BY m.created_at ASC`,
      [id, clientId],
    ),
  ])
  if (!lead) return null
  return { ...lead, messages }
}

export async function patchLead(
  clientId: string,
  id: string,
  body: { status?: string; notes?: string },
) {
  const validStatuses = ['new', 'qualified', 'quoted', 'won', 'lost']
  if (body.status && !validStatuses.includes(body.status)) {
    throw createError({ statusCode: 400, message: `status must be one of: ${validStatuses.join(', ')}` })
  }
  if (body.status) {
    await query(`UPDATE leads SET status = $1 WHERE id = $2 AND client_id = $3`, [body.status, id, clientId])
  }
  if (body.notes !== undefined) {
    await query(`UPDATE leads SET notes = $1 WHERE id = $2 AND client_id = $3`, [body.notes, id, clientId])
  }
}

export async function listCustomers(clientId: string) {
  return query(
    `SELECT c.*, COUNT(l.id)::TEXT AS lead_count
     FROM customers c
     LEFT JOIN leads l ON l.customer_id = c.id
     WHERE c.client_id = $1
     GROUP BY c.id
     ORDER BY c.created_at DESC`,
    [clientId],
  )
}

export async function createCustomer(
  clientId: string,
  body: { name: string; email?: string; phone?: string; address?: string },
) {
  return queryOne(
    `INSERT INTO customers (name, email, phone, address, client_id) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
    [body.name, body.email ?? null, body.phone ?? null, body.address ?? null, clientId],
  )
}

export async function listDepotStock(clientId: string) {
  return query(
    `SELECT * FROM depot_stock WHERE client_id = $1 ORDER BY container_type, price_pence ASC`,
    [clientId],
  )
}

export async function upsertDepotStock(
  clientId: string,
  body: {
    depot_name: string
    container_type: string
    condition?: string
    price_gbp?: number
    quantity?: number
    postcode?: string
  },
) {
  await query(
    `INSERT INTO depot_stock (client_id, depot_name, container_type, condition, price_pence, quantity, postcode, last_updated)
     VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
     ON CONFLICT (depot_name, container_type)
     DO UPDATE SET price_pence = EXCLUDED.price_pence,
                   quantity = EXCLUDED.quantity,
                   last_updated = NOW()`,
    [
      clientId,
      body.depot_name,
      body.container_type,
      body.condition ?? null,
      Math.round((body.price_gbp ?? 0) * 100),
      body.quantity ?? 0,
      body.postcode ?? null,
    ],
  )
}

export async function deleteDepotStock(id: string) {
  await query(`DELETE FROM depot_stock WHERE id = $1`, [id])
}

export async function listHaulage(clientId: string) {
  return query(
    `SELECT hq.*, l.customer_name AS lead_name
     FROM haulage_quotes hq
     LEFT JOIN leads l ON l.id = hq.lead_id
     WHERE hq.client_id = $1
     ORDER BY hq.created_at DESC`,
    [clientId],
  )
}

export async function createHaulageQuote(
  clientId: string,
  body: {
    lead_id?: string
    haulier_name: string
    origin_postcode: string
    destination_postcode: string
    price_gbp?: number
    distance_km?: number | null
    notes?: string
  },
) {
  return queryOne(
    `INSERT INTO haulage_quotes (client_id, lead_id, haulier_name, origin_postcode, destination_postcode, distance_km, price_pence, notes)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [
      clientId,
      body.lead_id || null,
      body.haulier_name,
      body.origin_postcode,
      body.destination_postcode,
      body.distance_km || null,
      Math.round((body.price_gbp ?? 0) * 100),
      body.notes || null,
    ],
  )
}

export async function listFollowups(clientId: string) {
  return query(
    `SELECT fu.*, l.customer_name AS lead_name
     FROM follow_ups fu
     LEFT JOIN leads l ON l.id = fu.lead_id
     WHERE fu.client_id = $1
     ORDER BY fu.scheduled_at ASC`,
    [clientId],
  )
}

export async function cancelFollowup(id: string) {
  await query(`UPDATE follow_ups SET status = 'cancelled' WHERE id = $1`, [id])
}

export async function listInvoices(clientId: string) {
  return query(
    `SELECT i.*, json_agg(ii.*) AS items
     FROM invoices i
     LEFT JOIN invoice_items ii ON ii.invoice_id = i.id
     WHERE i.client_id = $1
     GROUP BY i.id
     ORDER BY i.created_at DESC`,
    [clientId],
  )
}

export async function createInvoice(
  clientId: string,
  body: {
    customer_id: string
    lead_id?: string
    items: Array<{ description: string; quantity: number; unit_price: number }>
  },
) {
  const subtotal = body.items.reduce((sum, i) => sum + i.quantity * i.unit_price, 0)
  const vat = Math.round(subtotal * 0.20 * 100) / 100
  const total = subtotal + vat
  const invoiceNumber = generateInvoiceNumber()
  const subtotalPence = Math.round(subtotal * 100)
  const vatPence = Math.round(vat * 100)
  const totalPence = Math.round(total * 100)

  const row = await queryOne(
    `INSERT INTO invoices (client_id, customer_id, lead_id, invoice_number, subtotal_pence, vat_pence, total_pence, status)
     VALUES ($1, $2, $3, $4, $5, $6, $7, 'draft')
     RETURNING *`,
    [clientId, body.customer_id, body.lead_id || null, invoiceNumber, subtotalPence, vatPence, totalPence],
  )

  if (body.items.length > 0 && row) {
    const values = body.items
      .map((_, i) => `($1, $${i * 3 + 2}, $${i * 3 + 3}, $${i * 3 + 4})`)
      .join(', ')
    const params: unknown[] = [row.id]
    body.items.forEach((item) => {
      params.push(item.description, item.quantity, Math.round(item.unit_price * 100))
    })
    await query(
      `INSERT INTO invoice_items (invoice_id, description, quantity, unit_pence) VALUES ${values}`,
      params,
    )
  }

  return row
}

export async function patchInvoiceStatus(clientId: string, id: string, status: string) {
  const valid = ['draft', 'sent', 'paid']
  if (!valid.includes(status)) {
    throw createError({ statusCode: 400, message: 'Invalid status.' })
  }
  await query(`UPDATE invoices SET status = $1 WHERE id = $2 AND client_id = $3`, [status, id, clientId])
}

export async function listCalls(clientId: string) {
  return query(
    `SELECT ct.*, l.customer_name AS lead_name
     FROM call_transcripts ct
     INNER JOIN leads l ON ct.lead_id = l.id
     WHERE l.client_id = $1
     ORDER BY ct.created_at DESC`,
    [clientId],
  )
}

export async function createLeadFromInternal(body: {
  client_id: string
  customer_name: string
  email?: string | null
  phone?: string | null
  location?: string | null
  container_type?: string | null
  source: string
  status?: string
  notes?: string | null
}) {
  const values = [
    body.client_id,
    body.customer_name,
    body.email ?? null,
    body.phone ?? null,
    body.location ?? null,
    body.container_type ?? null,
    body.source,
    body.status ?? 'new',
    body.notes ?? null,
  ]

  try {
    return await queryOne(
      `INSERT INTO leads (client_id, customer_name, email, phone, location, container_type, source, status, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      values,
    )
  } catch (err: unknown) {
    const pgErr = err as { code?: string; message?: string }
    const message = pgErr.message ?? ''

    // Migration 011 not applied — email column missing
    if (pgErr.code === '42703' && message.includes('email')) {
      console.warn('[crm] leads.email column missing — inserting without email (run migration 011)')
      return queryOne(
        `INSERT INTO leads (client_id, customer_name, phone, location, container_type, source, status, notes)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         RETURNING *`,
        [
          body.client_id,
          body.customer_name,
          body.phone ?? null,
          body.location ?? null,
          body.container_type ?? null,
          body.source,
          body.status ?? 'new',
          body.notes ?? null,
        ],
      )
    }

    // Migration 005 not applied — website source enum missing
    if (pgErr.code === '22P02' && message.includes('lead_source')) {
      console.warn('[crm] lead_source enum missing website — storing as whatsapp fallback (run migration 005)')
      return queryOne(
        `INSERT INTO leads (client_id, customer_name, email, phone, location, container_type, source, status, notes)
         VALUES ($1, $2, $3, $4, $5, $6, 'whatsapp', $7, $8)
         RETURNING *`,
        [
          body.client_id,
          body.customer_name,
          body.email ?? null,
          body.phone ?? null,
          body.location ?? null,
          body.container_type ?? null,
          body.status ?? 'new',
          body.notes ?? null,
        ],
      )
    }

    throw err
  }
}

export async function changeDashboardPassword(
  clientId: string,
  currentPassword: string,
  newPassword: string,
) {
  const row = await queryOne<{ dashboard_password_hash: string | null }>(
    `SELECT dashboard_password_hash FROM clients WHERE id = $1`,
    [clientId],
  )
  if (!row?.dashboard_password_hash) {
    throw createError({ statusCode: 401, message: 'Current password is incorrect.' })
  }

  const passwordError = validatePasswordStrength(newPassword)
  if (passwordError) throw createError({ statusCode: 400, message: passwordError })
  if (!verifyPassword(currentPassword, row.dashboard_password_hash)) {
    throw createError({ statusCode: 401, message: 'Current password is incorrect.' })
  }

  await query(`UPDATE clients SET dashboard_password_hash = $1 WHERE id = $2`, [hashPassword(newPassword), clientId])
}
