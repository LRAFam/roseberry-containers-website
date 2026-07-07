import { createInvoice } from '../../../services/crmAdmin'
import { requireSiteAdmin } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  const body = await readBody(event)
  if (!body?.customer_id || !Array.isArray(body.items) || body.items.length === 0) {
    throw createError({ statusCode: 400, message: 'customer_id and at least one item are required.' })
  }

  const invoice = await createInvoice(clientId, body)
  setResponseStatus(event, 201)
  return invoice
})
