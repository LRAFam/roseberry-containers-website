<template>
  <!-- Full-screen editor — optimised for mobile -->
  <div class="admin-editor-overlay">
    <header class="admin-editor-header">
      <button type="button" class="admin-icon-btn" aria-label="Close" @click="$emit('close')">
        <AdminIcon name="x-mark" />
      </button>
      <div class="min-w-0 flex-1 text-center px-2">
        <p class="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{{ isNew ? 'New post' : 'Edit post' }}</p>
        <p class="text-sm font-semibold text-slate-900 truncate">{{ form.title || 'Untitled' }}</p>
      </div>
      <button
        type="button"
        class="admin-btn-primary !px-3 !py-2 text-xs"
        :disabled="saving"
        @click="$emit('save')"
      >
        {{ saving ? 'Saving…' : 'Save' }}
      </button>
    </header>

    <!-- Step navigation -->
    <div class="admin-editor-steps" role="tablist">
      <button
        v-for="step in steps"
        :key="step.id"
        type="button"
        role="tab"
        class="admin-editor-step"
        :class="{ 'admin-editor-step-active': activeStep === step.id }"
        :aria-selected="activeStep === step.id"
        @click="activeStep = step.id"
      >
        {{ step.label }}
      </button>
    </div>

    <div class="admin-editor-body">
      <!-- Step 1: Content -->
      <div v-show="activeStep === 'content'" class="space-y-4">
        <div>
          <label class="admin-label">Post title *</label>
          <input
            v-model="form.title"
            type="text"
            class="admin-input admin-input-lg"
            placeholder="e.g. How to choose a shipping container"
          />
        </div>
        <div>
          <label class="admin-label">Summary *</label>
          <p class="text-xs text-slate-500 mb-2">A short intro shown on the blog listing and search results.</p>
          <textarea
            v-model="form.excerpt"
            rows="3"
            class="admin-input resize-none"
            placeholder="Brief summary of the article…"
          />
        </div>
        <div>
          <label class="admin-label">Article body *</label>
          <p class="text-xs text-slate-500 mb-2">Write normally — blank lines create new paragraphs. Use **bold** for emphasis.</p>
          <textarea
            v-model="form.content"
            rows="12"
            class="admin-input min-h-[280px] leading-relaxed"
            placeholder="Start writing your article here…"
          />
        </div>
      </div>

      <!-- Step 2: Details -->
      <div v-show="activeStep === 'details'" class="space-y-4">
        <div>
          <label class="admin-label">Category</label>
          <select v-model="form.category" class="admin-input admin-input-lg">
            <option v-for="c in categories" :key="c.value" :value="c.value">{{ c.label }}</option>
          </select>
        </div>
        <div>
          <label class="admin-label">Status</label>
          <div class="grid grid-cols-2 gap-2">
            <button
              type="button"
              class="admin-choice-btn"
              :class="{ 'admin-choice-btn-active': form.status === 'draft' }"
              @click="form.status = 'draft'"
            >
              Draft
            </button>
            <button
              type="button"
              class="admin-choice-btn"
              :class="{ 'admin-choice-btn-active': form.status === 'published' }"
              @click="form.status = 'published'"
            >
              Published
            </button>
          </div>
        </div>
        <div>
          <label class="admin-label">Featured image</label>
          <p class="text-xs text-slate-500 mb-2">Paste an image path from your site, e.g. /container-20ft.jpg</p>
          <input v-model="form.featured_image" type="text" class="admin-input" placeholder="/container-20ft.jpg" />
        </div>
        <div>
          <label class="admin-label">Tags</label>
          <input
            :value="tagsInput"
            type="text"
            class="admin-input"
            placeholder="containers, delivery, teesside"
            @input="$emit('update:tagsInput', ($event.target as HTMLInputElement).value)"
          />
        </div>
        <div>
          <label class="admin-label">URL slug</label>
          <p class="text-xs text-slate-500 mb-2">Leave blank to generate from the title.</p>
          <input v-model="form.slug" type="text" class="admin-input font-mono text-sm" placeholder="auto-generated" />
          <p class="text-xs text-slate-400 mt-1.5">roseberrycontainers.com/blog/{{ slugPreview }}</p>
        </div>
      </div>

      <!-- Step 3: SEO -->
      <div v-show="activeStep === 'seo'" class="space-y-4">
        <div class="admin-callout">
          <p class="text-sm text-slate-600">Optional — Google uses these when showing your post in search. Leave blank to use the title and summary.</p>
        </div>
        <div>
          <label class="admin-label">SEO title</label>
          <input v-model="form.seo_title" type="text" maxlength="200" class="admin-input" placeholder="Defaults to post title" />
          <p class="text-xs text-slate-400 mt-1">{{ (form.seo_title || form.title).length }}/200 characters</p>
        </div>
        <div>
          <label class="admin-label">SEO description</label>
          <textarea
            v-model="form.seo_description"
            rows="3"
            maxlength="500"
            class="admin-input resize-none"
            placeholder="Defaults to summary"
          />
          <p class="text-xs text-slate-400 mt-1">{{ (form.seo_description || form.excerpt).length }}/500 characters</p>
        </div>
      </div>
    </div>

    <footer class="admin-editor-footer">
      <button
        v-if="stepIndex > 0"
        type="button"
        class="admin-btn-secondary flex-1"
        @click="prevStep"
      >
        <AdminIcon name="chevron-left" size="sm" />
        Back
      </button>
      <button
        v-if="stepIndex < steps.length - 1"
        type="button"
        class="admin-btn-primary flex-1"
        @click="nextStep"
      >
        Continue
        <AdminIcon name="chevron-right" size="sm" />
      </button>
      <button
        v-else
        type="button"
        class="admin-btn-primary flex-1"
        :disabled="saving"
        @click="$emit('save')"
      >
        <AdminIcon name="check" size="sm" />
        {{ saving ? 'Saving…' : isNew ? 'Create post' : 'Save changes' }}
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isNew: boolean
  saving: boolean
  form: {
    title: string
    slug: string
    excerpt: string
    content: string
    category: string
    status: string
    seo_title: string
    seo_description: string
    featured_image: string
  }
  tagsInput: string
  slugPreview: string
  categories: { value: string; label: string }[]
}>()

defineEmits<{
  close: []
  save: []
  'update:tagsInput': [value: string]
}>()

const steps = [
  { id: 'content', label: 'Write' },
  { id: 'details', label: 'Details' },
  { id: 'seo', label: 'SEO' },
] as const

type StepId = typeof steps[number]['id']

const activeStep = ref<StepId>('content')
const stepIndex = computed(() => steps.findIndex((s) => s.id === activeStep.value))

function nextStep() {
  const idx = stepIndex.value
  if (idx < steps.length - 1) activeStep.value = steps[idx + 1].id
}

function prevStep() {
  const idx = stepIndex.value
  if (idx > 0) activeStep.value = steps[idx - 1].id
}

watch(() => props.isNew, () => {
  activeStep.value = 'content'
})
</script>
