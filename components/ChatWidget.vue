<template>
  <div>
    <!-- Floating toggle button -->
    <button
      @click="openChat"
      :aria-label="isOpen ? 'Close chat with James' : 'Chat with James'"
      class="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden border-2 border-white"
      :class="isOpen ? 'bg-gray-700' : 'bg-emerald-600 hover:bg-emerald-700'"
    >
      <!-- Unread badge -->
      <span
        v-if="unreadCount > 0 && !isOpen"
        class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center z-10"
      >{{ unreadCount > 9 ? '9+' : unreadCount }}</span>

      <!-- Pulse ring when there's an unread message -->
      <span
        v-if="unreadCount > 0 && !isOpen"
        class="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30"
      />

      <Transition mode="out-in" enter-active-class="transition-all duration-150" enter-from-class="opacity-0 rotate-90 scale-75" enter-to-class="opacity-100 rotate-0 scale-100" leave-active-class="transition-all duration-150" leave-from-class="opacity-100 rotate-0 scale-100" leave-to-class="opacity-0 -rotate-90 scale-75">
        <img v-if="!isOpen" src="/logo.jpg" alt="James — Roseberry Assistant" class="w-10 h-10 object-contain" />
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Transition>
    </button>

    <!-- Chat panel -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-6 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-6 scale-95"
    >
      <div
        v-if="isOpen"
        class="fixed bottom-28 right-4 sm:right-6 z-50 flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
        style="width: min(420px, calc(100vw - 2rem)); height: min(620px, calc(100vh - 9rem));"
      >
        <!-- ── Header ── -->
        <div class="bg-emerald-600 px-4 py-3 flex items-center gap-3 flex-shrink-0">
          <div class="relative flex-shrink-0">
            <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm">
              <img src="/logo.jpg" alt="James" class="w-8 h-8 object-contain" />
            </div>
            <!-- Online dot -->
            <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-emerald-600 rounded-full" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-white font-semibold text-sm leading-tight">James 👑 <span class="font-normal text-emerald-100 text-xs">The Container King</span></p>
            <p class="text-emerald-100 text-xs">
              <span class="inline-flex items-center gap-1">
                <span class="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                Roseberry Containers · Online
              </span>
            </p>
          </div>
          <div class="flex items-center gap-1">
            <button
              @click="clearChat"
              title="Clear conversation"
              class="w-8 h-8 rounded-full text-white/70 hover:text-white hover:bg-white/15 flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
            <button
              @click="isOpen = false"
              class="w-8 h-8 rounded-full text-white/70 hover:text-white hover:bg-white/15 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- ── Messages ── -->
        <div ref="messagesEl" class="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50 scroll-smooth">

          <!-- Date separator (show once at top) -->
          <div class="flex items-center gap-3 mb-2">
            <div class="flex-1 h-px bg-gray-200" />
            <span class="text-xs text-gray-400 whitespace-nowrap">Today</span>
            <div class="flex-1 h-px bg-gray-200" />
          </div>

          <div
            v-for="(msg, i) in messages"
            :key="i"
            :class="msg.role === 'user' ? 'flex justify-end' : 'flex justify-start items-end gap-2'"
            class="msg-enter"
          >
            <!-- James avatar beside message -->
            <div v-if="msg.role === 'assistant'" class="flex-shrink-0 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden shadow-sm mb-0.5">
              <img src="/logo.jpg" alt="James" class="w-5 h-5 object-contain" />
            </div>

            <div :class="msg.role === 'user' ? 'items-end' : 'items-start'" class="flex flex-col gap-1 max-w-[78%]">
              <!-- Name label on first assistant message in a run -->
              <span
                v-if="msg.role === 'assistant' && (i === 0 || messages[i-1]?.role !== 'assistant')"
                class="text-xs font-medium text-gray-500 ml-1"
              >James</span>

              <div
                :class="[
                  'px-3.5 py-2.5 text-sm leading-relaxed break-words',
                  msg.role === 'user'
                    ? 'bg-emerald-600 text-white rounded-2xl rounded-br-md'
                    : 'bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm border border-gray-100'
                ]"
                v-html="formatMessage(msg.text)"
              />

              <span class="text-[10px] text-gray-400 px-1">{{ msg.time }}</span>
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="isLoading" class="flex justify-start items-end gap-2">
            <div class="flex-shrink-0 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
              <img src="/logo.jpg" alt="James" class="w-5 h-5 object-contain" />
            </div>
            <div class="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-gray-100">
              <div class="flex gap-1.5 items-center">
                <span class="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style="animation-delay: 0ms" />
                <span class="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style="animation-delay: 160ms" />
                <span class="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style="animation-delay: 320ms" />
              </div>
            </div>
            <span class="text-xs text-gray-400 self-end mb-1">James is typing…</span>
          </div>
        </div>

        <!-- ── Quick replies ── -->
        <div v-if="showQuickReplies" class="px-4 pt-3 pb-1 flex gap-2 flex-wrap bg-gray-50 border-t border-gray-100 flex-shrink-0">
          <button
            v-for="chip in quickReplies"
            :key="chip"
            @click="sendQuick(chip)"
            class="text-xs bg-white border border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-500 px-3 py-1.5 rounded-full transition-colors font-medium whitespace-nowrap"
          >
            {{ chip }}
          </button>
        </div>

        <!-- ── Error banner ── -->
        <div v-if="error" class="flex items-center justify-between gap-2 px-4 py-2 bg-red-50 border-t border-red-100 flex-shrink-0">
          <p class="text-red-600 text-xs flex-1">{{ error }}</p>
          <button @click="retryLast" class="text-xs font-semibold text-red-600 hover:text-red-800 underline flex-shrink-0">Retry</button>
        </div>

        <!-- ── Input ── -->
        <form @submit.prevent="send" class="px-3 py-3 border-t border-gray-100 bg-white flex items-end gap-2 flex-shrink-0">
          <textarea
            ref="inputEl"
            v-model="input"
            placeholder="Message James…"
            :disabled="isLoading"
            rows="1"
            class="flex-1 text-sm border border-gray-200 rounded-2xl px-4 py-2.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 disabled:opacity-50 resize-none overflow-hidden transition-colors leading-relaxed"
            style="max-height: 120px;"
            @keydown.enter.exact.prevent="send"
            @keydown.enter.shift.exact="() => {}"
            @input="autoResize"
          />
          <button
            type="submit"
            :disabled="isLoading || !input.trim()"
            class="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-35 flex items-center justify-center transition-all duration-150 active:scale-90 flex-shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </form>

        <!-- Footer branding -->
        <p class="text-center text-[10px] text-gray-300 pb-2 bg-white flex-shrink-0">
          Powered by Roseberry Containers AI
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue'

