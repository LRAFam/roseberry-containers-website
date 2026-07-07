/**
 * Protects /admin/* pages via site_token (same-origin /api/admin/*).
 */
export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/admin/login') return

  const headers: Record<string, string> = {}
  if (import.meta.server) {
    const requestHeaders = useRequestHeaders(['cookie'])
    if (requestHeaders.cookie) headers.cookie = requestHeaders.cookie
  }

  try {
    const res = await fetch('/api/admin/stats', { credentials: 'include', headers })
    if (res.status === 401) return navigateTo('/admin/login')
  } catch {
    return navigateTo('/admin/login')
  }
})
