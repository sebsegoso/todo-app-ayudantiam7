import { loginWithGoogle, logout } from '@/firebase'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useAuthStore } from './authStore'

vi.mock('@/firebase', () => ({
  loginWithGoogle: vi.fn(),
  logout: vi.fn()
}))

describe('Auth store', () => {
  const mockUser = { uid: '123', displayName: 'Nombre de prueba' }
  let authStore

  beforeEach(() => {
    setActivePinia(createPinia())
    authStore = useAuthStore()
  })

  // inicio de sesión y seteo de usuario en store
  it('inicio de sesión y seteo de usuario en store', async () => {
    expect(authStore.user).toBeNull()
    loginWithGoogle.mockResolvedValue({ user: mockUser })

    await authStore.login()

    expect(authStore.user.uid).toEqual(mockUser.uid)
  })

  //   cierre de sesión
  it('se cierra sesión y se elimina usuario', async () => {
    authStore.user = mockUser

    await authStore.logoutUser()

    expect(authStore.user).toBeNull()
    expect(logout).toHaveBeenCalled()
  })
})
