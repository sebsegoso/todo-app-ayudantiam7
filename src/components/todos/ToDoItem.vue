<script setup>
import { useTodosStore } from '@/stores/todosStore'

const todosStore = useTodosStore()
const { todo } = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const deleteToDo = async () => {
  const id = todo.id
  await todosStore.deleteToDo(id)
}
</script>

<template>
  <div>
    <input type="checkbox" name="" id="" />
    <span>{{ todo.task }}</span>
    <button @click="deleteToDo">Eliminar</button>
  </div>
</template>