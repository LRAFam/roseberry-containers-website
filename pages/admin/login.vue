<template>
  <div class="min-h-screen admin-shell flex items-center justify-center px-4 py-12">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/15 ring-1 ring-emerald-500/30 mb-5">
          <img src="/logo-nav.png" alt="Roseberry Containers" class="h-8 w-auto" />
        </div>
        <h1 class="text-2xl font-bold text-slate-900 tracking-tight">Roseberry Admin</h1>
        <p class="text-slate-500 text-sm mt-2 leading-relaxed">Sign in with your client API key and account password</p>
      </div>

      <form @submit.prevent="login" class="admin-card-padded shadow-lg space-y-5">
        <div>
          <label class="admin-label">Client API key</label>
          <input
            v-model="apiKey"
            type="password"
            placeholder="Your client API key"
            class="admin-input"
            :class="{ '!border-red-300 !ring-red-100': error }"
            required
          />
        </div>
        <div>
          <label class="admin-label">Account password</label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            class="admin-input"
            :class="{ '!border-red-300 !ring-red-100': error }"
            required
          />
          <p v-if="error" class="text-red-600 text-xs mt-2">{{ error }}</p>
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="admin-btn-primary w-full py-3"
        >
          {{ isLoading ? 'Signing in…' : 'Sign in' }}
        </button>
      </form>

      <p class="text-center text-slate-400 text-sm mt-6">
        <NuxtLink to="/" class="hover:text-slate-600 transition-colors">← Back to website</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const router = useRouter()

const password = ref('')
const apiKey = ref('')
const error = ref('')
const isLoading = ref(false)

async function login() {
  error.value = ''
  isLoading.value = true

  try {
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ password: password.value, api_key: apiKey.value }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      error.value = data.message || data.error || 'Login failed. Please check your password.'
      return
    }

    await router.push('/admin')
  } catch {
    error.value = 'Could not connect to server. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style src="~/assets/css/admin.css"></style>
