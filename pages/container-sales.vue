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
            <h2 class="heading-lg text-gray-900 mb-4">Available Containers</h2>
            <p class="text-xl text-gray-600">Choose from our range of high-quality storage containers</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- Used 10ft Container -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group border-t-4 border-gray-300">
              <div class="h-64 bg-gradient-to-br from-primary-950 to-gray-900">
                <ContainerViewer3D :sizeFt="10" />
              </div>
              <div class="p-6 md:p-8">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-2xl font-bold text-gray-900">10ft Container</h3>
                  <span class="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Used</span>
                </div>
                <p class="text-gray-500 text-sm mb-4">Compact and practical — ideal where space is tight, for garden storage, tool storage, or small business use.</p>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Dimensions: 10' × 8' × 8'6"
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    ~560 cu ft internal space
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Fits in tight spaces &amp; driveways
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Watertight &amp; weather-resistant
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Great value second-hand option
                  </li>
                </ul>
                <button @click="openEnquiry('Used 10ft Container')" class="btn-primary w-full">
                  Enquire Now
                </button>
              </div>
            </div>

            <!-- New 1-Trip 10ft Container -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group border-t-4 border-amber-400">
              <div class="h-64 bg-gradient-to-br from-amber-950 via-primary-950 to-gray-900 relative">
                <div class="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  1-Trip Condition
                </div>
                <ContainerViewer3D :sizeFt="10" :isNew="true" />
              </div>
              <div class="p-6 md:p-8">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-2xl font-bold text-gray-900">10ft Container</h3>
                  <span class="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-1 rounded-full">1-Trip / New</span>
                </div>
                <p class="text-gray-500 text-sm mb-4">Compact, clean, and as good as new — perfect for tight spaces, garden storage, or small workshop conversions.</p>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Dimensions: 10' × 8' × 8'6"
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    564 cu ft internal space
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Pristine interior &amp; exterior
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    12,000 kg max gross weight
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Watertight &amp; weather-resistant
                  </li>
                </ul>
                <button @click="openEnquiry('New 1-Trip 10ft Container')" class="btn-primary w-full">
                  Enquire Now
                </button>
              </div>
            </div>

            <!-- Used 20ft Container -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group border-t-4 border-gray-300">
              <div class="h-64 bg-gradient-to-br from-primary-950 to-gray-900">
                <ContainerViewer3D :sizeFt="20" />
              </div>
              <div class="p-6 md:p-8">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-2xl font-bold text-gray-900">20ft Container</h3>
                  <span class="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Used</span>
                </div>
                <p class="text-gray-500 text-sm mb-4">Ideal for small businesses and home moves — holds the equivalent of a 3-bedroom house.</p>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Dimensions: 20' × 8' × 8'6"
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    1,360 cu ft internal space
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Designed to last 25+ years
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Watertight &amp; weather-resistant
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Great value second-hand option
                  </li>
                </ul>
                <button @click="openEnquiry('Used 20ft Container')" class="btn-primary w-full">
                  Enquire Now
                </button>
              </div>
            </div>

            <!-- New 1-Trip 20ft Container -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group border-t-4 border-amber-400">
              <div class="h-64 bg-gradient-to-br from-amber-950 via-primary-950 to-gray-900 relative">
                <div class="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  1-Trip Condition
                </div>
                <ContainerViewer3D :sizeFt="20" :isNew="true" />
              </div>
              <div class="p-6 md:p-8">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-2xl font-bold text-gray-900">20ft Container</h3>
                  <span class="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-1 rounded-full">1-Trip / New</span>
                </div>
                <p class="text-gray-500 text-sm mb-4">A one-trip container is as close to brand new as you can get — used just once to ship cargo from the manufacturer.</p>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Dimensions: 20' × 8' × 8'6"
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    1,360 cu ft internal space
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Pristine interior &amp; exterior
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Ideal for conversions &amp; offices
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Watertight &amp; weather-resistant
                  </li>
                </ul>
                <button @click="openEnquiry('New 1-Trip 20ft Container')" class="btn-primary w-full">
                  Enquire Now
                </button>
              </div>
            </div>

            <!-- Used 40ft Container -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group border-t-4 border-gray-300">
              <div class="h-64 bg-gradient-to-br from-primary-950 to-gray-900">
                <ContainerViewer3D :sizeFt="40" />
              </div>
              <div class="p-6 md:p-8">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-2xl font-bold text-gray-900">40ft Container</h3>
                  <span class="text-xs font-semibold bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Used</span>
                </div>
                <p class="text-gray-500 text-sm mb-4">Maximum capacity for large-scale storage — fits the contents of a 3-bedroom family home with room to spare.</p>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Dimensions: 40' × 8' × 8'6"
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    2,720 cu ft internal space
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Designed to last 25+ years
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Sturdy corten steel construction
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Great value second-hand option
                  </li>
                </ul>
                <button @click="openEnquiry('Used 40ft Container')" class="btn-primary w-full">
                  Enquire Now
                </button>
              </div>
            </div>

            <!-- New 1-Trip 40ft Container -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group border-t-4 border-amber-400">
              <div class="h-64 bg-gradient-to-br from-amber-950 via-primary-950 to-gray-900 relative">
                <div class="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  1-Trip Condition
                </div>
                <ContainerViewer3D :sizeFt="40" :isNew="true" :hiCube="true" />
              </div>
              <div class="p-6 md:p-8">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-2xl font-bold text-gray-900">40ft Container</h3>
                  <span class="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-1 rounded-full">1-Trip / New</span>
                </div>
                <p class="text-gray-500 text-sm mb-4">Brand-new condition with extra height — used just once to ship cargo, perfect for conversions and premium storage.</p>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Dimensions: 40' × 8' × 9'6" (Hi-Cube)
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    2,700 cu ft internal space
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Pristine interior &amp; exterior
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Ideal for conversions &amp; workshops
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    30,480 kg max gross weight
                  </li>
                </ul>
                <button @click="openEnquiry('New 1-Trip 40ft Container')" class="btn-primary w-full">
                  Enquire Now
                </button>
              </div>
            </div>

            <!-- Hi-Cube Container -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group">
              <div class="h-64 bg-gradient-to-br from-primary-950 to-gray-900">
                <ContainerViewer3D :sizeFt="40" :hiCube="true" />
              </div>
              <div class="p-6 md:p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Hi-Cube Container</h3>
                <p class="text-gray-500 text-sm mb-4">Extra headroom makes Hi-Cube containers perfect for bulky cargo, conversions, and maximising every inch of space.</p>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Available in 20ft &amp; 40ft sizes
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Extra height: 9'6" internal
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    High-quality corten steel
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Ideal for container conversions
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Available new or used
                  </li>
                </ul>
                <button @click="openEnquiry('Hi-Cube Container')" class="btn-primary w-full">
                  Enquire Now
                </button>
              </div>
            </div>

            <!-- Side Opening Container -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group">
              <div class="h-64 bg-gradient-to-br from-primary-950 to-gray-900">
                <ContainerViewer3D :sizeFt="20" />
              </div>
              <div class="p-6 md:p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Side Opening Container</h3>
                <p class="text-gray-500 text-sm mb-4">Full-length side doors give unobstructed access to the entire container — ideal for loading wide or heavy items with ease.</p>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Available in 20ft &amp; 40ft
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Full side access panel
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Standard end doors included
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Perfect for retail &amp; pop-up use
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Watertight &amp; secure when closed
                  </li>
                </ul>
                <button @click="openEnquiry('Side Opening Container')" class="btn-primary w-full">
                  Enquire Now
                </button>
              </div>
            </div>

            <!-- Basic Partial Conversion -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group">
              <div class="h-64 bg-gradient-to-br from-primary-950 to-gray-900">
                <ContainerViewer3D :sizeFt="20" :isNew="true" />
              </div>
              <div class="p-6 md:p-8">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-2xl font-bold text-gray-900">Container Conversion</h3>
                  <span class="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Basic / Partial</span>
                </div>
                <p class="text-gray-500 text-sm mb-4">A great starting point for your project — container prepared with large glazed bi-fold doors and a timber floor, ready to finish to your spec.</p>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Large glazed bi-fold / sliding doors
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Timber flooring included
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    20ft Hi-Cube base unit
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Ideal for offices, studios &amp; shops
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Further fit-out to your requirements
                  </li>
                </ul>
                <button @click="openEnquiry('Basic Partial Conversion')" class="btn-primary w-full">
                  Enquire Now
                </button>
              </div>
            </div>

            <!-- Full Conversion / Garden Office -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 group">
              <div class="h-64 bg-gradient-to-br from-primary-950 to-gray-900">
                <ContainerViewer3D :sizeFt="20" :isNew="true" :hiCube="true" />
              </div>
              <div class="p-6 md:p-8">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-2xl font-bold text-gray-900">Container Conversion</h3>
                  <span class="text-xs font-semibold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">Full / Garden Office</span>
                </div>
                <p class="text-gray-500 text-sm mb-4">A fully finished container conversion — timber-clad, insulated, and fitted out ready to use as a home office, studio, or garden room.</p>
                <ul class="space-y-2 text-gray-600 mb-6">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Timber cladding exterior
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Bi-fold glazed doors
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Fully insulated &amp; plastered
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Electrics &amp; lighting fitted
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    Bespoke to your requirements
                  </li>
                </ul>
                <button @click="openEnquiry('Full Conversion / Garden Office')" class="btn-primary w-full">
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
            <h2 class="heading-lg text-gray-900 mb-12 text-center">Why Buy From Us?</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-2">Stringent Quality Checks</h3>
                  <p class="text-gray-600">Every container — new or used — passes rigorous inspection before sale, ensuring quality and longevity you can count on.</p>
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
                  <p class="text-gray-600">Great value on new and used containers — with short and long-term options to suit any budget in the Middlesbrough area.</p>
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
                  <h3 class="font-bold text-gray-900 mb-2">Delivery to Your Door</h3>
                  <p class="text-gray-600">We deliver directly to your site. From quote to delivery, we make the whole process quick and straightforward.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-2">Expert Advice</h3>
                  <p class="text-gray-600">Not sure which container is right for you? Our experienced team will guide you through the options and find the perfect fit.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-2">Built to Last 25+ Years</h3>
                  <p class="text-gray-600">Constructed from high-grade corten steel, our containers are designed to be watertight and weather-resistant with minimal maintenance.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 mb-2">Ideal for Conversions</h3>
                  <p class="text-gray-600">Whether you're creating a workshop, pop-up shop, or additional office space, our containers are a versatile base for any project.</p>
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
