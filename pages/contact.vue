<template>
  <div>
    <Header />
    <main>
      <!-- Hero -->
      <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
        <div class="absolute inset-0">
          <img src="/container-20ft.jpg" alt="Contact Roseberry Containers" class="w-full h-full object-cover" loading="lazy" />
          <div class="absolute inset-0 bg-primary-950/92"></div>
        </div>
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div class="container-custom relative z-10 pt-20 md:pt-28 pb-24 md:pb-32">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              Get In Touch · We Respond Fast
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Contact<br><span class="hero-gold-text">Roseberry Containers</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl">
              Based in Teesside, serving the whole UK. Call, email or drop us a line and we will get back to you fast.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:07793251550" class="btn-primary">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 07793 251550
              </a>
              <a href="#enquire" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
                Send a Message
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
            <div class="grid grid-cols-3 gap-4 max-w-md border-t border-amber-500/20 pt-8">
              <div class="text-center">
                <div class="text-2xl font-bold hero-gold-text">07793 251550</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">Call Us</div>
              </div>
              <div class="text-center border-x border-white/10">
                <div class="text-2xl font-bold hero-gold-text">Teesside</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">UK Based</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold hero-gold-text">Mon&ndash;Sat</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">8am&ndash;6pm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact cards -->
      <section class="py-16 bg-primary-950 text-white">
        <div class="container-custom">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <!-- Phone -->
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 group">
              <div class="w-12 h-12 bg-amber-500/10 group-hover:bg-amber-500/20 border border-amber-500/30 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 class="font-bold text-white text-lg mb-3">Call Us</h3>
              <a href="tel:07793251550" class="block text-amber-400 font-bold text-lg hover:text-amber-300 transition-colors mb-1">07793 251550</a>
              <a href="tel:07873082655" class="block text-amber-400/70 font-semibold hover:text-amber-300 transition-colors mb-3">07873 082655</a>
              <p class="text-gray-500 text-sm">Available Mon&ndash;Sat 8am&ndash;6pm</p>
            </div>
            <!-- Email -->
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 group">
              <div class="w-12 h-12 bg-amber-500/10 group-hover:bg-amber-500/20 border border-amber-500/30 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-bold text-white text-lg mb-3">Email Us</h3>
              <a href="mailto:james@roseberrycontainers.com" class="block text-amber-400 font-medium hover:text-amber-300 transition-colors break-all mb-3">james@roseberrycontainers.com</a>
              <p class="text-gray-500 text-sm">We reply within 24 hours</p>
            </div>
            <!-- Address -->
            <div class="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 group">
              <div class="w-12 h-12 bg-amber-500/10 group-hover:bg-amber-500/20 border border-amber-500/30 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="font-bold text-white text-lg mb-3">Visit Us</h3>
              <p class="text-white font-medium mb-1">Roseberry Containers</p>
              <p class="text-gray-400 mb-3">Westerby Rd, Middlesbrough, TS1</p>
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
              <div class="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-4">
                <span class="w-8 h-px bg-amber-500"></span>
                Our Services
              </div>
              <h2 class="heading-lg text-gray-900 mb-5">How Can We Help?</h2>
              <p class="text-lg text-gray-500 mb-8">We offer a full range of container services — from straightforward sales to bespoke conversions. Get in touch and we will point you in the right direction.</p>
              <ul class="space-y-3">
                <li v-for="service in services" :key="service.slug" class="bg-white rounded-xl border border-gray-100 hover:border-amber-200 hover:shadow-sm transition-all">
                  <NuxtLink :to="service.href" class="flex items-start gap-3 p-4">
                    <div class="w-9 h-9 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div class="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-4">
                <span class="w-8 h-px bg-amber-500"></span>
                Location
              </div>
              <h2 class="heading-lg text-gray-900 mb-5">Find Us</h2>
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
    { name: 'description', content: 'Contact Roseberry Containers in Teesside. Call 07793 251550, email james@roseberrycontainers.com or visit us at Westerby Rd, Middlesbrough. We serve the whole of the UK.' },
    { property: 'og:title', content: 'Contact Us | Roseberry Containers' },
    { property: 'og:description', content: 'Get in touch with Roseberry Containers. Call, email or visit us in Middlesbrough. We respond the same day.' },
    { property: 'og:url', content: 'https://www.roseberrycontainers.com/contact' },
    { property: 'og:image', content: 'https://www.roseberrycontainers.com/logo.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_GB' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.roseberrycontainers.com/contact' }
  ]
})

const services = [
  { href: '/container-sales', title: 'Container Sales', description: 'Buy 10ft, 20ft and 40ft shipping containers &mdash; new or used.' },
  { href: '/container-hire', title: 'Container Hire', description: 'Flexible short and long-term hire delivered to your site.' },
  { href: '/self-storage', title: 'Self Storage', description: 'Secure, affordable storage units at our Teesside facility.' },
  { href: '/container-conversions', title: 'Container Conversions', description: 'Bespoke conversions into offices, shops, catering units and more.' },
]
</script>
