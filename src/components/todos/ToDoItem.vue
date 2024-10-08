<script setup>
import { useTodosStore } from '@/stores/todosStore'
import { ref } from 'vue'
const { todo } = defineProps({
  todo: {
    type: Object,
    required: true
  }
})
const isEditing = ref(false)
const editTaks = ref(todo.task)
const todosStore = useTodosStore()

const startEdit = () => {
  isEditing.value = true
}

const saveEdit = async () => {
  isEditing.value = false
  await todosStore.updateToDo(todo.id, { task: editTaks.value })
}

const deleteToDo = async () => {
  const id = todo.id
  await todosStore.deleteToDo(id)
}

const toggleComplete = async (event) => {
  await todosStore.updateToDo(todo.id, { isCompleted: event.target.checked })
}
</script>

<template>
  <div>
    <input
      type="checkbox"
      :value="todo.isCompleted"
      :checked="todo.isCompleted"
      @change="toggleComplete"
    />
    <input v-if="isEditing" type="text" v-model="editTaks" />
    <span v-else>{{ todo.task }}</span>
    <button @click="isEditing ? saveEdit() : startEdit()">
      {{ isEditing ? 'Guardar' : 'Editar' }}
    </button>
    <button @click="deleteToDo">Eliminar</button>
  </div>
</template>