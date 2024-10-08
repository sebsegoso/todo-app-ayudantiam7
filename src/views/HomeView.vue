<script setup>
import { useAuthStore } from '@/stores/authStore'
import { computed } from 'vue'

const authStore = useAuthStore()

const user = computed(() => authStore.user)
</script>

<template>
  <main>
    <h1>Home</h1>
    <div v-if="user">Hola {{ user.displayName }}</div>
    <div v-else>Debes iniciar sesión</div>
  </main>
</template>
