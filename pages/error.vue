<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center px-4">
      <div class="mb-8">
        <h1 class="text-9xl font-bold text-emerald-500">404</h1>
        <p class="text-2xl md:text-3xl font-semibold text-gray-900 mt-4">Page Not Found</p>
        <p class="text-gray-600 mt-2 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/" class="btn-primary">
          Go Home
        </NuxtLink>
        <NuxtLink to="/contact" class="btn-secondary">
          Contact Us
        </NuxtLink>
      </div>

      <!-- 3D scattered container illustration -->
      <div class="mt-8 max-w-2xl mx-auto">
        <Scene404 />
      </div>
    </div>
  </div>
</template>
