export type AdminApiTarget = 'assistant' | 'site'

export function useAdminApi() {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase || 'http://localhost:3001'

  async function adminFetch(
    path: string,
    init: RequestInit = {},
    target: AdminApiTarget = 'site',
  ): Promise<Response> {
    const headers: Record<string, string> = {
      ...(init.headers as Record<string, string> | undefined),
    }

    if (import.meta.server) {
      const requestHeaders = useRequestHeaders(['cookie'])
      if (requestHeaders.cookie) headers.cookie = requestHeaders.cookie
    }

    const url = target === 'site'
      ? (path.startsWith('/api') ? path : `/api${path}`)
      : `${apiBase}${path}`

    const res = await fetch(url, {
      ...init,
      credentials: 'include',
      headers,
    })

    if (res.status === 401) {
      await navigateTo('/admin/login')
      throw new Error('Unauthorized')
    }

    return res
  }

  /** Same-origin website backend — blog, SEO, CRM admin. Never use for AI assistant routes. */
  function siteFetch(path: string, init: RequestInit = {}) {
    return adminFetch(path, init, 'site')
  }

  /** Public site only: invoice PDF downloads from assistant file server. Not used for admin CMS. */
  function assistantFetch(path: string, init: RequestInit = {}) {
    return adminFetch(path, init, 'assistant')
  }

  return { apiBase, adminFetch: siteFetch, siteFetch, assistantFetch }
}
