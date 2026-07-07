<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6">
    <div class="flex items-start justify-between gap-4 mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Blog</h1>
        <p class="text-gray-500 text-sm mt-1">
          Website CMS — {{ stats.total }} posts ({{ stats.published }} published, {{ stats.draft }} drafts). Not part of the AI assistant.
        </p>
      </div>
      <button class="btn-primary text-sm" @click="openCreate">+ New Post</button>
    </div>

    <div class="flex flex-wrap gap-3 mb-6">
      <select v-model="filters.status" class="input-field" @change="fetchPosts(1)">
        <option value="">All statuses</option>
        <option value="published">Published</option>
        <option value="draft">Draft</option>
      </select>
      <select v-model="filters.category" class="input-field" @change="fetchPosts(1)">
        <option value="">All categories</option>
        <option v-for="c in categories" :key="c.value" :value="c.value">{{ c.label }}</option>
      </select>
      <input
        v-model="filters.search"
        placeholder="Search titles…"
        class="input-field w-56"
        @input="debouncedSearch"
      />
    </div>

    <div v-if="loading" class="card py-16 text-center text-gray-400 text-sm">Loading posts…</div>
    <div v-else-if="posts.length === 0" class="card py-16 text-center text-gray-400 text-sm">No posts found.</div>
    <div v-else class="card overflow-hidden">
      <table class="w-full text-sm">
        <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th class="th text-left">Title</th>
            <th class="th text-left hidden sm:table-cell">Category</th>
            <th class="th text-left">Status</th>
            <th class="th text-left hidden md:table-cell">Views</th>
            <th class="th text-left hidden lg:table-cell">Published</th>
            <th class="th text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="post in posts" :key="post.id" class="hover:bg-gray-50">
            <td class="td">
              <p class="font-medium text-gray-900">{{ post.title }}</p>
              <p class="text-xs text-gray-400 mt-0.5">/blog/{{ post.slug }}</p>
            </td>
            <td class="td hidden sm:table-cell capitalize text-gray-500">{{ post.category?.replace('-', ' ') }}</td>
            <td class="td">
              <span :class="post.status === 'published' ? 'chip-green' : 'chip-gray'" class="chip capitalize">{{ post.status }}</span>
            </td>
            <td class="td hidden md:table-cell text-gray-500">{{ post.view_count ?? 0 }}</td>
            <td class="td hidden lg:table-cell text-gray-400">{{ fmtDate(post.published_at) }}</td>
            <td class="td text-right">
              <div class="flex items-center justify-end gap-2">
                <a v-if="post.status === 'published'" :href="`/blog/${post.slug}`" target="_blank" class="text-xs text-emerald-600 hover:underline">View</a>
                <button class="text-xs text-gray-500 hover:text-gray-800" @click="openPreview(post)">Preview</button>
                <button class="text-xs text-gray-500 hover:text-gray-800" @click="openEdit(post)">Edit</button>
                <button v-if="post.status === 'draft'" class="text-xs text-emerald-600 hover:underline" @click="publishPost(post.id)">Publish</button>
                <button class="text-xs text-red-500 hover:underline" @click="deleteTarget = post">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="pagination.last_page > 1" class="flex justify-center gap-2 mt-6">
      <button
        v-for="page in pagination.last_page"
        :key="page"
        class="px-3 py-1.5 rounded text-sm"
        :class="page === pagination.current_page ? 'bg-emerald-600 text-white' : 'bg-white border border-gray-200 text-gray-600'"
        @click="fetchPosts(page)"
      >
        {{ page }}
      </button>
    </div>

    <!-- Modal -->
    <div v-if="modal.open" class="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 overflow-y-auto" @click.self="closeModal">
      <div class="bg-white rounded-2xl w-full max-w-3xl my-8 shadow-xl">
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-bold text-gray-900">{{ modal.isNew ? 'New Post' : 'Edit Post' }}</h2>
          <button class="text-gray-400 hover:text-gray-700" @click="closeModal">✕</button>
        </div>
        <div class="p-6 space-y-4">
          <div>
            <label class="form-label">Title *</label>
            <input v-model="form.title" type="text" class="input-field w-full" />
          </div>
          <div>
            <label class="form-label">URL slug</label>
            <input v-model="form.slug" type="text" placeholder="auto-generated from title if blank" class="input-field w-full" />
            <p class="text-xs text-gray-400 mt-1">/blog/{{ slugPreview }}</p>
          </div>
          <div>
            <label class="form-label">Excerpt *</label>
            <textarea v-model="form.excerpt" rows="2" class="input-field w-full resize-none" />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="form-label">Category</label>
              <select v-model="form.category" class="input-field w-full">
                <option v-for="c in categories" :key="c.value" :value="c.value">{{ c.label }}</option>
              </select>
            </div>
            <div>
              <label class="form-label">Status</label>
              <select v-model="form.status" class="input-field w-full">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
          <div>
            <label class="form-label">SEO Title</label>
            <input v-model="form.seo_title" type="text" maxlength="200" class="input-field w-full" />
            <p class="text-xs text-gray-400 mt-1">{{ (form.seo_title || form.title).length }}/200 — leave blank to use post title</p>
          </div>
          <div>
            <label class="form-label">SEO Description</label>
            <textarea v-model="form.seo_description" rows="2" maxlength="500" class="input-field w-full resize-none" />
            <p class="text-xs text-gray-400 mt-1">{{ (form.seo_description || form.excerpt).length }}/500 — leave blank to use excerpt</p>
          </div>
          <div>
            <label class="form-label">Featured Image URL</label>
            <input v-model="form.featured_image" type="text" placeholder="/container-20ft.jpg" class="input-field w-full" />
          </div>
          <div>
            <label class="form-label">Tags (comma-separated)</label>
            <input v-model="tagsInput" type="text" class="input-field w-full" placeholder="containers, delivery, teesside" />
          </div>
          <div>
            <label class="form-label">Content (Markdown) *</label>
            <textarea v-model="form.content" rows="14" class="input-field w-full font-mono text-sm resize-y" />
          </div>
        </div>
        <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200">
          <button class="btn-secondary text-sm" @click="closeModal">Cancel</button>
          <button class="btn-primary text-sm" :disabled="saving" @click="savePost">
            {{ saving ? 'Saving…' : modal.isNew ? 'Create Post' : 'Save Changes' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Preview modal -->
    <div v-if="preview.open" class="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 overflow-y-auto" @click.self="preview.open = false">
      <div class="bg-white rounded-2xl w-full max-w-3xl my-8 shadow-xl">
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div>
            <h2 class="text-lg font-bold text-gray-900">{{ preview.post?.title }}</h2>
            <p class="text-xs text-gray-400 mt-1 capitalize">{{ preview.post?.category?.replace('-', ' ') }} · {{ preview.post?.status }}</p>
          </div>
          <button class="text-gray-400 hover:text-gray-700" @click="preview.open = false">✕</button>
        </div>
        <div class="p-6">
          <p class="text-gray-500 italic mb-4 text-sm">{{ preview.post?.excerpt }}</p>
          <article class="prose prose-sm prose-emerald max-w-none" v-html="previewHtml" />
        </div>
        <div class="flex justify-end gap-3 px-6 py-4 border-t border-gray-200">
          <button class="btn-secondary text-sm" @click="preview.open = false">Close</button>
          <button class="btn-primary text-sm" @click="openEdit(preview.post); preview.open = false">Edit</button>
        </div>
      </div>
    </div>

    <!-- Delete confirm -->
    <div v-if="deleteTarget" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="deleteTarget = null">
      <div class="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl">
        <h3 class="font-bold text-lg mb-2">Delete post?</h3>
        <p class="text-gray-500 text-sm mb-6">"{{ deleteTarget.title }}" will be permanently removed.</p>
        <div class="flex gap-3 justify-end">
          <button class="btn-secondary text-sm" @click="deleteTarget = null">Cancel</button>
          <button class="btn-primary text-sm bg-red-600 hover:bg-red-700" :disabled="saving" @click="deletePost">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { renderMarkdown } from '~/utils/markdown'

definePageMeta({ layout: 'admin', middleware: ['admin-auth'] })

const { siteFetch } = useAdminApi()
const { showToast } = useAdminToast()

const categories = [
  { value: 'guides', label: 'Guides' },
  { value: 'news', label: 'News' },
  { value: 'depot-updates', label: 'Depot Updates' },
  { value: 'general', label: 'General' },
]

const loading = ref(true)
const saving = ref(false)
const posts = ref<any[]>([])
const deleteTarget = ref<any>(null)
const filters = reactive({ status: '', category: '', search: '' })
const pagination = reactive({ current_page: 1, last_page: 1, total: 0 })
const stats = reactive({ total: 0, published: 0, draft: 0 })
const modal = reactive({ open: false, isNew: false, editId: null as string | null })
const preview = reactive({ open: false, post: null as any })
const tagsInput = ref('')
const form = reactive({
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  category: 'guides',
  status: 'draft',
  seo_title: '',
  seo_description: '',
  featured_image: '',
})

let searchTimer: ReturnType<typeof setTimeout> | null = null
function debouncedSearch() {
  if (searchTimer) clearTimeout(searchTimer)
  searchTimer = setTimeout(() => fetchPosts(1), 300)
}

function fmtDate(iso?: string) {
  return iso ? new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120) || 'post'
}

const slugPreview = computed(() => form.slug.trim() || slugify(form.title) || 'post')
const previewHtml = computed(() => preview.post?.content ? renderMarkdown(preview.post.content) : '')

function openPreview(post: any) {
  preview.post = post
  preview.open = true
}

function resetForm() {
  form.title = ''
  form.slug = ''
  form.excerpt = ''
  form.content = ''
  form.category = 'guides'
  form.status = 'draft'
  form.seo_title = ''
  form.seo_description = ''
  form.featured_image = ''
  tagsInput.value = ''
}

async function fetchPosts(page = 1) {
  loading.value = true
  try {
    const params = new URLSearchParams({ page: String(page), per_page: '20' })
    if (filters.status) params.set('status', filters.status)
    if (filters.search) params.set('search', filters.search)
    const res = await siteFetch(`/admin/blog?${params}`)
    const data = await res.json()
    posts.value = data.posts
    Object.assign(pagination, data.pagination)
    Object.assign(stats, data.stats)
  } catch {
    showToast('Failed to load posts', 'error')
  } finally {
    loading.value = false
  }
}

function openCreate() {
  resetForm()
  modal.isNew = true
  modal.editId = null
  modal.open = true
}

function openEdit(post: any) {
  modal.isNew = false
  modal.editId = post.id
  form.title = post.title
  form.slug = post.slug
  form.excerpt = post.excerpt
  form.content = post.content
  form.category = post.category
  form.status = post.status
  form.seo_title = post.seo_title || ''
  form.seo_description = post.seo_description || ''
  form.featured_image = post.featured_image || ''
  tagsInput.value = (post.tags || []).join(', ')
  modal.open = true
}

function closeModal() {
  modal.open = false
}

function buildPayload() {
  return {
    title: form.title,
    slug: form.slug.trim() || undefined,
    excerpt: form.excerpt,
    content: form.content,
    category: form.category,
    status: form.status,
    seo_title: form.seo_title || null,
    seo_description: form.seo_description || null,
    featured_image: form.featured_image || null,
    tags: tagsInput.value.split(',').map((t) => t.trim()).filter(Boolean),
  }
}

async function savePost() {
  saving.value = true
  try {
    const payload = buildPayload()
    const res = modal.isNew
      ? await siteFetch('/admin/blog', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      : await siteFetch(`/admin/blog/${modal.editId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error || 'Save failed')
    }
    closeModal()
    await fetchPosts(pagination.current_page)
    showToast(modal.isNew ? 'Post created' : 'Post updated')
  } catch (e: any) {
    showToast(e.message || 'Failed to save post', 'error')
  } finally {
    saving.value = false
  }
}

async function publishPost(id: string) {
  try {
    await siteFetch(`/admin/blog/${id}/publish`, { method: 'POST' })
    await fetchPosts(pagination.current_page)
    showToast('Post published')
  } catch {
    showToast('Failed to publish', 'error')
  }
}

async function deletePost() {
  if (!deleteTarget.value) return
  saving.value = true
  try {
    await siteFetch(`/admin/blog/${deleteTarget.value.id}`, { method: 'DELETE' })
    deleteTarget.value = null
    await fetchPosts(pagination.current_page)
    showToast('Post deleted')
  } catch {
    showToast('Failed to delete', 'error')
  } finally {
    saving.value = false
  }
}

onMounted(() => fetchPosts())
</script>

<style scoped>
.card { @apply bg-white rounded-xl shadow-sm border border-gray-200; }
.th { @apply px-4 py-3 font-medium text-gray-500 text-xs uppercase tracking-wide; }
.td { @apply px-4 py-3; }
.chip { @apply text-xs px-2 py-0.5 rounded-full font-medium inline-block; }
.chip-green { @apply bg-emerald-100 text-emerald-700; }
.chip-gray { @apply bg-gray-100 text-gray-600; }
.input-field { @apply border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-100 transition-colors bg-white; }
.form-label { @apply block text-xs font-medium text-gray-600 mb-1; }
.btn-primary { @apply bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50; }
.btn-secondary { @apply bg-white hover:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-lg border border-gray-200 transition-colors; }
</style>
