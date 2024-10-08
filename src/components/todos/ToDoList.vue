<script setup>
import ToDoItem from '@/components/todos/ToDoItem.vue'
import { useTodosStore } from '@/stores/todosStore'
import { computed, onMounted } from 'vue'
const todosStore = useTodosStore()

const { title, filter } = defineProps({
  title: String,
  filter: {
    type: String,
    default: 'all'
  }
})

const filteredTodos = computed(() => {
  switch (filter) {
    case 'completed':
      return todosStore.completedTodos
    case 'pending':
      return todosStore.pendingTodos
    default:
      return todosStore.todos
  }
})

onMounted(async () => {
  await todosStore.fetchToDos()
})
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <ToDoItem :todo="todo" />
      </li>
    </ul>
  </div>
</template>