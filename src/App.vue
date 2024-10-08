<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/navbar/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
