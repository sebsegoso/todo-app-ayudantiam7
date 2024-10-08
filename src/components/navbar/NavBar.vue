<script setup>
import { RouterLink } from 'vue-router'
import LoginWithGoogleBtn from '@/components/auth/LoginWithGoogleBtn.vue'
import LogoutBtn from '@/components/auth/LogoutBtn.vue'

import { useAuthStore } from '@/stores/authStore'
import { computed } from 'vue'
import { useTodosStore } from '@/stores/todosStore'

const authStore = useAuthStore()
const todosStore = useTodosStore()

const user = computed(() => authStore.user)
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home ({{ todosStore.todos.length || 0 }})</RouterLink>
    <RouterLink v-if="user" :to="{ name: 'pending' }"
      >Tareas pendientes ({{ todosStore.pendingTodos.length || 0 }})</RouterLink
    >
    <RouterLink v-if="user" :to="{ name: 'completed' }"
      >Tareas completadas ({{ todosStore.completedTodos.length || 0 }})</RouterLink
    >
    <LogoutBtn v-if="user" />
    <LoginWithGoogleBtn v-else />
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>