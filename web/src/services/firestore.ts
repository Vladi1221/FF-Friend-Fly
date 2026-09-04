import { collection } from 'firebase/firestore'
import { db } from './firebase'

export const usuariosRef = collection(db, 'usuarios')
export const gruposRef = collection(db, 'grupos')
