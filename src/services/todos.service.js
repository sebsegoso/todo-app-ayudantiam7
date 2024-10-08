import { $auth, $db } from '@/firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'

const TODOS_COLLECTION = 'todos'

export class ToDosService {
  // leer tareas
  async fetchToDos() {
    try {
      const userId = $auth.currentUser.uid
      if (!userId) {
        throw new Error('UserId no existe')
      }

      const q = query(collection($db, TODOS_COLLECTION), where('userId', '==', userId))

      const querySnapshot = await getDocs(q)
      const todos = []
      querySnapshot.forEach((doc) => {
        todos.push({ id: doc.id, ...doc.data() })
      })
      return todos
    } catch (error) {
      console.error('Error al hacer fetch de todos', error)
      return []
    }
  }

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

      await addDoc(collection($db, TODOS_COLLECTION), newTodo)
    } catch (error) {
      console.error('Error al crear todo', error)
    }
  }

  //   eliminar una tarea
  async deleteToDo(id) {
    try {
      const todoRef = doc($db, TODOS_COLLECTION, id)
      await deleteDoc(todoRef)
    } catch (error) {
      console.error('Error al eliminar todo', error)
    }
  }
}
