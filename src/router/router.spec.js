import { describe, expect, it } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
describe('test router', () => {
  const routerPruebas = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

  it("navegacion a home view con path '/'", async () => {
    await routerPruebas.push({ name: 'home' })
    await routerPruebas.isReady()
    expect(routerPruebas.currentRoute.value.path).toBe('/')
  })
  it("navegacion a tareas pendientes con path '/tareas-pendientes'", async () => {
    await routerPruebas.push({ name: 'pending' })
    await routerPruebas.isReady()
    expect(routerPruebas.currentRoute.value.path).toBe('/tareas-pendientes')
  })
  it("navegacion a tareas completadas con path '/tareas-completadas'", async () => {
    await routerPruebas.push({ name: 'completed' })
    await routerPruebas.isReady()
    expect(routerPruebas.currentRoute.value.path).toBe('/tareas-completadas')
  })
})
