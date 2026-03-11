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

      <!-- Decorative illustration -->
      <div class="mt-12 max-w-md mx-auto">
        <svg viewBox="0 0 400 300" class="w-full h-auto text-gray-300">
          <rect x="50" y="100" width="120" height="150" rx="5" fill="currentColor" opacity="0.3"/>
          <rect x="230" y="80" width="120" height="170" rx="5" fill="currentColor" opacity="0.5"/>
          <circle cx="200" cy="180" r="80" fill="none" stroke="currentColor" stroke-width="4" opacity="0.2"/>
        </svg>
      </div>
    </div>
  </div>
</template>
