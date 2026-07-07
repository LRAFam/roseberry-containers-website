import { listCalls } from '../../../services/crmAdmin'
import { requireSiteAdmin } from '../../../utils/auth'

export default defineEventHandler(async (event) => {
  const { clientId } = requireSiteAdmin(event)
  return listCalls(clientId)
})
