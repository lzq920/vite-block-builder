export function getToken () {
  return localStorage.getItem('vite-block-token')
}

export function setToken (val) {
  return localStorage.setItem('vite-block-token', val)
}
