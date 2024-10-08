<script setup>
import { useAuthStore } from '@/stores/authStore'
import { computed } from 'vue'
import LoginWithGoogleBtn from '@/components/auth/LoginWithGoogleBtn.vue'
import LogoutBtn from '@/components/auth/LogoutBtn.vue'

const authStore = useAuthStore()

const user = computed(() => authStore.user)
</script>

<template>
  <main>
    <h1>Home</h1>
    <div v-if="user">
      Hola {{ user.displayName }}

      <LogoutBtn />
    </div>
    <div v-else>
      Debes iniciar sesión

      <LoginWithGoogleBtn />
    </div>
  </main>
</template>
