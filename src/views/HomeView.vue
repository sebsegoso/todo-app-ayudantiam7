<script setup>
import { useAuthStore } from '@/stores/authStore'
import { computed } from 'vue'
import CreateTodoForm from '@/components/todos/CreateTodoForm.vue'
import ToDoList from '@/components/todos/ToDoList.vue'
const authStore = useAuthStore()

const user = computed(() => authStore.user)
</script>

<template>
  <main>
    <h1>Home</h1>
    <div v-if="user">
      <h2>Hola {{ user.displayName }}</h2>

      <CreateTodoForm />

      <ToDoList title="Todas mis tareas" />
    </div>
    <div v-else>Debes iniciar sesión</div>
  </main>
</template>
