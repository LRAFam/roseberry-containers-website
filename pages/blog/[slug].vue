<template>
  <div>
    <Header />
    <main>
      <div v-if="pending" class="container-custom py-24 text-center text-gray-400">Loading…</div>

      <div v-else-if="!post" class="container-custom py-24 text-center">
        <h1 class="text-3xl font-bold text-gray-900 mb-3">Post not found</h1>
        <NuxtLink to="/blog" class="text-emerald-600 hover:underline font-medium">← Back to blog</NuxtLink>
      </div>

      <template v-else>
        <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
          <div class="absolute inset-0">
            <img :src="post.featured_image || '/container-20ft.jpg'" :alt="post.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-primary-950/90"></div>
          </div>
          <div class="container-custom relative z-10 pt-20 md:pt-28 pb-20 md:pb-28 max-w-4xl">
            <nav class="text-sm text-gray-400 mb-6">
              <NuxtLink to="/blog" class="hover:text-white transition-colors">Blog</NuxtLink>
              <span class="mx-2">/</span>
              <span class="text-amber-300 capitalize">{{ post.category?.replace('-', ' ') }}</span>
            </nav>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">{{ post.title }}</h1>
            <p class="text-lg text-gray-300">{{ post.excerpt }}</p>
            <p class="text-sm text-gray-400 mt-4">{{ fmtDate(post.published_at) }}</p>
          </div>
        </section>

        <section class="section-padding bg-white">
          <div class="container-custom max-w-3xl">
            <article class="prose prose-lg prose-emerald max-w-none" v-html="htmlContent" />
            <div class="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-start">
              <NuxtLink to="/blog" class="text-emerald-600 hover:underline font-medium">← All posts</NuxtLink>
              <NuxtLink to="/contact" class="btn-primary text-sm">Get a Quote</NuxtLink>
            </div>
          </div>
        </section>
      </template>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { renderMarkdown } from '~/utils/markdown'

const route = useRoute()
const config = useRuntimeConfig()
const clientId = config.public.clientId
const apiBase = config.public.apiBase
const { setPageSEO, setArticleJsonLd, siteUrl } = useSEO()

const { data: post, pending } = await useAsyncData(`blog-${route.params.slug}`, async () => {
  if (!clientId) return null
  const res = await fetch(`${apiBase}/api/blog/${route.params.slug}?clientId=${clientId}`)
  if (!res.ok) return null
  return res.json()
})

const htmlContent = computed(() => post.value?.content ? renderMarkdown(post.value.content) : '')

watch(post, (p) => {
  if (!p) return
  const url = `${siteUrl}/blog/${p.slug}`
  setPageSEO({
    title: `${p.seo_title || p.title} | Roseberry Containers`,
    description: p.seo_description || p.excerpt,
    image: p.featured_image ? (p.featured_image.startsWith('http') ? p.featured_image : `${siteUrl}${p.featured_image}`) : undefined,
    url,
    type: 'article',
    publishedTime: p.published_at,
    modifiedTime: p.updated_at,
  })
  setArticleJsonLd({
    title: p.title,
    description: p.excerpt,
    url,
    image: p.featured_image,
    publishedAt: p.published_at,
    modifiedAt: p.updated_at,
  })
}, { immediate: true })

function fmtDate(iso?: string) {
  return iso ? new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''
}
</script>

<style scoped>
:deep(.prose h2) { @apply text-2xl font-bold text-gray-900 mt-10 mb-4; }
:deep(.prose h3) { @apply text-xl font-bold text-gray-900 mt-8 mb-3; }
:deep(.prose p) { @apply text-gray-600 leading-relaxed mb-4; }
:deep(.prose ul) { @apply list-disc pl-6 mb-4 text-gray-600 space-y-1; }
:deep(.prose ol) { @apply list-decimal pl-6 mb-4 text-gray-600 space-y-1; }
:deep(.prose a) { @apply text-emerald-600 hover:underline; }
:deep(.prose strong) { @apply text-gray-900 font-semibold; }
:deep(.prose table) { @apply w-full text-sm border border-gray-200 rounded-xl overflow-hidden mb-6; }
:deep(.prose th) { @apply bg-gray-50 px-4 py-3 text-left font-semibold; }
:deep(.prose td) { @apply px-4 py-3 border-t border-gray-100; }
</style>
