<script setup>
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todosStore'
const newTask = ref('')
const todosStore = useTodosStore()

const addTodo = async () => {
  if (newTask.value.trim()) {
    await todosStore.addToDo(newTask.value)
    newTask.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <h3>Agregar nueva tarea</h3>
    <input type="text" v-model="newTask" placeholder="Ingresa una nueva tarea..." />
    <button type="submit">Agregar</button>
  </form>
</template>