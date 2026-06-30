<template>
  <div>
    <Header />
    <div class="section-padding text-center">
      <h1 class="heading-lg text-gray-900 mb-4">Depot not found</h1>
      <NuxtLink to="/container-sales/nationwide" class="btn-primary">View All Depots</NuxtLink>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { getDepotBySlug, depotPagePath } from '~/utils/depots'

const route = useRoute()
const slug = String(route.params.depot)
const depot = getDepotBySlug(slug)

if (depot) {
  await navigateTo(depotPagePath(slug), { redirectCode: 301 })
}
</script>
