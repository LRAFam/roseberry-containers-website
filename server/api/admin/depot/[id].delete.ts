import { deleteDepotStock } from '../../../services/crmAdmin'
import { requireSiteAdmin } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  requireSiteAdmin(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Stock id required.' })
  await deleteDepotStock(id)
  return { success: true }
})
