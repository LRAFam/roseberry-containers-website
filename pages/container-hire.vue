<template>
  <div>
    <Header />
    <main>
      <!-- Hero -->
      <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/hire-containers.jpg')">
          <div class="absolute inset-0 bg-primary-950/85"></div>
        </div>
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-1/3 w-72 h-72 bg-burgundy/8 rounded-full blur-3xl pointer-events-none"></div>
        <div class="container-custom relative z-10 pt-20 md:pt-28 pb-24 md:pb-32">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              Flexible Container Hire
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Container Hire <span class="hero-gold-text">Delivered to Your Site</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8">
              We hire shipping containers directly to construction sites, businesses, events and residential customers across the UK. Flexible short and long-term hire periods available.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#enquire" class="btn-primary">Get a Hire Quote</a>
              <a href="tel:07793251550" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
            </div>
            <div class="grid grid-cols-3 gap-4 max-w-sm mt-12 border-t border-amber-500/20 pt-6">
              <div class="text-center">
                <div class="text-3xl font-bold hero-gold-text">Same Day</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">Delivery Avail.</div>
              </div>
              <div class="text-center border-x border-white/10">
                <div class="text-3xl font-bold hero-gold-text">Flexible</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">Hire Periods</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold hero-gold-text">All Sizes</div>
                <div class="text-xs text-amber-300/70 mt-0.5 uppercase tracking-wide">10 / 20 / 40ft</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why hire -->
      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="text-center mb-12">
            <h2 class="heading-lg text-gray-900 mb-4">Why Hire with Roseberry?</h2>
            <p class="body-lg max-w-2xl mx-auto">Fast, reliable container hire with delivery and collection included. No hidden costs.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-900 text-lg mb-2">Delivery &amp; Collection</h3>
              <p class="text-gray-600">We deliver and collect from your site — no need for specialist transport.</p>
            </div>
            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-900 text-lg mb-2">Flexible Periods</h3>
              <p class="text-gray-600">Hire by the week or month — scale up or extend as your project demands.</p>
            </div>
            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="font-bold text-gray-900 text-lg mb-2">Secure &amp; Weatherproof</h3>
              <p class="text-gray-600">All hire containers are wind and watertight with secure locking bars.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sizes available -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-12">
            <h2 class="heading-lg text-gray-900 mb-4">Container Hire Sizes</h2>
            <p class="body-lg max-w-xl mx-auto">Available in the most popular standard sizes for every application.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-lg transition-all text-center">
              <img src="/container-10ft.jpg" class="w-full h-40 object-cover" alt="10ft container">
              <div class="p-8">
                <div class="text-5xl font-black text-primary-700 mb-2">10ft</div>
                <div class="text-gray-500 text-sm mb-4">3.0m × 2.4m × 2.6m</div>
                <h3 class="font-bold text-gray-900 mb-3">Compact Storage</h3>
                <p class="text-gray-600 text-sm mb-6">Ideal for garden storage, small tools and equipment on compact sites.</p>
                <a href="#enquire" class="btn-primary w-full justify-center">Enquire</a>
              </div>
            </div>
            <div class="bg-primary-800 rounded-2xl shadow-card overflow-hidden hover:shadow-card-lg transition-all text-center relative">
              <div class="absolute top-2 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">Most Popular</div>
              <img src="/container-20ft.jpg" class="w-full h-40 object-cover" alt="20ft container">
              <div class="p-8">
                <div class="text-5xl font-black text-white mb-2">20ft</div>
                <div class="text-burgundy-light text-sm mb-4">6.1m × 2.4m × 2.6m</div>
                <h3 class="font-bold text-white mb-3">Standard Storage</h3>
                <p class="text-primary-200 text-sm mb-6">The go-to hire size — perfect for construction sites, events and business use.</p>
                <a href="#enquire" class="bg-white text-primary-800 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all inline-flex items-center justify-center w-full">Enquire</a>
              </div>
            </div>
            <div class="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-lg transition-all text-center">
              <img src="/container-40ft.jpg" class="w-full h-40 object-cover" alt="40ft container">
              <div class="p-8">
                <div class="text-5xl font-black text-primary-700 mb-2">40ft</div>
                <div class="text-gray-500 text-sm mb-4">12.2m × 2.4m × 2.6m</div>
                <h3 class="font-bold text-gray-900 mb-3">Large Storage</h3>
                <p class="text-gray-600 text-sm mb-6">Maximum capacity for large commercial projects, warehousing overflow and bulk storage.</p>
                <a href="#enquire" class="btn-primary w-full justify-center">Enquire</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works -->
      <section class="section-padding bg-gray-900 text-white">
        <div class="container-custom">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              Simple Process
            </div>
            <h2 class="heading-lg text-white mb-4">How It Works</h2>
            <p class="body-lg text-gray-400 max-w-xl mx-auto">Hiring a container from Roseberry is straightforward. Here's what to expect.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-amber-500/40 transition-all">
              <div class="w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-2xl mb-5">1</div>
              <h3 class="font-bold text-white text-lg mb-2">Get a Quote</h3>
              <p class="text-gray-400 text-sm">Call or message us with your size, location and hire period. We'll give you a fast, no-obligation price.</p>
            </div>
            <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-amber-500/40 transition-all">
              <div class="w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-2xl mb-5">2</div>
              <h3 class="font-bold text-white text-lg mb-2">We Deliver</h3>
              <p class="text-gray-400 text-sm">Your container is delivered and positioned on site by our team — often same or next day.</p>
            </div>
            <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-amber-500/40 transition-all">
              <div class="w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-2xl mb-5">3</div>
              <h3 class="font-bold text-white text-lg mb-2">Use It</h3>
              <p class="text-gray-400 text-sm">Store your equipment, materials or goods securely on site for as long as you need.</p>
            </div>
            <div class="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-amber-500/40 transition-all">
              <div class="w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-2xl mb-5">4</div>
              <h3 class="font-bold text-white text-lg mb-2">We Collect</h3>
              <p class="text-gray-400 text-sm">When you're done, just call us and we'll arrange collection at a time that suits you.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Who we hire to -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="max-w-3xl mx-auto">
            <div class="text-center mb-10">
              <h2 class="heading-lg text-gray-900 mb-4">Who Do We Hire To?</h2>
              <p class="body-lg">We work with a wide range of customers across all industries. If you need secure on-site storage, we can help.</p>
            </div>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li v-for="use in useCases" :key="use" class="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-gray-700">
                <svg class="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ use }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CTA / Enquiry -->
      <section id="enquire" class="section-padding bg-primary-950 text-white">
        <div class="container-custom text-center">
          <div class="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
          <h2 class="heading-lg mb-4">Ready to Hire a Container?</h2>
          <p class="body-lg text-gray-300 mb-8 max-w-xl mx-auto">Call us or send a message and we'll get you a fast, no-obligation quote.</p>
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
  title: 'Container Hire | Roseberry Containers',
  meta: [
    { name: 'description', content: 'Flexible shipping container hire delivered to your site. 10ft, 20ft and 40ft containers available for short and long-term hire across the UK. Call Roseberry Containers today.' }
  ]
})

const useCases = [
  'Construction sites — secure tool and material storage',
  'Events — temporary storage and changing facilities',
  'Businesses — overflow stock and equipment storage',
  'Farms and agricultural use',
  'House moves and renovations',
  'Schools and educational sites',
]
</script>
