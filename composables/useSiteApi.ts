/** @deprecated Use useAdminApi().siteFetch instead */
export function useSiteApi() {
  const { siteFetch } = useAdminApi()
  return { siteFetch }
}
