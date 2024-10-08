<script setup>
import ToDoList from '@/components/todos/ToDoList.vue'
</script>
<template>
  <h1>Esta es una vista protegida: tareas pendientes</h1>
  <ToDoList title="Tareas pendientes" filter="pending" />
</template>
  