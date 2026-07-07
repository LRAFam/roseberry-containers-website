import { createLeadFromInternal } from '../../services/crmAdmin'
import { requireInternalApiKey } from '../../utils/internalAuth'

export default defineEventHandler(async (event) => {
  requireInternalApiKey(event)
  const body = await readBody(event)

  if (!body?.client_id || !body?.customer_name || !body?.source) {
    throw createError({ statusCode: 400, message: 'client_id, customer_name, and source are required.' })
  }

  const lead = await createLeadFromInternal(body)
  setResponseStatus(event, 201)
  return lead
})
