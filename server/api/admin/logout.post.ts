import { clearSiteToken } from '../../utils/auth'

export default defineEventHandler((event) => {
  clearSiteToken(event)
  return { success: true }
})
