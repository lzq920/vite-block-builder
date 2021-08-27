import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

Plugin.install = function (app, options) {
  const defaultConfig = {

  }
  app.use(ElementPlus, { ...defaultConfig, ...options })
}

export default Plugin
