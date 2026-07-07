import { getLeadWithMessages } from '../../../services/crmAdmin'
import { requireSiteAdmin } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Lead id required.' })

  const lead = await getLeadWithMessages(clientId, id)
  if (!lead) throw createError({ statusCode: 404, message: 'Lead not found.' })
  return lead
})
