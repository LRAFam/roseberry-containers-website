<template>
  <div>
    <!-- Floating toggle button -->
    <button
      @click="isOpen = !isOpen"
      class="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center justify-center transition-all duration-200"
      :aria-label="isOpen ? 'Close chat' : 'Open chat'"
    >
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 10h.01M12 10h.01M16 10h.01M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Chat panel -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-if="isOpen"
        class="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
        style="max-height: 70vh;"
      >
        <!-- Header -->
        <div class="bg-emerald-600 px-4 py-3 flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
            </svg>
          </div>
          <div>
            <p class="text-white font-semibold text-sm leading-tight">Roseberry Assistant</p>
            <p class="text-emerald-100 text-xs">Ask me anything about containers</p>
          </div>
        </div>

        <!-- Messages -->
        <div ref="messagesEl" class="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
          <div
            v-for="(msg, i) in messages"
            :key="i"
            :class="msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'"
          >
            <div
              :class="[
                'max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed',
                msg.role === 'user'
                  ? 'bg-emerald-600 text-white rounded-br-sm'
                  : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100'
              ]"
            >
              {{ msg.text }}
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="isLoading" class="flex justify-start">
            <div class="bg-white rounded-2xl rounded-bl-sm px-4 py-2 shadow-sm border border-gray-100">
              <div class="flex gap-1 items-center h-4">
                <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms" />
                <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms" />
                <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms" />
              </div>
            </div>
          </div>
        </div>

        <!-- Error -->
        <p v-if="error" class="text-red-600 text-xs px-4 py-1 bg-red-50">{{ error }}</p>

        <!-- Input -->
        <form @submit.prevent="send" class="p-3 border-t border-gray-100 bg-white flex gap-2">
          <input
            v-model="input"
            type="text"
            placeholder="Type a message…"
            :disabled="isLoading"
            class="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 outline-none focus:border-emerald-500 disabled:opacity-50"
            @keydown.enter.prevent="send"
          />
          <button
            type="submit"
            :disabled="isLoading || !input.trim()"
            class="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 flex items-center justify-center transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </form>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted } from 'vue'

const config = useRuntimeConfig()
const apiBase = config.public.apiBase || 'http://localhost:3001'

interface Message {
  role: 'user' | 'assistant'
  text: string
}

const isOpen = ref(false)
const isLoading = ref(false)
const error = ref('')
const input = ref('')
const messages = ref<Message[]>([
  {
    role: 'assistant',
    text: "Hi! I'm the Roseberry Assistant 👋 Ask me about containers, pricing, delivery, or anything else — I'm here to help!",
  },
])
const messagesEl = ref<HTMLElement | null>(null)
const sessionId = ref<string | null>(null)

onMounted(() => {
  sessionId.value = localStorage.getItem('rc_chat_session')
})

async function scrollToBottom() {
  await nextTick()
  if (messagesEl.value) {
    messagesEl.value.scrollTop = messagesEl.value.scrollHeight
  }
}

async function send() {
  const text = input.value.trim()
  if (!text || isLoading.value) return

  input.value = ''
  error.value = ''
  messages.value.push({ role: 'user', text })
  isLoading.value = true
  await scrollToBottom()

  try {
    const res = await fetch(`${apiBase}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text, sessionId: sessionId.value }),
    })

    const data = await res.json()

    if (!res.ok) throw new Error(data.error || 'Something went wrong')

    if (data.sessionId) {
      sessionId.value = data.sessionId
      localStorage.setItem('rc_chat_session', data.sessionId)
    }

    messages.value.push({ role: 'assistant', text: data.reply })
  } catch (err: any) {
    error.value = err.message || 'Could not reach the assistant. Please try again.'
  } finally {
    isLoading.value = false
    await scrollToBottom()
  }
}
</script>
