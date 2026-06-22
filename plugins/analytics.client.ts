export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const domain = config.public.plausibleDomain
  if (!domain || !import.meta.client) return

  const script = document.createElement('script')
  script.defer = true
  script.dataset.domain = domain
  script.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(script)
})
