<template>
  <div class="admin-page">
    <AdminPageHeader
      eyebrow="Website CMS"
      title="Blog"
      :subtitle="`${stats.total} posts · ${stats.published} published · ${stats.draft} drafts`"
    >
      <template #actions>
        <button class="admin-btn-primary text-sm hidden sm:inline-flex" @click="openCreate">
          <AdminIcon name="plus" size="sm" />
          New post
        </button>
      </template>
    </AdminPageHeader>

    <div class="admin-filter-stack">
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
        class="input-field"
        @input="debouncedSearch"
      />
    </div>

    <AdminEmptyState v-if="loading" title="Loading posts…" icon="newspaper" />
    <AdminEmptyState
      v-else-if="posts.length === 0"
      title="No posts yet"
      description="Create your first article to boost SEO and keep customers informed."
      icon="newspaper"
    >
      <button class="admin-btn-primary text-sm" @click="openCreate">
        <AdminIcon name="plus" size="sm" />
        Write first post
      </button>
    </AdminEmptyState>

    <!-- Mobile card list -->
    <div v-else class="md:hidden space-y-3">
      <article v-for="post in posts" :key="post.id" class="admin-post-card">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0 flex-1">
            <p class="font-semibold text-slate-900 leading-snug">{{ post.title }}</p>
            <p class="text-xs text-slate-400 mt-1 truncate">/blog/{{ post.slug }}</p>
          </div>
          <span :class="post.status === 'published' ? 'chip-green' : 'chip-gray'" class="chip capitalize flex-shrink-0">{{ post.status }}</span>
        </div>
        <div class="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-slate-500">
          <span class="capitalize">{{ post.category?.replace('-', ' ') }}</span>
          <span>{{ post.view_count ?? 0 }} views</span>
          <span>{{ fmtDate(post.published_at) }}</span>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-4">
          <button type="button" class="admin-btn-secondary text-sm !py-2.5" @click="openEdit(post)">
            <AdminIcon name="pencil" size="sm" />
            Edit
          </button>
          <button v-if="post.status === 'draft'" type="button" class="admin-btn-primary text-sm !py-2.5" @click="publishPost(post.id)">
            <AdminIcon name="check" size="sm" />
            Publish
          </button>
          <a
            v-else-if="post.status === 'published'"
            :href="`/blog/${post.slug}`"
            target="_blank"
            class="admin-btn-secondary text-sm !py-2.5 text-center"
          >
            <AdminIcon name="eye" size="sm" />
            View live
          </a>
          <button type="button" class="admin-btn-secondary text-sm !py-2.5 text-red-600 border-red-100" @click="deleteTarget = post">
            <AdminIcon name="trash" size="sm" />
            Delete
          </button>
        </div>
      </article>
    </div>

    <!-- Desktop table -->
    <div v-if="posts.length && !loading" class="hidden md:block card overflow-hidden">
      <table class="w-full text-sm">
        <thead>
          <tr>
            <th class="th text-left">Title</th>
            <th class="th text-left">Category</th>
            <th class="th text-left">Status</th>
            <th class="th text-left">Views</th>
            <th class="th text-left">Published</th>
            <th class="th text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          <tr v-for="post in posts" :key="post.id" class="hover:bg-slate-50/80">
            <td class="td">
              <p class="font-medium text-slate-900">{{ post.title }}</p>
              <p class="text-xs text-slate-400 mt-0.5">/blog/{{ post.slug }}</p>
            </td>
            <td class="td capitalize text-slate-500">{{ post.category?.replace('-', ' ') }}</td>
            <td class="td">
              <span :class="post.status === 'published' ? 'chip-green' : 'chip-gray'" class="chip capitalize">{{ post.status }}</span>
            </td>
            <td class="td text-slate-500 tabular-nums">{{ post.view_count ?? 0 }}</td>
            <td class="td text-slate-400">{{ fmtDate(post.published_at) }}</td>
            <td class="td text-right">
              <div class="flex items-center justify-end gap-1">
                <button class="admin-icon-btn !w-8 !h-8" title="Edit" @click="openEdit(post)"><AdminIcon name="pencil" size="sm" /></button>
                <button class="admin-icon-btn !w-8 !h-8" title="Preview" @click="openPreview(post)"><AdminIcon name="eye" size="sm" /></button>
                <button v-if="post.status === 'draft'" class="admin-icon-btn !w-8 !h-8 text-emerald-600" title="Publish" @click="publishPost(post.id)"><AdminIcon name="check" size="sm" /></button>
                <button class="admin-icon-btn !w-8 !h-8 text-red-500" title="Delete" @click="deleteTarget = post"><AdminIcon name="trash" size="sm" /></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="pagination.last_page > 1" class="flex justify-center gap-2">
      <button
        v-for="page in pagination.last_page"
        :key="page"
        class="min-w-[2.25rem] px-3 py-2 rounded-lg text-sm font-medium"
        :class="page === pagination.current_page ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-200 text-slate-600'"
        @click="fetchPosts(page)"
      >
        {{ page }}
      </button>
    </div>

    <button type="button" class="admin-fab" aria-label="New post" @click="openCreate">
      <AdminIcon name="plus" size="lg" class="text-white" />
    </button>

    <AdminBlogEditor
      v-if="modal.open"
      :is-new="modal.isNew"
      :saving="saving"
      :form="form"
      :tags-input="tagsInput"
      :slug-preview="slugPreview"
      :categories="categories"
      @close="closeModal"
      @save="savePost"
      @update:tags-input="tagsInput = $event"
    />

    <!-- Preview -->
    <div v-if="preview.open" class="admin-editor-overlay" @click.self="preview.open = false">
      <header class="admin-editor-header">
        <button type="button" class="admin-icon-btn" @click="preview.open = false"><AdminIcon name="x-mark" /></button>
        <p class="flex-1 text-center text-sm font-semibold text-slate-900 truncate px-2">Preview</p>
        <button type="button" class="admin-btn-secondary !px-3 !py-2 text-xs" @click="openEdit(preview.post); preview.open = false">Edit</button>
      </header>
      <div class="admin-editor-body">
        <p class="text-slate-500 italic mb-4 text-sm">{{ preview.post?.excerpt }}</p>
        <article class="prose prose-sm prose-emerald max-w-none" v-html="previewHtml" />
      </div>
    </div>

    <!-- Delete confirm -->
    <div v-if="deleteTarget" class="fixed inset-0 bg-black/50 z-[70] flex items-end sm:items-center justify-center p-4" @click.self="deleteTarget = null">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl p-6 w-full max-w-sm shadow-xl">
        <h3 class="font-bold text-lg text-slate-900 mb-2">Delete post?</h3>
        <p class="text-slate-500 text-sm mb-6">"{{ deleteTarget.title }}" will be permanently removed.</p>
        <div class="flex gap-3">
          <button class="admin-btn-secondary flex-1 text-sm" @click="deleteTarget = null">Cancel</button>
          <button class="admin-btn-primary flex-1 text-sm !bg-red-600 hover:!bg-red-700" :disabled="saving" @click="deletePost">Delete</button>
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
  if (!form.title.trim() || !form.excerpt.trim() || !form.content.trim()) {
    showToast('Please add a title, summary and article body', 'error')
    return
  }

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
