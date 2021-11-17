import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import zhLang from 'element-plus/es/locale/lang/zh-cn'
import '../assets/base/element-plus.scss'

const ElementPlusPlugin = {}
ElementPlusPlugin.install = function (app, options) {
  app.use(ElementPlus, {
    locale: zhLang
  })
}

export default ElementPlusPlugin
