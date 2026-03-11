/**
 * Nuxt route middleware — protects /admin/* pages.
 * Verifies the dashboard_token cookie by pinging /admin/leads.
 * If the server returns 401, redirect to /admin/login.
 */
export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/admin/login') return;

  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase || 'http://localhost:3001';

  try {
    const res = await fetch(`${apiBase}/admin/leads`, { credentials: 'include' });
    if (res.status === 401) return navigateTo('/admin/login');
  } catch {
    return navigateTo('/admin/login');
  }
});
