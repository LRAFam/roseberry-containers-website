import { patchInvoiceStatus } from '../../../../services/crmAdmin'
import { requireSiteAdmin } from '../../../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Invoice id required.' })

  const body = await readBody(event)
  await patchInvoiceStatus(clientId, id, body?.status)
  return { success: true }
})
