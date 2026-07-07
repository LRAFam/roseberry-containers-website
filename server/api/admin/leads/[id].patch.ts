import { patchLead } from '../../../services/crmAdmin'
import { requireSiteAdmin } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Lead id required.' })

  const body = await readBody(event)
  await patchLead(clientId, id, body ?? {})
  return { success: true }
})
