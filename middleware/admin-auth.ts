/**
 * Nuxt route middleware — protects /admin/* pages.
 * Verifies the dashboard_token cookie by pinging /admin/leads.
 * If the server returns 401, redirect to /admin/login.
 *
 * During SSR the browser cookie isn't automatically forwarded by fetch,
 * so we read it from the incoming request headers and pass it explicitly.
 */
export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/admin/login') return;

  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase || 'http://localhost:3001';

  // Forward the cookie header when running on the server (SSR)
  const headers: Record<string, string> = {};
  if (process.server) {
    const requestHeaders = useRequestHeaders(['cookie']);
    if (requestHeaders.cookie) headers['cookie'] = requestHeaders.cookie;
  }

  try {
    const res = await fetch(`${apiBase}/admin/leads`, { credentials: 'include', headers });
    if (res.status === 401) return navigateTo('/admin/login');
  } catch {
    return navigateTo('/admin/login');
  }
});
