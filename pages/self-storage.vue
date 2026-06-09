<template>
  <div>
    <Header />
    <main>
      <!-- Hero -->
      <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
        <div class="absolute inset-0">
          <img src="/container-20ft.jpg" alt="Secure self storage containers in Teesside" class="w-full h-full object-cover" loading="lazy" />
          <div class="absolute inset-0 bg-primary-950/88"></div>
        </div>
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div class="container-custom relative z-10 pt-20 md:pt-28 pb-24 md:pb-32">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              Teesside Self Storage · Drive-Up Access
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Safe, Affordable<br>Self Storage <span class="hero-gold-text">in Teesside</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl">
              Store your belongings, business stock or equipment at our secure Teesside facility. 24/7 CCTV, easy drive-up access and flexible rental periods from just one month.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#enquire" class="btn-primary">
                Check Availability
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a href="tel:07793251550" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 07793 251550
              </a>
            </div>
            <div class="grid grid-cols-4 gap-4 max-w-md border-t border-amber-500/20 pt-8">
              <div class="text-center">
                <div class="text-2xl font-bold hero-gold-text">24/7</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">CCTV</div>
              </div>
              <div class="text-center border-x border-white/10">
                <div class="text-2xl font-bold hero-gold-text">3</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">Unit Sizes</div>
              </div>
              <div class="text-center border-r border-white/10">
                <div class="text-2xl font-bold hero-gold-text">1 Mo</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">Minimum</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold hero-gold-text">Easy</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="section-padding bg-primary-950 text-white">
        <div class="container-custom">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              <span class="w-8 h-px bg-amber-500"></span>
              Why Store With Us
              <span class="w-8 h-px bg-amber-500"></span>
            </div>
            <h2 class="heading-lg text-white mb-4">Security You Can Rely On</h2>
            <p class="text-gray-400 text-lg max-w-2xl mx-auto">Our Teesside storage site is built around one priority: keeping your belongings completely safe.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div v-for="feature in features" :key="feature.title" class="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 group">
              <div class="w-12 h-12 bg-amber-500/10 group-hover:bg-amber-500/20 border border-amber-500/30 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <div v-html="feature.icon" class="w-6 h-6 text-amber-400"></div>
              </div>
              <h3 class="font-bold text-white text-lg mb-2">{{ feature.title }}</h3>
              <p class="text-gray-400 text-sm leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              <span class="w-8 h-px bg-amber-500"></span>
              Storage Sizes
              <span class="w-8 h-px bg-amber-500"></span>
            </div>
            <h2 class="heading-lg text-gray-900 mb-4">Choose Your Unit Size</h2>
            <p class="text-xl text-gray-500 max-w-xl mx-auto">Three sizes to match exactly what you need — from personal to commercial scale.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div class="bg-white rounded-2xl shadow-card overflow-hidden group hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300">
              <div class="relative h-52 overflow-hidden">
                <img src="/container-10ft.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="10ft storage container" />
                <div class="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="text-4xl font-black text-white">10ft</div>
                  <div class="text-amber-300 text-xs font-semibold mt-0.5">~14 m³ · ~560 ft³</div>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-600 text-sm mb-5">Great for personal belongings, student storage or small business stock. Fits easily in tight spaces.</p>
                <ul class="space-y-1.5 text-gray-600 text-sm mb-5">
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>10' × 8' × 8'6"</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Your lock, your key</li>
                </ul>
                <a href="#enquire" class="btn-primary w-full justify-center text-sm">Check Availability</a>
              </div>
            </div>
            <div class="bg-white rounded-2xl shadow-card overflow-hidden group hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 ring-2 ring-amber-400">
              <div class="relative h-52 overflow-hidden">
                <img src="/container-20ft.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="20ft storage container" />
                <div class="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                <div class="absolute top-3 right-3">
                  <span class="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">Most Popular</span>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="text-4xl font-black text-white">20ft</div>
                  <div class="text-amber-300 text-xs font-semibold mt-0.5">~28 m³ · ~1,360 ft³</div>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-600 text-sm mb-5">The most popular choice — holds a full 3-bedroom home. Ideal for business stock and equipment.</p>
                <ul class="space-y-1.5 text-gray-600 text-sm mb-5">
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>20' × 8' × 8'6"</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Drive-up ground level access</li>
                </ul>
                <a href="#enquire" class="btn-primary w-full justify-center text-sm">Check Availability</a>
              </div>
            </div>
            <div class="bg-white rounded-2xl shadow-card overflow-hidden group hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300">
              <div class="relative h-52 overflow-hidden">
                <img src="/container-40ft.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="40ft storage container" />
                <div class="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="text-4xl font-black text-white">40ft</div>
                  <div class="text-amber-300 text-xs font-semibold mt-0.5">~56 m³ · ~2,720 ft³</div>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-600 text-sm mb-5">Maximum capacity for large households, commercial stock or long-term archive storage.</p>
                <ul class="space-y-1.5 text-gray-600 text-sm mb-5">
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>40' × 8' × 8'6"</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Ideal for business &amp; trade use</li>
                </ul>
                <a href="#enquire" class="btn-primary w-full justify-center text-sm">Check Availability</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How to Get Started -->
      <section class="section-padding bg-primary-950 text-white">
        <div class="container-custom">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              It's Easy
            </div>
            <h2 class="heading-lg text-white mb-4">How to Get Started</h2>
            <p class="body-lg text-gray-400 max-w-xl mx-auto">Renting a storage unit with Roseberry is quick and hassle-free.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div class="text-center">
              <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-5">1</div>
              <h3 class="font-bold text-white text-lg mb-2">Call or Enquire Online</h3>
              <p class="text-gray-400 text-sm">Get in touch to check availability and pricing for the unit size you need. We will answer any questions you have.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-5">2</div>
              <h3 class="font-bold text-white text-lg mb-2">Choose Your Unit Size</h3>
              <p class="text-gray-400 text-sm">We will help you pick the right size &mdash; 10ft, 20ft or 40ft &mdash; based on what you need to store. No wasted space or budget.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-5">3</div>
              <h3 class="font-bold text-white text-lg mb-2">Move In Same Week</h3>
              <p class="text-gray-400 text-sm">Units are typically available within days. Bring your belongings, lock up and you are done &mdash; it is that simple.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Who stores with us -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-4">
                <span class="w-8 h-px bg-amber-500"></span>
                Who We Help
                <span class="w-8 h-px bg-amber-500"></span>
              </div>
              <h2 class="heading-lg text-gray-900 mb-5">Who Uses Our Storage?</h2>
              <p class="text-lg text-gray-500 mb-8">From individuals decluttering their homes to businesses managing stock and equipment &mdash; we cater for everyone.</p>
              <ul class="space-y-3">
                <li v-for="use in storageUses" :key="use" class="flex items-center gap-3 text-gray-700 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm">
                  <svg class="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="font-medium">{{ use }}</span>
                </li>
              </ul>
            </div>
            <div class="bg-primary-950 rounded-2xl p-8 text-white space-y-5">
              <div>
                <div class="inline-flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-widest mb-3">
                  <span class="w-6 h-px bg-amber-500"></span>
                  Our Location
                </div>
                <h3 class="text-xl font-bold mb-1">Roseberry Containers</h3>
                <p class="text-gray-400 text-sm">Westerby Rd, Middlesbrough, TS1</p>
              </div>
              <div class="border-t border-white/10 pt-5 space-y-3">
                <div class="flex items-center gap-3 text-sm text-gray-300">
                  <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mon&ndash;Sat: 8am&ndash;6pm &nbsp;·&nbsp; Sun: By appointment
                </div>
                <div class="flex items-center gap-3">
                  <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:07793251550" class="text-amber-400 font-bold hover:text-amber-300 transition-colors">07793 251550</a>
                </div>
              </div>
              <div class="rounded-xl overflow-hidden h-44 bg-gray-800">
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
              <a href="#enquire" class="btn-primary w-full justify-center text-sm">
                Check Availability
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section id="enquire" class="section-padding bg-primary-950 text-white">
        <div class="container-custom text-center">
          <div class="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <h2 class="heading-lg mb-4">Ready to Reserve Your Unit?</h2>
          <p class="body-lg text-gray-300 mb-8 max-w-xl mx-auto">Get in touch today to check availability and pricing at our Teesside site.</p>
          <div class="border-t border-amber-500/20 pt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
    { name: 'description', content: 'Secure self storage in Teesside at Roseberry Containers. 24/7 CCTV monitored, flexible rental periods, 10ft, 20ft and 40ft units available. Call today to check availability.' },
    { property: 'og:title', content: 'Self Storage Teesside | Roseberry Containers' },
    { property: 'og:description', content: 'Secure self storage in Teesside. 24/7 CCTV monitored, flexible rentals, drive-up access. 10ft, 20ft and 40ft units available.' },
    { property: 'og:url', content: 'https://roseberrycontainers.com/self-storage' },
    { property: 'og:image', content: 'https://roseberrycontainers.com/logo.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_GB' },
  ],
  link: [
    { rel: 'canonical', href: 'https://roseberrycontainers.com/self-storage' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Self Storage Teesside',
        description: 'Secure container self storage in Middlesbrough, Teesside. 24/7 CCTV, flexible month-by-month rentals, drive-up access.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Roseberry Containers',
          url: 'https://roseberrycontainers.com',
          telephone: '+447793251550',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Westerby Rd',
            addressLocality: 'Middlesbrough',
            addressRegion: 'Teesside',
            addressCountry: 'GB',
          },
        },
        areaServed: { '@type': 'Place', name: 'Teesside, Middlesbrough' },
        url: 'https://roseberrycontainers.com/self-storage',
        serviceType: 'Self Storage',
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What sizes of storage units do you offer?',
            acceptedAnswer: { '@type': 'Answer', text: 'We offer 10ft, 20ft and 40ft shipping container storage units at our Teesside facility, suitable for personal and business use.' }
          },
          {
            '@type': 'Question',
            name: 'Is the self storage site secure?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our site is monitored 24/7 with HD CCTV cameras. Every container has a heavy-duty lock box — your lock, your key, your access only.' }
          },
          {
            '@type': 'Question',
            name: 'How long are rental periods?',
            acceptedAnswer: { '@type': 'Answer', text: 'We offer flexible month-by-month rentals with no long-term contracts. You can scale up or down as your needs change.' }
          },
          {
            '@type': 'Question',
            name: 'Where is your self storage facility?',
            acceptedAnswer: { '@type': 'Answer', text: 'Our self storage facility is located in Middlesbrough, Teesside. Call us on 07793 251550 for the full address and availability.' }
          },
          {
            '@type': 'Question',
            name: 'Do I need to provide my own lock?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes — you provide your own padlock for the lock box, meaning only you have access to your unit.' }
          },
        ]
      })
    }
  ]
})

const svgLock = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>'
const svgCctv = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8h12a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4a2 2 0 012-2z" /></svg>'
const svgKey = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>'
const svgWeather = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>'
const svgCalendar = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
const svgPrice = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'

const features = [
  { title: '24/7 CCTV', description: 'Our site is monitored around the clock with high-definition CCTV cameras for your peace of mind.', icon: svgCctv },
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
