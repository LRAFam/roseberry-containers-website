<template>
  <section id="contact" class="section-padding bg-white">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info & Map -->
        <div class="space-y-8">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p class="text-lg text-gray-600">
              Have questions? We're here to help. Reach out to us using any of the methods below.
            </p>
          </div>

          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Address</h3>
                <p class="text-gray-600">Waverley Rd, Middlesbrough, TS1, UK</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Phone</h3>
                <a href="tel:07793251550" class="text-gray-600 hover:text-emerald-600 transition-colors block">07793 251550</a>
                <a href="tel:07873082655" class="text-gray-600 hover:text-emerald-600 transition-colors block">07873 082655</a>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:roseberyselfstorage@hotmail.com" class="text-gray-600 hover:text-emerald-600 transition-colors">
                  roseberyselfstorage@hotmail.com
                </a>
              </div>
            </div>
          </div>

          <!-- Map Placeholder -->
          <div class="rounded-2xl overflow-hidden shadow-lg h-64 bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2296.7436584845744!2d-1.2384567!3d54.5742386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e9c4c8c8c8c8d%3A0x0!2sWaverley%20Rd%2C%20Middlesbrough!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-50 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="form.phone"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea 
                id="message" 
                v-model="form.message"
                required
                rows="4"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
            </button>

            <p v-if="submitMessage" :class="submitSuccess ? 'text-emerald-600' : 'text-red-600'" class="text-sm text-center">
              {{ submitMessage }}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const res = await fetch(`${useRuntimeConfig().public.apiBase}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error ?? 'Submission failed')
    }

    submitSuccess.value = true
    submitMessage.value = "Thank you! We'll get back to you soon."

    form.value = { name: '', email: '', phone: '', subject: '', message: '' }

    setTimeout(() => { submitMessage.value = '' }, 5000)
  } catch (error: any) {
    submitSuccess.value = false
    submitMessage.value = error.message ?? 'Something went wrong. Please try again or call us directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
