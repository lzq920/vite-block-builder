export const baseURL = import.meta.env.VITE_BASE_URL

export const accessKey = import.meta.env.VITE_ACCESS_KEY

export const secretKey = import.meta.env.VITE_SECRET_KEY

export async function digestMessage (message) {
  const msgUint8 = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}
