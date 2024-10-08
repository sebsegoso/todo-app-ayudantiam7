<script setup>
import ToDoList from '@/components/todos/ToDoList.vue'
</script>
<template>
  <h1>Esta es una vista protegida: tareas completadas</h1>
  <ToDoList title="Tareas completadas" filter="completed" />
</template>