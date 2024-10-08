import { ToDosService } from '@/services/todos.service'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodosStore = defineStore('todos', () => {
  const service = new ToDosService()
  const todos = ref([])

  async function addToDo(task = '') {
    await service.addToDo({ task })
  }

  return { todos, addToDo }
})
