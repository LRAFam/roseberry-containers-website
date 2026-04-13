#!/usr/bin/env python3
"""Write nationwide.vue, contact.vue, and depot.vue"""
import os

base = '/Users/adamdowning/Documents/GitHub/roseberry-storage-website/pages'
sales_base = os.path.join(base, 'container-sales')

# ============================================================
# nationwide.vue
# ============================================================
nationwide = '''\
<template>
  <div>
    <Header />
    <main>
      <!-- Hero -->
      <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950"></div>
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-1/3 w-72 h-72 bg-burgundy/8 rounded-full blur-3xl pointer-events-none"></div>
        <!-- UK map watermark -->
        <div class="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end pr-8 opacity-[0.06] pointer-events-none hidden lg:flex">
          <svg viewBox="0 0 200 350" class="h-80 w-auto fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 10 L115 30 L130 25 L140 50 L155 55 L150 80 L165 95 L155 115 L145 110 L140 130 L125 140 L130 165 L120 180 L110 175 L105 195 L115 215 L108 235 L95 240 L88 225 L75 230 L70 215 L80 200 L72 185 L60 180 L65 160 L55 145 L65 130 L60 110 L72 100 L68 80 L78 65 L70 45 L85 35 Z"/>
            <path d="M85 250 L95 255 L100 270 L90 280 L82 272 Z" opacity="0.7"/>
            <path d="M108 242 L120 248 L125 262 L115 270 L107 258 Z" opacity="0.6"/>
          </svg>
        </div>
        <div class="container-custom relative z-10 pt-20 md:pt-28 pb-24 md:pb-32">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              8 UK Depots Nationwide
            </div>
            <h1 class="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Nationwide Container Sales &mdash; <span class="hero-gold-text">Find Your Closest Depot</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8">
              With depots strategically located across the UK from Scotland to the South Coast, we can source and deliver your container from the nearest site &mdash; keeping costs down and delivery times fast.
            </p>
            <a href="#depots" class="btn-primary">Find Your Depot</a>
            <div class="grid grid-cols-3 gap-4 max-w-md mt-12 border-t border-amber-500/20 pt-6">
              <div class="text-center">
                <div class="text-3xl font-bold hero-gold-text">8 Depots</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">Across the UK</div>
              </div>
              <div class="text-center border-x border-white/10">
                <div class="text-3xl font-bold hero-gold-text">UK Wide</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">Coverage</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold hero-gold-text">Next Day</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">Delivery Avail.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Depot finder -->
      <section id="depots" class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-12">
            <h2 class="heading-lg text-gray-900 mb-4">Our UK Depots</h2>
            <p class="body-lg max-w-2xl mx-auto">Click your nearest depot for local information, pricing and to enquire about containers in your area.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <NuxtLink
              v-for="depot in depots"
              :key="depot.slug"
              :to="`/container-sales/${depot.slug}`"
              class="bg-white rounded-2xl shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 p-6 group border border-transparent hover:border-amber-400/50"
            >
              <div class="flex items-start justify-between mb-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span v-if="depot.isHQ" class="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">HQ</span>
              </div>
              <h3 class="font-bold text-gray-900 text-lg mb-1">{{ depot.name }}</h3>
              <p class="text-gray-500 text-sm mb-2">{{ depot.region }}</p>
              <p v-if="depot.highlight" class="text-primary-700 text-xs font-medium mb-4">{{ depot.highlight }}</p>
              <span class="text-primary-700 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                View depot
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- UK map coverage -->
      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="heading-lg text-gray-900 mb-6">Container Delivery Across the UK</h2>
              <p class="body-lg mb-6">With 8 strategically placed depots, we can deliver shipping containers to virtually anywhere in mainland UK. Whether you need a 10ft, 20ft or 40ft container &mdash; new or used &mdash; we\'ll source it from the depot closest to you.</p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700"><strong>Lower delivery costs</strong> &mdash; closer depot means shorter haul</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700"><strong>Faster turnaround</strong> &mdash; from order to delivery in days</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700"><strong>Large stock</strong> &mdash; wide range of grades and sizes available</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-700"><strong>One point of contact</strong> &mdash; Roseberry handles everything</span>
                </li>
              </ul>
              <a href="tel:07793251550" class="btn-primary">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call for a Quote
              </a>
            </div>
            <div class="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <h3 class="font-bold text-gray-900 mb-4">Depot Locations</h3>
              <ul class="space-y-3">
                <li v-for="depot in depots" :key="depot.slug" class="flex items-center gap-3">
                  <svg class="w-4 h-4 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  <NuxtLink :to="`/container-sales/${depot.slug}`" class="text-gray-700 hover:text-primary-700 font-medium transition-colors">
                    {{ depot.name }} <span class="text-gray-400 font-normal">&mdash; {{ depot.region }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section-padding bg-primary-950 text-white">
        <div class="container-custom text-center">
          <div class="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <h2 class="heading-lg mb-4">Ready to Order?</h2>
          <p class="body-lg text-gray-300 mb-8 max-w-xl mx-auto">Call us today or send an enquiry and we\'ll connect you with your nearest depot for fast pricing and delivery.</p>
          <div class="border-t border-amber-500/20 pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07793251550" class="btn-primary">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 07793 251550
            </a>
            <NuxtLink to="/contact" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all hover:bg-white/10">
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
  title: 'Nationwide Container Sales | Roseberry Containers',
  meta: [
    { name: 'description', content: 'Buy shipping containers nationwide with Roseberry Containers. 8 UK depots at Felixstowe, Tilbury, Southampton, Birmingham, Liverpool, Leeds, Teesside and Bathgate. Fast delivery, competitive prices.' }
  ]
})

const depots = [
  { slug: 'teesside', name: 'Teesside', region: 'North East England', isHQ: true, highlight: 'HQ &mdash; largest stock & fastest local delivery' },
  { slug: 'felixstowe', name: 'Felixstowe', region: 'Suffolk, East Anglia', isHQ: false, highlight: 'Port depot &mdash; huge range of new stock' },
  { slug: 'tilbury', name: 'Tilbury', region: 'Essex, Thames Estuary', isHQ: false, highlight: 'Port depot &mdash; serves Greater London' },
  { slug: 'southampton', name: 'Southampton', region: 'Hampshire, South Coast', isHQ: false, highlight: 'Port depot &mdash; South Coast coverage' },
  { slug: 'birmingham', name: 'Birmingham', region: 'West Midlands', isHQ: false, highlight: 'Central location &mdash; Midlands hub' },
  { slug: 'liverpool', name: 'Liverpool', region: 'Merseyside, North West', isHQ: false, highlight: 'Port depot &mdash; North West coverage' },
  { slug: 'leeds', name: 'Leeds', region: 'West Yorkshire', isHQ: false, highlight: 'Yorkshire hub &mdash; fast Northern delivery' },
  { slug: 'bathgate', name: 'Bathgate', region: 'West Lothian, Scotland', isHQ: false, highlight: 'Scotland depot &mdash; Edinburgh & Glasgow' },
]
</script>
'''

