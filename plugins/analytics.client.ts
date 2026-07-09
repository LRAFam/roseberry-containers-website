declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function shouldTrackPath(path: string): boolean {
  return !path.startsWith('/admin')
}

function loadPlausible(domain: string) {
  const script = document.createElement('script')
  script.defer = true
  script.dataset.domain = domain
  script.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(script)
}

function loadGa4(measurementId: string, router: ReturnType<typeof useRouter>) {
  window.dataLayer = window.dataLayer || []
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag = gtag

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)

  gtag('js', new Date())
  gtag('config', measurementId, { send_page_view: false })

  const trackPage = (path: string) => {
    if (!shouldTrackPath(path)) return
    gtag('config', measurementId, {
      page_path: path,
    })
  }

  trackPage(router.currentRoute.value.fullPath)
  router.afterEach((to) => trackPage(to.fullPath))
}

export default defineNuxtPlugin(() => {
  if (!import.meta.client) return

  const config = useRuntimeConfig()
  const router = useRouter()
  const plausibleDomain = config.public.plausibleDomain
  const gaId = config.public.gaId

  if (plausibleDomain) loadPlausible(plausibleDomain)
  if (gaId) loadGa4(gaId, router)
})
