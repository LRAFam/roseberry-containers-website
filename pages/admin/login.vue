<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div class="w-full max-w-sm">
      <!-- Logo / title -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-white">Roseberry Admin</h1>
        <p class="text-gray-400 text-sm mt-1">Enter your dashboard password to continue</p>
      </div>

      <!-- Login card -->
      <form @submit.prevent="login" class="bg-gray-800 rounded-2xl p-8 shadow-xl space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-2">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            class="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
            :class="{ 'border-red-500': error }"
            required
          />
          <p v-if="error" class="text-red-400 text-xs mt-2">{{ error }}</p>
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
        >
          {{ isLoading ? 'Signing in…' : 'Sign In' }}
        </button>
      </form>

      <p class="text-center text-gray-600 text-xs mt-6">
        <NuxtLink to="/" class="hover:text-gray-400 transition-colors">← Back to website</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const config = useRuntimeConfig()
const apiBase = config.public.apiBase || 'http://localhost:3001'
const router = useRouter()

const password = ref('')
const error = ref('')
const isLoading = ref(false)

async function login() {
  error.value = ''
  isLoading.value = true

  try {
    const res = await fetch(`${apiBase}/admin/auth`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ password: password.value }),
    })

    const data = await res.json()

    if (!res.ok) {
      error.value = data.error || 'Login failed. Please check your password.'
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
