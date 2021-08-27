export function setTheme (val) {
  return localStorage.setItem('vite-block-theme', val)
}
export function getTheme () {
  return localStorage.getItem('vite-block-theme')
}

export function getDefaultTheme () {
  return getComputedStyle(document.querySelector('body')).getPropertyValue('--el-color-primary')
}
export function setDefaultTheme (color) {
  document.querySelector('body').style.setProperty('--el-color-primary', color)
}
