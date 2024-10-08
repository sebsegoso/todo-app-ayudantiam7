<script setup>
import ToDoItem from '@/components/todos/ToDoItem.vue'
import { useTodosStore } from '@/stores/todosStore'
import { onMounted } from 'vue'
const todosStore = useTodosStore()

const { title } = defineProps({
  title: String
})

onMounted(async () => {
  await todosStore.fetchToDos()
})
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="todo in todosStore.todos" :key="todo.id">
        <ToDoItem :todo="todo" />
      </li>
    </ul>
  </div>
</template>