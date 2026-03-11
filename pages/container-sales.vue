<template>
  <div>
    <Header />
    <main>
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white section-padding">
        <div class="container-custom">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">Container Sales</h1>
            <p class="text-xl text-gray-300">
              Looking to purchase a storage container? We offer quality containers for sale at competitive prices.
            </p>
          </div>
        </div>
      </section>

      <!-- Container Types -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">Available Containers</h2>
            <p class="text-xl text-gray-600">Choose from our range of high-quality storage containers</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <!-- 20ft Container -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div class="h-64 bg-gray-300">
                <img 
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop" 
                  alt="20ft Container" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">20ft Container</h3>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Dimensions: 20' x 8' x 8'6"
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Perfect for small businesses
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Weather-resistant steel
                  </li>
                </ul>
                <button @click="openEnquiry('20ft Container')" class="btn-primary w-full text-center block">
                  Enquire Now
                </button>
              </div>
            </div>

            <!-- 40ft Container -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div class="h-64 bg-gray-300">
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop" 
                  alt="40ft Container" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">40ft Container</h3>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Dimensions: 40' x 8' x 8'6"
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Maximum storage capacity
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Secure and durable
                  </li>
                </ul>
                <button @click="openEnquiry('40ft Container')" class="btn-primary w-full text-center block">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Delivery Calculator -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="max-w-3xl mx-auto">
            <DeliveryCalculator />
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center">Why Buy From Us?</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
                  <p class="text-gray-600">All containers are inspected and certified for quality</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                  <p class="text-gray-600">Best prices in the Middlesbrough area</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-2">Delivery Available</h3>
                  <p class="text-gray-600">We can deliver to your location</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-2">Expert Support</h3>
                  <p class="text-gray-600">Friendly team ready to answer your questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="section-padding bg-emerald-600 text-white">
        <div class="container-custom text-center">
          <h2 class="text-4xl font-bold mb-4">Ready to Purchase?</h2>
          <p class="text-xl mb-8 text-emerald-50">Contact us today for a quote or to view our available containers</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07793251550" class="bg-white text-emerald-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg">
              Call Us Now
            </a>
            <NuxtLink to="/contact" class="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Send Enquiry
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
    <Footer />

    <!-- Enquiry Modal -->
    <Teleport to="body">
      <div
        v-if="enquiryOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
        @click.self="enquiryOpen = false"
      >
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
          <button
            @click="enquiryOpen = false"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 class="text-2xl font-bold text-gray-900 mb-1">Container Enquiry</h3>
          <p class="text-gray-500 mb-6 text-sm">Interested in a <strong>{{ enquirySubject }}</strong> — fill in your details and we'll be in touch.</p>

          <form @submit.prevent="submitEnquiry" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input v-model="enquiryForm.name" type="text" required placeholder="Your name"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input v-model="enquiryForm.email" type="email" required placeholder="your@email.com"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input v-model="enquiryForm.phone" type="tel" placeholder="Your phone number"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea v-model="enquiryForm.message" rows="3" placeholder="Any additional details (location, timeframe, condition preference...)"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"></textarea>
            </div>

            <button type="submit" :disabled="enquirySubmitting" class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
              <span v-if="!enquirySubmitting">Send Enquiry</span>
              <span v-else>Sending...</span>
            </button>

            <p v-if="enquiryMessage" :class="enquirySuccess ? 'text-emerald-600' : 'text-red-600'" class="text-sm text-center">
              {{ enquiryMessage }}
            </p>
          </form>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const enquiryOpen = ref(false)
const enquirySubject = ref('')
const enquirySubmitting = ref(false)
const enquiryMessage = ref('')
const enquirySuccess = ref(false)

const enquiryForm = ref({ name: '', email: '', phone: '', message: '' })

const openEnquiry = (subject: string) => {
  enquirySubject.value = subject
  enquiryForm.value = { name: '', email: '', phone: '', message: '' }
  enquiryMessage.value = ''
  enquiryOpen.value = true
}

const submitEnquiry = async () => {
  enquirySubmitting.value = true
  enquiryMessage.value = ''

  try {
    const res = await fetch(`${config.public.apiBase}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: enquiryForm.value.name,
        email: enquiryForm.value.email,
        phone: enquiryForm.value.phone,
        subject: enquirySubject.value,
        message: enquiryForm.value.message || `Interested in purchasing a ${enquirySubject.value}.`,
      }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error ?? 'Submission failed')
    }

    enquirySuccess.value = true
    enquiryMessage.value = "Thanks! We'll be in touch shortly."
    setTimeout(() => { enquiryOpen.value = false }, 2500)
  } catch (err: any) {
    enquirySuccess.value = false
    enquiryMessage.value = err.message ?? 'Something went wrong. Please call us directly.'
  } finally {
    enquirySubmitting.value = false
  }
}
</script>
