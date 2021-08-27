import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import zhLang from 'element-plus/es/locale/lang/zh-cn'
import '../assets/base/element-plus.scss'
Plugin.install = function (app, options) {
  const defaultConfig = {
    size: 'small', zIndex: 3000, locale: zhLang
  }
  app.use(ElementPlus, { ...defaultConfig, ...options })
}

export default Plugin
