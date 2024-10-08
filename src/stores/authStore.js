import { loginWithGoogle, logout } from '@/firebase'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('authStore', () => {
  const user = ref(null)

  const login = async () => {
    try {
      const result = await loginWithGoogle()

      user.value = result.user
    } catch (error) {
      console.error(`Error ${error.code}: ${error.message}`)
    }
  }

  const logoutUser = async () => {
    await logout()
    user.value = null
  }

  return { user, login, logoutUser }
})
