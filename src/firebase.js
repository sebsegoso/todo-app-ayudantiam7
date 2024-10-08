// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// db
const $db = getFirestore(app)

//  auth

const $auth = getAuth(app)

const provider = new GoogleAuthProvider()

const loginWithGoogle = () => signInWithPopup($auth, provider)
const logout = () => signOut($auth)

export { $db, $auth, loginWithGoogle, logout }
