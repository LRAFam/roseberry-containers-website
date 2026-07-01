<template>
  <div>
    <Header />
    <main>
      <!-- Hero Section -->
      <section class="relative text-white overflow-hidden" style="clip-path: polygon(0 0, 100% 0, 100% 94%, 0 100%);">
        <div class="absolute inset-0">
          <img src="/container-20ft.jpg" alt="Buy shipping containers for sale across the UK" class="w-full h-full object-cover" fetchpriority="high" />
          <div class="absolute inset-0 bg-primary-950/88"></div>
        </div>
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        <div class="container-custom relative z-10 pt-20 md:pt-28 pb-24 md:pb-32">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span class="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              Direct from Port · Nationwide Delivery
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Shipping Containers<br><span class="hero-gold-text">For Sale Across the UK</span>
            </h1>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl">
              10ft, 20ft and 40ft containers — 1-trip new condition and quality used stock. Fast delivery from {{ DEPOT_COUNT }} UK depots. Same-day response guaranteed.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#containers" class="btn-primary">
                View All Containers
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a href="tel:07793251550" class="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:bg-white/10">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                Call 07793 251550
              </a>
            </div>
            <div class="grid grid-cols-4 gap-4 max-w-lg border-t border-amber-500/20 pt-8">
              <div class="text-center">
                <div class="text-2xl font-bold hero-gold-text">500+</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">Sold</div>
              </div>
              <div class="text-center border-x border-white/10">
                <div class="text-2xl font-bold hero-gold-text">{{ DEPOT_COUNT }}</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">UK Depots</div>
              </div>
              <div class="text-center border-r border-white/10">
                <div class="text-2xl font-bold hero-gold-text">1-Trip</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">New Stock</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold hero-gold-text">4.3★</div>
                <div class="text-xs text-amber-300/70 mt-1 uppercase tracking-wide">Trustpilot</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Trust bar -->
      <div class="bg-primary-900 border-y border-primary-800">
        <div class="container-custom">
          <div class="flex flex-wrap justify-center divide-x divide-primary-700">
            <div v-for="t in trustBar" :key="t.label" class="flex items-center gap-2 px-6 py-3 text-sm text-gray-300">
              <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="t.icon" />
              <span class="font-medium text-white">{{ t.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Container Sizes -->
      <section id="containers" class="section-padding bg-gray-50">
        <div class="container-custom">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              <span class="w-8 h-px bg-amber-500"></span>
              Our Stock
              <span class="w-8 h-px bg-amber-500"></span>
            </div>
            <h2 class="heading-lg text-gray-900 mb-4">Containers Available Now</h2>
            <p class="text-xl text-gray-500 max-w-2xl mx-auto">New 1-trip and quality used stock across all sizes. Delivered direct from our {{ DEPOT_COUNT }} UK depots — same-day response on all enquiries.</p>
          </div>

          <!-- Main Size Cards -->
          <div class="space-y-8 mb-16">

            <!-- 10ft Container -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all duration-300 group">
              <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="relative h-72 lg:h-auto overflow-hidden">
                  <img src="/container-10ft-new.jpg" alt="10ft Shipping Container" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div class="absolute inset-0 bg-gradient-to-r from-primary-950/40 to-transparent lg:from-transparent lg:to-primary-950/20"></div>
                  <div class="absolute top-4 left-4 flex gap-2">
                    <span class="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">1-Trip Available</span>
                    <span class="bg-white/90 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full">Used Available</span>
                  </div>
                </div>
                <div class="p-8 lg:p-10 flex flex-col justify-center">
                  <div class="flex items-baseline gap-3 mb-2">
                    <h3 class="text-3xl font-bold text-gray-900">10ft Container</h3>
                    <span class="text-gray-400 font-medium text-sm">Compact</span>
                  </div>
                  <p class="text-gray-500 mb-6">Perfect where space is tight — driveways, gardens, small yards. Ideal for tool storage, garden use, or small workshop conversion. Available used (Grade A/B) or new 1-trip condition.</p>
                  <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl text-center text-sm">
                    <div><div class="font-bold text-gray-900">10' × 8'</div><div class="text-gray-500 text-xs mt-0.5">Footprint</div></div>
                    <div class="border-x border-gray-200"><div class="font-bold text-gray-900">8'6"</div><div class="text-gray-500 text-xs mt-0.5">Height</div></div>
                    <div><div class="font-bold text-gray-900">~560 ft³</div><div class="text-gray-500 text-xs mt-0.5">Capacity</div></div>
                  </div>
                  <div class="flex flex-col gap-3">
                    <div class="flex gap-3">
                      <button @click="openEnquiry('10ft Container (Used)')" class="flex-1 py-3 px-4 border-2 border-primary-700 text-primary-700 font-semibold rounded-xl hover:bg-primary-700 hover:text-white transition-all duration-200 text-sm">
                        Enquire — Used
                      </button>
                      <button @click="openEnquiry('10ft Container (1-Trip New)')" class="flex-1 py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all duration-200 text-sm">
                        Enquire — 1-Trip
                      </button>
                    </div>
                    <NuxtLink to="/container-sales/10ft-containers" class="text-center text-sm text-primary-700 font-semibold hover:text-primary-900 transition-colors">
                      View full 10ft container details →
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>

            <!-- 20ft Container -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all duration-300 group">
              <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1">
                  <div class="flex items-baseline gap-3 mb-2">
                    <h3 class="text-3xl font-bold text-gray-900">20ft Container</h3>
                    <span class="text-gray-400 font-medium text-sm">Most Popular</span>
                  </div>
                  <p class="text-gray-500 mb-6">The industry standard — holds the equivalent of a 3-bedroom home. Trusted by businesses, builders, and homeowners across the UK for secure on-site storage. Available used or 1-trip new.</p>
                  <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl text-center text-sm">
                    <div><div class="font-bold text-gray-900">20' × 8'</div><div class="text-gray-500 text-xs mt-0.5">Footprint</div></div>
                    <div class="border-x border-gray-200"><div class="font-bold text-gray-900">8'6"</div><div class="text-gray-500 text-xs mt-0.5">Height</div></div>
                    <div><div class="font-bold text-gray-900">1,360 ft³</div><div class="text-gray-500 text-xs mt-0.5">Capacity</div></div>
                  </div>
                  <div class="flex flex-col gap-3">
                    <div class="flex gap-3">
                      <button @click="openEnquiry('20ft Container (Used)')" class="flex-1 py-3 px-4 border-2 border-primary-700 text-primary-700 font-semibold rounded-xl hover:bg-primary-700 hover:text-white transition-all duration-200 text-sm">
                        Enquire — Used
                      </button>
                      <button @click="openEnquiry('20ft Container (1-Trip New)')" class="flex-1 py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all duration-200 text-sm">
                        Enquire — 1-Trip
                      </button>
                    </div>
                    <NuxtLink to="/container-sales/20ft-containers" class="text-center text-sm text-primary-700 font-semibold hover:text-primary-900 transition-colors">
                      View full 20ft container details →
                    </NuxtLink>
                  </div>
                </div>
                <div class="relative h-72 lg:h-auto overflow-hidden order-1 lg:order-2">
                  <img src="/container-20ft-new.jpg" alt="20ft Shipping Container" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div class="absolute inset-0 bg-gradient-to-l from-primary-950/40 to-transparent lg:from-transparent lg:to-primary-950/10"></div>
                  <div class="absolute top-4 right-4 flex gap-2">
                    <span class="bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">Most Popular</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 40ft Container -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg transition-all duration-300 group">
              <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="relative h-72 lg:h-auto overflow-hidden">
                  <img src="/container-40ft-new.jpg" alt="40ft Shipping Container" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div class="absolute inset-0 bg-gradient-to-r from-primary-950/40 to-transparent lg:from-transparent lg:to-primary-950/20"></div>
                  <div class="absolute top-4 left-4 flex gap-2">
                    <span class="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">1-Trip Available</span>
                    <span class="bg-white/90 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full">Hi-Cube Available</span>
                  </div>
                </div>
                <div class="p-8 lg:p-10 flex flex-col justify-center">
                  <div class="flex items-baseline gap-3 mb-2">
                    <h3 class="text-3xl font-bold text-gray-900">40ft Container</h3>
                    <span class="text-gray-400 font-medium text-sm">Maximum Capacity</span>
                  </div>
                  <p class="text-gray-500 mb-6">Our largest standard size — unbeatable capacity for large-scale storage, industrial use, or container conversions. Standard and Hi-Cube (9'6" height) options available new or used.</p>
                  <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl text-center text-sm">
                    <div><div class="font-bold text-gray-900">40' × 8'</div><div class="text-gray-500 text-xs mt-0.5">Footprint</div></div>
                    <div class="border-x border-gray-200"><div class="font-bold text-gray-900">8'6" / 9'6"</div><div class="text-gray-500 text-xs mt-0.5">Std / Hi-Cube</div></div>
                    <div><div class="font-bold text-gray-900">2,720 ft³</div><div class="text-gray-500 text-xs mt-0.5">Capacity</div></div>
                  </div>
                  <div class="flex flex-col gap-3">
                    <div class="flex gap-3">
                      <button @click="openEnquiry('40ft Container (Used)')" class="flex-1 py-3 px-4 border-2 border-primary-700 text-primary-700 font-semibold rounded-xl hover:bg-primary-700 hover:text-white transition-all duration-200 text-sm">
                        Enquire — Used
                      </button>
                      <button @click="openEnquiry('40ft Container (1-Trip New)')" class="flex-1 py-3 px-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all duration-200 text-sm">
                        Enquire — 1-Trip
                      </button>
                    </div>
                    <NuxtLink to="/container-sales/40ft-containers" class="text-center text-sm text-primary-700 font-semibold hover:text-primary-900 transition-colors">
                      View full 40ft container details →
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Specialty Containers -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Side Opening -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group">
              <div class="relative h-52 overflow-hidden">
                <img src="/container-side-opening.jpg" alt="Side Opening Container" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-primary-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">Specialist</span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Side Opening Container</h3>
                <p class="text-gray-500 text-sm mb-4">Full-length side doors for unobstructed access. Ideal for loading wide or heavy items, retail pop-ups, and event use.</p>
                <ul class="space-y-1.5 text-gray-600 text-sm mb-5">
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Available in 20ft &amp; 40ft</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Full-length side panel doors</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Watertight &amp; secure when closed</li>
                </ul>
                <button @click="openEnquiry('Side Opening Container')" class="btn-primary w-full text-sm py-2.5">Enquire Now</button>
              </div>
            </div>

            <!-- Hi-Cube -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group">
              <div class="relative h-52 overflow-hidden">
                <img src="/container-40ft-new.jpg" alt="Hi-Cube Container" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-primary-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">Extra Height</span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Hi-Cube Container</h3>
                <p class="text-gray-500 text-sm mb-4">1ft extra headroom over standard — perfect for conversion projects, bulky items, or anyone wanting more usable interior space.</p>
                <ul class="space-y-1.5 text-gray-600 text-sm mb-5">
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>9'6" internal height</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Available in 20ft &amp; 40ft</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Ideal for offices &amp; conversions</li>
                </ul>
                <button @click="openEnquiry('Hi-Cube Container')" class="btn-primary w-full text-sm py-2.5">Enquire Now</button>
              </div>
            </div>

            <!-- Container Conversions -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group">
              <div class="relative h-52 overflow-hidden">
                <img src="/container-conversion-full.jpg" alt="Container Conversion" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="bg-amber-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">Bespoke</span>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Container Conversions</h3>
                <p class="text-gray-500 text-sm mb-4">Fully converted containers — garden offices, workshops, retail units, and more. Basic shell to fully fitted and ready to use.</p>
                <ul class="space-y-1.5 text-gray-600 text-sm mb-5">
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Basic partial or fully fitted</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Electrics, insulation &amp; cladding</li>
                  <li class="flex items-center gap-2"><svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>Bespoke to your specification</li>
                </ul>
                <NuxtLink to="/container-conversions" class="btn-primary w-full text-sm py-2.5 flex items-center justify-center gap-2">View Conversions <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Container Grades Explained -->
      <section class="section-padding bg-primary-950 text-white">
        <div class="container-custom">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              <span class="w-8 h-px bg-amber-500"></span>
              Condition Guide
              <span class="w-8 h-px bg-amber-500"></span>
            </div>
            <h2 class="heading-lg text-white mb-4">Understanding Container Grades</h2>
            <p class="text-gray-400 text-lg max-w-2xl mx-auto">Not sure what condition to choose? Here's our straightforward guide to every grade we sell.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div class="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <h3 class="text-xl font-bold text-white">1-Trip New</h3>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed mb-4">Used just once to ship cargo from the manufacturer — as close to brand new as a shipping container gets. Pristine interior, minimal exterior wear. Ideal for conversions, offices, and premium storage.</p>
              <div class="text-amber-300 text-xs font-semibold uppercase tracking-wide">Best for: Conversions · Premium storage · Long term</div>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 class="text-xl font-bold text-white">Grade A Used</h3>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed mb-4">Structurally sound, watertight, and wind-tight with only minor surface wear. Serviced and inspected before sale. A reliable mid-range option delivering great value without compromising on quality.</p>
              <div class="text-gray-400 text-xs font-semibold uppercase tracking-wide">Best for: Business storage · Site use · Value buyers</div>
            </div>
            <div class="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                </div>
                <h3 class="text-xl font-bold text-white">Grade B Used</h3>
              </div>
              <p class="text-gray-300 text-sm leading-relaxed mb-4">Fully functional and watertight with more visible surface wear — dents, surface rust, and faded paintwork are normal. Structurally solid and checked before despatch. Our most cost-effective option.</p>
              <div class="text-gray-400 text-xs font-semibold uppercase tracking-wide">Best for: Tight budgets · Short-term · Site storage</div>
            </div>
          </div>
          <div class="text-center mt-10">
            <p class="text-gray-400 text-sm">Not sure which grade is right for you? <button @click="openEnquiry('Container Grade Advice')" class="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">Ask us for advice</button> — we'll recommend the best option for your use case.</p>
          </div>
        </div>
      </section>

      <!-- Price guide -->
      <section class="section-padding bg-white border-t border-gray-100">
        <div class="container-custom max-w-3xl text-center">
          <h2 class="heading-md text-gray-900 mb-4">How Much Does a Shipping Container Cost?</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            Prices vary by size, condition and delivery location. 20ft low-grade used containers start from £950 + VAT, 10ft refurbished from £1,650 + VAT, and 40ft used from £1,450 + VAT. New 1-trip containers start from £1,900 + VAT.
          </p>
          <NuxtLink to="/guides/shipping-container-prices-uk" class="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-900 transition-colors">
            Read our full UK container price guide
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </NuxtLink>
        </div>
      </section>

      <DepotLinksSection variant="dark" />

      <ContainerSalesFaq
        :faqs="containerSalesFaqs"
        title="Shipping Container Sales FAQs"
        subtitle="Everything you need to know before buying a container."
      />

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
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              <span class="w-8 h-px bg-amber-500"></span>
              Why Roseberry
              <span class="w-8 h-px bg-amber-500"></span>
            </div>
            <h2 class="heading-lg text-gray-900 mb-4">Built on Trust. Driven by Results.</h2>
            <p class="text-xl text-gray-500 max-w-2xl mx-auto">Hundreds of businesses and homeowners choose Roseberry Containers for reliability, quality, and service that doesn't stop at delivery.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div v-for="reason in whyUs" :key="reason.title" class="bg-gray-50 rounded-2xl p-8 hover:bg-primary-50 hover:border-primary-100 border border-transparent transition-all duration-300 group">
              <div class="w-14 h-14 bg-primary-900 group-hover:bg-primary-700 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300">
                <svg class="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="reason.icon" />
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ reason.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ reason.body }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="section-padding bg-primary-950 text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-[0.04] pointer-events-none" style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 28px 28px;"></div>
        <div class="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div class="container-custom relative z-10">
          <div class="max-w-3xl mx-auto text-center">
            <div class="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <h2 class="heading-lg mb-4 text-white">Ready to Get Your Container?</h2>
            <p class="text-gray-300 text-xl mb-8 max-w-xl mx-auto">Call us today for an instant quote. We'll match you to the right container, arrange delivery, and get it on-site fast.</p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
              <div class="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div class="text-amber-300 font-bold text-lg">Same Day</div>
                <div class="text-gray-400 text-xs mt-1">Response Guarantee</div>
              </div>
              <div class="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div class="text-amber-300 font-bold text-lg">{{ DEPOT_COUNT }} Depots</div>
                <div class="text-gray-400 text-xs mt-1">Nationwide UK Coverage</div>
              </div>
              <div class="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <div class="text-amber-300 font-bold text-lg">25+ Years</div>
                <div class="text-gray-400 text-xs mt-1">Container Lifespan</div>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 justify-center border-t border-amber-500/20 pt-8">
              <a href="tel:07793251550" class="btn-primary text-lg">
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
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input v-model="enquiryForm.email" type="email" required placeholder="your@email.com"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input v-model="enquiryForm.phone" type="tel" placeholder="Your phone number"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea v-model="enquiryForm.message" rows="3" placeholder="Any additional details (location, timeframe, condition preference...)"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"></textarea>
            </div>

            <button type="submit" :disabled="enquirySubmitting" class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
              <span v-if="!enquirySubmitting">Send Enquiry</span>
              <span v-else>Sending...</span>
            </button>

            <p v-if="enquiryMessage" :class="enquirySuccess ? 'text-primary-600' : 'text-red-600'" class="text-sm text-center">
              {{ enquiryMessage }}
            </p>
          </form>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { containerSalesFaqs, faqPageSchema, localBusinessProvider } from '~/utils/container-sales-seo'
import { DEPOT_COUNT } from '~/utils/depots'

useHead({
  title: 'Buy Shipping Containers UK | New & Used 10ft, 20ft, 40ft | Roseberry',
  meta: [
    { name: 'description', content: `Buy new 1-trip and quality used 10ft, 20ft and 40ft shipping containers from Roseberry Containers. 20ft from £950 + VAT, ${DEPOT_COUNT} UK depots, nationwide delivery. Get a free quote today.` },
    { property: 'og:title', content: 'Buy Shipping Containers UK | Roseberry Containers' },
    { property: 'og:description', content: 'Buy new 1-trip and quality used 10ft, 20ft and 40ft shipping containers with nationwide UK delivery and transparent pricing.' },
    { property: 'og:url', content: 'https://www.roseberrycontainers.com/container-sales' },
    { property: 'og:image', content: 'https://www.roseberrycontainers.com/container-20ft-new.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_GB' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Buy Shipping Containers UK | Roseberry Containers' },
    { name: 'twitter:description', content: 'New 1-trip and quality used shipping containers. 10ft, 20ft, 40ft sizes. Nationwide delivery.' },
    { name: 'twitter:image', content: 'https://www.roseberrycontainers.com/container-20ft-new.jpg' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.roseberrycontainers.com/container-sales' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Shipping Container Sales',
        description: 'Buy new 1-trip and quality used 10ft, 20ft and 40ft shipping containers with nationwide delivery across the UK.',
        provider: localBusinessProvider(),
        areaServed: { '@type': 'Country', name: 'United Kingdom' },
        url: 'https://www.roseberrycontainers.com/container-sales',
        serviceType: 'Shipping Container Sales',
        offers: [
          { '@type': 'Offer', name: '10ft Shipping Container', url: 'https://www.roseberrycontainers.com/container-sales/10ft-containers', description: 'New 1-trip and used 10ft containers for sale with UK delivery.' },
          { '@type': 'Offer', name: '20ft Shipping Container', url: 'https://www.roseberrycontainers.com/container-sales/20ft-containers', description: 'New 1-trip and used 20ft containers for sale with UK delivery.' },
          { '@type': 'Offer', name: '40ft Shipping Container', url: 'https://www.roseberrycontainers.com/container-sales/40ft-containers', description: 'New 1-trip and used 40ft containers for sale with UK delivery.' },
        ],
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqPageSchema(containerSalesFaqs)),
    },
  ]
})

const config = useRuntimeConfig()
const clientId = config.public.clientId

const trustBar = [
  { label: 'Direct from Port', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18"/>' },
  { label: 'All Sizes In Stock', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>' },
  { label: `${DEPOT_COUNT} UK Depots`, icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>' },
  { label: 'Same-Day Response', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>' },
  { label: 'Nationwide Delivery', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1"/>' },
]

const whyUs = [
  {
    title: 'Rigorous Quality Checks',
    body: 'Every container — 1-trip or used — passes inspection before despatch. No nasty surprises on delivery.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>',
  },
  {
    title: 'Transparent Pricing',
    body: 'No hidden costs. Get a clear quote upfront — delivery, placement, and VAT included so you know exactly what you\'re paying.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>',
  },
  {
    title: 'Expert Site Delivery',
    body: 'Our drivers are experienced with all access types — narrow lanes, sloped ground, tight yards. We place the container where you need it.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1"/>',
  },
  {
    title: 'Knowledgeable Team',
    body: 'Not sure what grade or size you need? Our team has seen every use case. We\'ll match you to the right container, fast.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>',
  },
  {
    title: 'Built to Last 25+ Years',
    body: 'Corten steel construction — designed to be watertight, weather-resistant, and structurally sound for decades with minimal maintenance.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>',
  },
  {
    title: 'Versatile by Design',
    body: 'From simple on-site storage to full bespoke conversions — containers are the most adaptable modular structure available. We stock them all.',
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>',
  },
]

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
        clientId,
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
