import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { $auth } from '@/firebase'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      authRequired: false
    }
  },
  {
    path: '/tareas-pendientes',
    name: 'pending',
    component: () => import('@/views/PendingView.vue'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/tareas-completadas',
    name: 'completed',
    component: () => import('@/views/CompletedView.vue'),
    meta: {
      authRequired: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const user = $auth.currentUser

  if (!user && to.meta.authRequired) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
