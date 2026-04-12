<template>
  <div>
    <Header />
    <main>
      <!-- Hero -->
      <section class="relative text-white overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/self-storage.jpg')">
          <div class="absolute inset-0 bg-primary-950/85"></div>
        </div>
        <div class="container-custom relative z-10 py-20 md:py-28">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-primary-500/15 text-primary-300 border border-primary-500/25 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span class="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
              Teesside Self Storage
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Safe, Affordable Self Storage <span class="text-burgundy-light">in Teesside</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8">
              Store your belongings, business stock or equipment at our secure Teesside facility. 24/7 CCTV, easy access and flexible rental periods starting from just one month.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#enquire" class="btn-primary">Check Availability</a>
              <a href="tel:07793251550" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="text-center mb-12">
            <h2 class="heading-lg text-gray-900 mb-4">Why Store With Us?</h2>
            <p class="body-lg max-w-2xl mx-auto">Our Teesside storage site offers everything you need for safe, convenient self storage.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="feature in features" :key="feature.title" class="bg-gray-50 rounded-2xl p-6 flex gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <div v-html="feature.icon" class="w-6 h-6 text-primary-700"></div>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">{{ feature.title }}</h3>
                <p class="text-gray-600 text-sm">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-12">
            <h2 class="heading-lg text-gray-900 mb-4">Storage Unit Sizes</h2>
            <p class="body-lg max-w-xl mx-auto">Choose from a range of container sizes to match exactly what you need to store.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white rounded-2xl shadow-card p-8 text-center">
              <div class="text-5xl font-black text-primary-700 mb-2">10ft</div>
              <p class="text-gray-500 text-sm mb-4">Approx 14 m³ capacity</p>
              <p class="text-gray-600 text-sm mb-6">Great for personal belongings, student storage or small business stock.</p>
              <a href="#enquire" class="btn-primary w-full justify-center">Check Availability</a>
            </div>
            <div class="bg-primary-800 rounded-2xl shadow-card p-8 text-center relative">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</div>
              <div class="text-5xl font-black text-white mb-2">20ft</div>
              <p class="text-primary-300 text-sm mb-4">Approx 28 m³ capacity</p>
              <p class="text-primary-200 text-sm mb-6">The most popular choice — ideal for household contents, business stock and equipment.</p>
              <a href="#enquire" class="bg-white text-primary-800 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all inline-flex items-center justify-center w-full">Check Availability</a>
            </div>
            <div class="bg-white rounded-2xl shadow-card p-8 text-center">
              <div class="text-5xl font-black text-primary-700 mb-2">40ft</div>
              <p class="text-gray-500 text-sm mb-4">Approx 56 m³ capacity</p>
              <p class="text-gray-600 text-sm mb-6">Maximum space for large households, commercial stock or long-term archive storage.</p>
              <a href="#enquire" class="btn-primary w-full justify-center">Check Availability</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Who stores with us -->
      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="heading-lg text-gray-900 mb-6">Who Uses Our Storage?</h2>
              <p class="body-lg mb-8">From individuals decluttering their homes to businesses managing stock and equipment — we cater for everyone.</p>
              <ul class="space-y-3">
                <li v-for="use in storageUses" :key="use" class="flex items-center gap-3 text-gray-700">
                  <svg class="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  {{ use }}
                </li>
              </ul>
            </div>
            <div class="bg-primary-50 rounded-2xl p-8 border border-primary-100 space-y-6">
              <h3 class="heading-sm text-gray-900">Our Location</h3>
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary-700 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div class="font-semibold text-gray-900">Roseberry Containers</div>
                  <div class="text-gray-600">Westerby Rd, Middlesbrough, TS1</div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-primary-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:07793251550" class="text-primary-700 font-semibold hover:underline">07793 251550</a>
              </div>
              <div class="rounded-xl overflow-hidden h-48 bg-gray-200">
                <iframe
                  src="https://maps.google.com/maps?q=Westerby+Road,+Middlesbrough,+TS1&output=embed"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section id="enquire" class="section-padding bg-primary-950 text-white">
        <div class="container-custom text-center">
          <h2 class="heading-lg mb-4">Ready to Reserve Your Unit?</h2>
          <p class="body-lg text-gray-300 mb-8 max-w-xl mx-auto">Get in touch today to check availability and pricing at our Teesside site.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07793251550" class="btn-primary">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 07793 251550
            </a>
            <NuxtLink to="/contact" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
              Send an Enquiry
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Self Storage Teesside | Roseberry Containers',
  meta: [
    { name: 'description', content: 'Secure self storage in Teesside at Roseberry Containers. 24/7 CCTV monitored, flexible rental periods, 10ft, 20ft and 40ft units available. Call today to check availability.' }
  ]
})

const svgLock = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>`
const svgCctv = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8h12a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4a2 2 0 012-2z" /></svg>`
const svgKey = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>`
const svgWeather = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>`
const svgCalendar = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`
const svgPrice = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`

const features = [
  { title: '24/7 CCTV Monitored', description: 'Our site is monitored around the clock with high-definition CCTV cameras for your peace of mind.', icon: svgCctv },
  { title: 'Secure Lock Systems', description: 'Heavy-duty lock boxes fitted to every container. Your lock, your access — nobody else gets in.', icon: svgLock },
  { title: 'Drive-Up Access', description: 'Load and unload directly from your vehicle. No stairs, no lifts — just easy ground-level access.', icon: svgKey },
  { title: 'Wind & Watertight', description: 'All our storage containers are certified wind and watertight, keeping your belongings dry and safe.', icon: svgWeather },
  { title: 'Flexible Rental', description: 'Rent month by month with no long-term contracts. Scale up or down as your needs change.', icon: svgCalendar },
  { title: 'Competitive Pricing', description: 'Transparent pricing with no hidden fees. Call us for a personalised quote based on your requirements.', icon: svgPrice },
]

const storageUses = [
  'Homeowners decluttering or between house moves',
  'Students needing summer storage',
  'Small businesses storing stock and equipment',
  'Tradespeople and contractors',
  'Antique dealers and collectors',
  'Seasonal businesses with fluctuating inventory',
]
</script>