const config = useRuntimeConfig()
const apiBase = config.public.apiBase || 'http://localhost:3001'

interface Message {
  role: 'user' | 'assistant'
  text: string
  time: string
}

const STORAGE_MESSAGES_KEY = 'rc_chat_messages'
const STORAGE_SESSION_KEY = 'rc_chat_session'

const isOpen = ref(false)
const isLoading = ref(false)
const error = ref('')
const input = ref('')
const unreadCount = ref(0)
const showQuickReplies = ref(true)
const messagesEl = ref<HTMLElement | null>(null)
const inputEl = ref<HTMLTextAreaElement | null>(null)
const sessionId = ref<string | null>(null)
const lastUserMessage = ref('')

const quickReplies = [
  '📦 Container prices?',
  '🚚 Delivery cost?',
  '📏 What sizes available?',
  '📞 How do I order?',
]

const defaultMessage: Message = {
  role: 'assistant',
  text: "Hi there! 👋 I'm **James**, the Container King at Roseberry Containers. I can help you with pricing, delivery quotes, container sizes, and anything else you need. What can I help you with today?",
  time: formatTime(new Date()),
}

const messages = ref<Message[]>([defaultMessage])

function formatTime(date: Date): string {
  return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
}

/** Convert basic markdown-like formatting to safe HTML */
function formatMessage(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const lines = escaped.split('\n')
  const result: string[] = []
  let inUl = false
  let inOl = false

  for (const raw of lines) {
    const line = raw
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 rounded text-xs font-mono">$1</code>')

    const ulMatch = line.match(/^[-•]\s+(.+)/)
    const olMatch = line.match(/^\d+\.\s+(.+)/)

    if (ulMatch) {
      if (!inUl) { if (inOl) { result.push('</ol>'); inOl = false } result.push('<ul class="list-disc pl-4 space-y-0.5 my-1">'); inUl = true }
      result.push(`<li>${ulMatch[1]}</li>`)
    } else if (olMatch) {
      if (!inOl) { if (inUl) { result.push('</ul>'); inUl = false } result.push('<ol class="list-decimal pl-4 space-y-0.5 my-1">'); inOl = true }
      result.push(`<li>${olMatch[1]}</li>`)
    } else {
      if (inUl) { result.push('</ul>'); inUl = false }
      if (inOl) { result.push('</ol>'); inOl = false }
      result.push(line === '' ? '<br />' : `<p class="mb-0.5">${line}</p>`)
    }
  }
  if (inUl) result.push('</ul>')
  if (inOl) result.push('</ol>')
  return result.join('')
}

