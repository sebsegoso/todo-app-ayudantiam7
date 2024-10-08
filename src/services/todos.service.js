import { $auth, $db } from '@/firebase'
import { addDoc, collection } from 'firebase/firestore'

export class ToDosService {
  // agregar tarea
  async addToDo(todo) {
    try {
      const userId = $auth.currentUser.uid
      if (!userId) {
        throw new Error('UserId no existe')
      }
      const newTodo = {
        ...todo,
        userId,
        isCompleted: false,
        createdAt: new Date().toLocaleString()
      }

      await addDoc(collection($db, 'todos'), newTodo)
    } catch (error) {
      console.error('Error al crear todo', error)
    }
  }
}