with open(os.path.join(sales_base, 'nationwide.vue'), 'w') as f:
    f.write(nationwide)
print('nationwide.vue written')

# ============================================================
# contact.vue
# ============================================================
contact = '''\
<template>
  <div>
    <Header />
    <main>
      <!-- Hero -->
      <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950"></div>
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-1/3 w-72 h-72 bg-burgundy/8 rounded-full blur-3xl pointer-events-none"></div>
        <div class="container-custom relative z-10 pt-20 md:pt-28 pb-24 md:pb-32">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              Get In Touch
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Contact <span class="hero-gold-text">Roseberry Containers</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8">
              Based in Teesside, serving the whole UK. Call, email or drop us a line and we will get back to you fast.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="tel:07793251550" class="btn-primary">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a href="#enquire" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
                Send a Message
              </a>
            </div>
            <div class="grid grid-cols-3 gap-4 max-w-md mt-12 border-t border-amber-500/20 pt-6">
              <div class="text-center">
                <div class="text-2xl font-bold hero-gold-text">07793 251550</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">Call Us</div>
              </div>
              <div class="text-center border-x border-white/10">
                <div class="text-2xl font-bold hero-gold-text">Teesside</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">UK Based</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold hero-gold-text">Mon&ndash;Sat</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">8am&ndash;6pm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact cards -->
      <section class="py-16 bg-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Phone -->
            <div class="bg-white rounded-2xl shadow-card p-6 border border-gray-100 hover:shadow-card-lg hover:border-primary-200 transition-all">
              <div class="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-900 text-lg mb-3">Call Us</h3>
              <a href="tel:07793251550" class="block text-primary-700 font-semibold text-lg hover:underline mb-1">07793 251550</a>
              <a href="tel:07873082655" class="block text-primary-700 font-semibold hover:underline mb-3">07873 082655</a>
              <p class="text-gray-500 text-sm">Available Mon&ndash;Sat 8am&ndash;6pm</p>
            </div>
            <!-- Email -->
            <div class="bg-white rounded-2xl shadow-card p-6 border border-gray-100 hover:shadow-card-lg hover:border-primary-200 transition-all">
              <div class="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-900 text-lg mb-3">Email Us</h3>
              <a href="mailto:roseberyselfstorage@hotmail.com" class="block text-primary-700 font-medium hover:underline break-all mb-3">roseberyselfstorage@hotmail.com</a>
              <p class="text-gray-500 text-sm">We reply within 24 hours</p>
            </div>
            <!-- Address -->
            <div class="bg-white rounded-2xl shadow-card p-6 border border-gray-100 hover:shadow-card-lg hover:border-primary-200 transition-all">
              <div class="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-4">
                <svg class="w-7 h-7 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-900 text-lg mb-3">Visit Us</h3>
              <p class="text-gray-700 font-medium mb-1">Roseberry Containers</p>
              <p class="text-gray-600 mb-3">Westerby Rd, Middlesbrough, TS1</p>
              <p class="text-gray-500 text-sm">Mon&ndash;Sat: 8am&ndash;6pm</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick links + map -->
      <section class="py-16 bg-gray-50">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Quick links -->
            <div>
              <h2 class="heading-lg text-gray-900 mb-6">How Can We Help?</h2>
              <p class="body-lg mb-8">We offer a full range of container services &mdash; from straightforward sales to bespoke conversions. Get in touch and we will point you in the right direction.</p>
              <ul class="space-y-4">
                <li v-for="service in services" :key="service.slug" class="bg-white rounded-xl p-4 border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all">
                  <NuxtLink :to="service.href" class="flex items-start gap-3">
                    <div class="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">{{ service.title }}</div>
                      <div class="text-gray-500 text-sm">{{ service.description }}</div>
                    </div>
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <!-- Map -->
            <div>
              <h2 class="heading-lg text-gray-900 mb-6">Find Us</h2>
              <div class="rounded-2xl overflow-hidden h-80 bg-gray-200 shadow-card">
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

      <!-- Contact form -->
      <div id="enquire">
        <ContactSection />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact Us | Roseberry Containers',
  meta: [
    { name: 'description', content: 'Contact Roseberry Containers in Teesside. Call 07793 251550, email roseberyselfstorage@hotmail.com or visit us at Westerby Rd, Middlesbrough. We serve the whole of the UK.' }
  ]
})

const services = [
  { href: '/container-sales', title: 'Container Sales', description: 'Buy 10ft, 20ft and 40ft shipping containers &mdash; new or used.' },
  { href: '/container-hire', title: 'Container Hire', description: 'Flexible short and long-term hire delivered to your site.' },
  { href: '/self-storage', title: 'Self Storage', description: 'Secure, affordable storage units at our Teesside facility.' },
  { href: '/container-conversions', title: 'Container Conversions', description: 'Bespoke conversions into offices, shops, catering units and more.' },
]
</script>
'''

with open(os.path.join(base, 'contact.vue'), 'w') as f:
    f.write(contact)
print('contact.vue written')
