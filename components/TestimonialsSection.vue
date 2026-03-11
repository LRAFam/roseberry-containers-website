<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our Customers Say
        </h2>
        <p class="text-xl text-gray-600">
          Trusted by businesses and individuals across Middlesbrough
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400">
              <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <p class="text-gray-600 mb-6 italic">
            "Excellent service! The containers are secure and the staff are very helpful. Would highly recommend."
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
            <div class="ml-4">
              <p class="font-semibold text-gray-900">John Doe</p>
              <p class="text-sm text-gray-500">Small Business Owner</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400">
              <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <p class="text-gray-600 mb-6 italic">
            "Great value for money. The 24/7 CCTV gives me peace of mind knowing my items are safe."
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
              SM
            </div>
            <div class="ml-4">
              <p class="font-semibold text-gray-900">Sarah Miller</p>
              <p class="text-sm text-gray-500">Homeowner</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400">
              <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <p class="text-gray-600 mb-6 italic">
            "Professional and reliable. The van hire service made moving so much easier. Highly recommend!"
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
              RJ
            </div>
            <div class="ml-4">
              <p class="font-semibold text-gray-900">Robert Jones</p>
              <p class="text-sm text-gray-500">Local Resident</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
