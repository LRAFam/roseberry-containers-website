<template>
  <div>
    <Header />
    <main>
      <!-- Hero -->
      <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
        <div class="absolute inset-0">
          <img src="/container-20ft-new.jpg" alt="" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-primary-950/88"></div>
        </div>
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div class="container-custom relative z-10 pt-20 md:pt-28 pb-24 md:pb-32">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              Flexible Container Hire · Delivery Included
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Container Hire<br><span class="hero-gold-text">Delivered to Your Site</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl">
              We hire shipping containers directly to construction sites, businesses, events and residential customers across the UK. Flexible short and long-term hire periods available.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#enquire" class="btn-primary">
                Get a Hire Quote
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
                <div class="text-2xl font-bold hero-gold-text">Same</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">Day Delivery</div>
              </div>
              <div class="text-center border-x border-white/10">
                <div class="text-2xl font-bold hero-gold-text">Weekly</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">or Monthly</div>
              </div>
              <div class="text-center border-r border-white/10">
                <div class="text-2xl font-bold hero-gold-text">3</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">Sizes</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold hero-gold-text">UK</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">Wide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why hire -->
      <section class="section-padding bg-primary-950 text-white">
        <div class="container-custom">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              <span class="w-8 h-px bg-amber-500"></span>
              Why Roseberry
              <span class="w-8 h-px bg-amber-500"></span>
            </div>
            <h2 class="heading-lg text-white mb-4">Why Hire with Roseberry?</h2>
            <p class="text-gray-400 text-lg max-w-2xl mx-auto">Fast, reliable container hire with delivery and collection included. No hidden costs, no hassle.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 group">
              <div class="w-12 h-12 bg-amber-500/10 group-hover:bg-amber-500/20 border border-amber-500/30 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="font-bold text-white text-lg mb-2">Delivery &amp; Collection</h3>
              <p class="text-gray-400 text-sm leading-relaxed">We deliver and collect from your site — no need for specialist transport on your end. We handle it all.</p>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 group">
              <div class="w-12 h-12 bg-amber-500/10 group-hover:bg-amber-500/20 border border-amber-500/30 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-bold text-white text-lg mb-2">Flexible Periods</h3>
              <p class="text-gray-400 text-sm leading-relaxed">Hire by the week or month — scale up or extend as your project demands. No minimum commitment.</p>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-amber-500/30 transition-all duration-300 group">
              <div class="w-12 h-12 bg-amber-500/10 group-hover:bg-amber-500/20 border border-amber-500/30 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="font-bold text-white text-lg mb-2">Secure &amp; Weatherproof</h3>
              <p class="text-gray-400 text-sm leading-relaxed">All hire containers are wind and watertight with secure locking bars. Your contents stay dry and safe.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sizes available -->
      <section class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              <span class="w-8 h-px bg-amber-500"></span>
              Container Sizes
              <span class="w-8 h-px bg-amber-500"></span>
            </div>
            <h2 class="heading-lg text-gray-900 mb-4">Hire Sizes Available</h2>
            <p class="text-xl text-gray-500 max-w-xl mx-auto">Available in the most popular standard sizes for every application — from compact to large-scale.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div class="bg-white rounded-2xl shadow-card overflow-hidden group hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300">
              <div class="relative h-52 overflow-hidden">
                <img src="/container-10ft.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="10ft hire container" />
                <div class="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="text-4xl font-black text-white">10ft</div>
                  <div class="text-amber-300 text-xs font-semibold mt-0.5">3.0 × 2.4 × 2.6m</div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="font-bold text-gray-900 text-lg mb-2">Compact Storage</h3>
                <p class="text-gray-600 text-sm mb-5">Ideal for garden storage, small tools and equipment on compact sites.</p>
                <ul class="space-y-1.5 text-gray-600 text-sm mb-5">
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Secure lockable doors</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Wind &amp; watertight</li>
                </ul>
                <a href="#enquire" class="btn-primary w-full justify-center text-sm">Get a Quote</a>
              </div>
            </div>
            <div class="bg-white rounded-2xl shadow-card overflow-hidden group hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 ring-2 ring-amber-400">
              <div class="relative h-52 overflow-hidden">
                <img src="/container-20ft.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="20ft hire container" />
                <div class="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                <div class="absolute top-3 right-3">
                  <span class="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">Most Popular</span>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="text-4xl font-black text-white">20ft</div>
                  <div class="text-amber-300 text-xs font-semibold mt-0.5">6.1 × 2.4 × 2.6m</div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="font-bold text-gray-900 text-lg mb-2">Standard Storage</h3>
                <p class="text-gray-600 text-sm mb-5">The go-to hire size — perfect for construction sites, events and business use.</p>
                <ul class="space-y-1.5 text-gray-600 text-sm mb-5">
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Site delivery &amp; collection</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Week or month hire</li>
                </ul>
                <a href="#enquire" class="btn-primary w-full justify-center text-sm">Get a Quote</a>
              </div>
            </div>
            <div class="bg-white rounded-2xl shadow-card overflow-hidden group hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300">
              <div class="relative h-52 overflow-hidden">
                <img src="/container-40ft.jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="40ft hire container" />
                <div class="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4">
                  <div class="text-4xl font-black text-white">40ft</div>
                  <div class="text-amber-300 text-xs font-semibold mt-0.5">12.2 × 2.4 × 2.6m</div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="font-bold text-gray-900 text-lg mb-2">Large Storage</h3>
                <p class="text-gray-600 text-sm mb-5">Maximum capacity for large commercial projects, warehousing overflow and bulk storage.</p>
                <ul class="space-y-1.5 text-gray-600 text-sm mb-5">
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Commercial scale capacity</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Ideal for trade use</li>
                </ul>
                <a href="#enquire" class="btn-primary w-full justify-center text-sm">Get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works -->
      <section class="section-padding bg-primary-950 text-white">
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
            <div class="bg-primary-900 rounded-2xl p-6 border border-primary-800 hover:border-amber-500/40 transition-all">
              <div class="w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-2xl mb-5">1</div>
              <h3 class="font-bold text-white text-lg mb-2">Get a Quote</h3>
              <p class="text-gray-400 text-sm">Call or message us with your size, location and hire period. We'll give you a fast, no-obligation price.</p>
            </div>
            <div class="bg-primary-900 rounded-2xl p-6 border border-primary-800 hover:border-amber-500/40 transition-all">
              <div class="w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-2xl mb-5">2</div>
              <h3 class="font-bold text-white text-lg mb-2">We Deliver</h3>
              <p class="text-gray-400 text-sm">Your container is delivered and positioned on site by our team — often same or next day.</p>
            </div>
            <div class="bg-primary-900 rounded-2xl p-6 border border-primary-800 hover:border-amber-500/40 transition-all">
              <div class="w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-2xl mb-5">3</div>
              <h3 class="font-bold text-white text-lg mb-2">Use It</h3>
              <p class="text-gray-400 text-sm">Store your equipment, materials or goods securely on site for as long as you need.</p>
            </div>
            <div class="bg-primary-900 rounded-2xl p-6 border border-primary-800 hover:border-amber-500/40 transition-all">
              <div class="w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center font-black text-2xl mb-5">4</div>
              <h3 class="font-bold text-white text-lg mb-2">We Collect</h3>
              <p class="text-gray-400 text-sm">When you're done, just call us and we'll arrange collection at a time that suits you.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Who we hire to -->
      <section class="section-padding bg-white">
        <div class="container-custom">
          <div class="max-w-3xl mx-auto">
            <div class="text-center mb-10">
              <div class="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
                <span class="w-8 h-px bg-amber-500"></span>
                Our Customers
                <span class="w-8 h-px bg-amber-500"></span>
              </div>
              <h2 class="heading-lg text-gray-900 mb-4">Who Do We Hire To?</h2>
              <p class="text-lg text-gray-500">We work with a wide range of customers across all industries. If you need secure on-site storage, we can help.</p>
            </div>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li v-for="use in useCases" :key="use" class="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all text-gray-700">
                <svg class="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="font-medium">{{ use }}</span>
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
