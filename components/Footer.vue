<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container-custom py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-white text-lg font-bold mb-4">Roseberry Self Storage</h3>
          <p class="text-sm mb-4">
            Secure container storage solutions in Middlesbrough. We take care of your stuff with 24/7 CCTV monitoring and secure access.
          </p>
          <div class="flex space-x-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="hover:text-emerald-400 transition-colors"
              aria-label="Facebook"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/" class="hover:text-emerald-400 transition-colors">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/container-sales" class="hover:text-emerald-400 transition-colors">Container Sales</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-emerald-400 transition-colors">Contact</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-white text-lg font-bold mb-4">Contact Us</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start space-x-2">
              <svg class="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Waverley Rd, Middlesbrough, TS1, UK</span>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:roseberyselfstorage@hotmail.com" class="hover:text-emerald-400 transition-colors">
                roseberyselfstorage@hotmail.com
              </a>
            </li>
            <li class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div class="flex flex-col">
                <a href="tel:07793251550" class="hover:text-emerald-400 transition-colors">07793 251550</a>
                <a href="tel:07873082655" class="hover:text-emerald-400 transition-colors">07873 082655</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
        <p>&copy; {{ currentYear }} Roseberry Self Storage. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
