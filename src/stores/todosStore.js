import { ToDosService } from '@/services/todos.service'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTodosStore = defineStore('todos', () => {
  const service = new ToDosService()
  const todos = ref([])
  const loading = ref(false)

  const completedTodos = computed(() => todos.value.filter((todo) => todo.isCompleted))
  const pendingTodos = computed(() => todos.value.filter((todo) => !todo.isCompleted))

  //   get todos
  async function fetchToDos() {
    loading.value = true
    todos.value = await service.fetchToDos()
    loading.value = false
  }

  //   add todo
  async function addToDo(task = '') {
    await service.addToDo({ task })
    await fetchToDos()
  }

  // delete todo
  async function deleteToDo(id) {
    await service.deleteToDo(id)
    await fetchToDos()
  }

  return { todos, addToDo, fetchToDos, loading, completedTodos, pendingTodos, deleteToDo }
})
