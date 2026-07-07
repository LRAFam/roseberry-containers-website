<template>
  <div>
    <NuxtPage />
    <ClientOnly>
      <ChatWidget v-if="showChat" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const showChat = computed(() => !route.path.startsWith('/admin'))
</script>

<style>
@import "./assets/css/main.css";
</style>


