<template>
  <div>
    <Header />
    <main>
      <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
        <div class="absolute inset-0">
          <img src="/container-20ft.jpg" alt="Roseberry Containers blog" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-primary-950/90"></div>
        </div>
        <div class="container-custom relative z-10 pt-20 md:pt-28 pb-20 md:pb-28">
          <h1 class="text-4xl sm:text-5xl font-bold mb-4">Blog &amp; Guides</h1>
          <p class="text-xl text-gray-300 max-w-2xl">
            Container buying advice, depot news, and practical guides from the Roseberry team.
          </p>
        </div>
      </section>

      <section class="section-padding bg-gray-50">
        <div class="container-custom max-w-5xl">
          <div v-if="pending" class="text-center text-gray-400 py-16">Loading posts…</div>
          <div v-else-if="!posts.length" class="text-center py-16">
            <p class="text-gray-500 mb-4">No posts published yet.</p>
            <NuxtLink to="/guides/shipping-container-prices-uk" class="text-emerald-600 hover:underline font-medium">
              Read our container prices guide →
            </NuxtLink>
          </div>
          <div v-else class="grid gap-6">
            <article
              v-for="post in posts"
              :key="post.id"
              class="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-lg transition-shadow"
            >
              <NuxtLink :to="`/blog/${post.slug}`" class="block md:flex">
                <div v-if="post.featured_image" class="md:w-72 flex-shrink-0">
                  <img :src="post.featured_image" :alt="post.title" class="w-full h-48 md:h-full object-cover" loading="lazy" />
                </div>
                <div class="p-6 md:p-8">
                  <div class="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span class="capitalize bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">{{ post.category?.replace('-', ' ') }}</span>
                    <span>{{ fmtDate(post.published_at) }}</span>
                  </div>
                  <h2 class="text-xl font-bold text-gray-900 mb-2 hover:text-emerald-700 transition-colors">{{ post.title }}</h2>
                  <p class="text-gray-600 leading-relaxed">{{ post.excerpt }}</p>
                </div>
              </NuxtLink>
            </article>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const clientId = config.public.clientId
const apiBase = config.public.apiBase
const { setPageSEO } = useSEO()

setPageSEO({
  title: 'Blog & Guides | Roseberry Containers',
  description: 'Shipping container guides, buying advice, and news from Roseberry Containers — UK-wide delivery from 9 depots.',
  type: 'website',
})

const { data, pending } = await useAsyncData('blog-posts', async () => {
  if (!clientId) return { posts: [] }
  const res = await fetch(`${apiBase}/api/blog?clientId=${clientId}&per_page=20`)
  if (!res.ok) return { posts: [] }
  return res.json()
})

const posts = computed(() => data.value?.posts ?? [])

function fmtDate(iso?: string) {
  return iso ? new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : ''
}
</script>
