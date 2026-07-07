import { createHaulageQuote } from '../../../services/crmAdmin'
import { requireSiteAdmin } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  const body = await readBody(event)
  const quote = await createHaulageQuote(clientId, body ?? {})
  setResponseStatus(event, 201)
  return quote
})