function autoResize(event: Event) {
  const el = event.target as HTMLTextAreaElement
  el.style.height = 'auto'
  el.style.height = `${Math.min(el.scrollHeight, 120)}px`
}

function resetInputHeight() {
  if (inputEl.value) {
    inputEl.value.style.height = 'auto'
  }
}

async function scrollToBottom(smooth = true) {
  await nextTick()
  if (messagesEl.value) {
    messagesEl.value.scrollTo({ top: messagesEl.value.scrollHeight, behavior: smooth ? 'smooth' : 'auto' })
  }
}

function openChat() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    unreadCount.value = 0
    nextTick(() => {
      inputEl.value?.focus()
      scrollToBottom(false)
    })
  }
}

function clearChat() {
  messages.value = [defaultMessage]
  sessionId.value = null
  showQuickReplies.value = true
  error.value = ''
  localStorage.removeItem(STORAGE_MESSAGES_KEY)
  localStorage.removeItem(STORAGE_SESSION_KEY)
}

function sendQuick(text: string) {
  input.value = text
  send()
}

async function send() {
  const text = input.value.trim()
  if (!text || isLoading.value) return

  lastUserMessage.value = text
  input.value = ''
  error.value = ''
  showQuickReplies.value = false
  resetInputHeight()

  messages.value.push({ role: 'user', text, time: formatTime(new Date()) })
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
      localStorage.setItem(STORAGE_SESSION_KEY, data.sessionId)
    }

    const reply: Message = { role: 'assistant', text: data.reply, time: formatTime(new Date()) }
    messages.value.push(reply)

    if (!isOpen.value) unreadCount.value++

    persistMessages()
  } catch (err: any) {
    error.value = err.message?.includes('fetch') ? 'Could not reach James. Check your connection.' : (err.message || 'Something went wrong.')
  } finally {
    isLoading.value = false
    await scrollToBottom()
  }
}

async function retryLast() {
  error.value = ''
  input.value = lastUserMessage.value
  await send()
}

function persistMessages() {
  try {
    // Only persist last 50 messages to avoid localStorage bloat
    const toSave = messages.value.slice(-50)
    localStorage.setItem(STORAGE_MESSAGES_KEY, JSON.stringify(toSave))
  } catch { /* quota exceeded — silently skip */ }
}

onMounted(() => {
  sessionId.value = localStorage.getItem(STORAGE_SESSION_KEY)

  try {
    const saved = localStorage.getItem(STORAGE_MESSAGES_KEY)
    if (saved) {
      const parsed: Message[] = JSON.parse(saved)
      if (parsed.length > 0) {
        messages.value = parsed
        showQuickReplies.value = false
      }
    }
  } catch { /* ignore corrupt storage */ }

  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen.value) isOpen.value = false }
  window.addEventListener('keydown', onKey)
  onUnmounted(() => window.removeEventListener('keydown', onKey))
})
</script>

<style scoped>
.msg-enter {
  animation: msgIn 0.2s ease-out both;
}

@keyframes msgIn {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
