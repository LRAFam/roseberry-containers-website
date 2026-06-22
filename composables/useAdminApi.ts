export function useAdminApi() {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase || 'http://localhost:3001'

  async function adminFetch(path: string, init: RequestInit = {}): Promise<Response> {
    const headers: Record<string, string> = {
      ...(init.headers as Record<string, string> | undefined),
    }

    if (import.meta.server) {
      const requestHeaders = useRequestHeaders(['cookie'])
      if (requestHeaders.cookie) headers.cookie = requestHeaders.cookie
    }

    const res = await fetch(`${apiBase}${path}`, {
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

  return { apiBase, adminFetch }
}
