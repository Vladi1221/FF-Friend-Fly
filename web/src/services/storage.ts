import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from './firebase'

export async function subirFotoTicket(gastoId: string, file: Blob) {
  const fotoRef = ref(storage, `tickets/${gastoId}`)
  await uploadBytes(fotoRef, file)
  return getDownloadURL(fotoRef)
}
