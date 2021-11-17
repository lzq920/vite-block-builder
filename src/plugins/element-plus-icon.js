import * as elementPlusIcons from '@element-plus/icons'

const ElementPlusIconsPlugin = {}
ElementPlusIconsPlugin.install = function (app) {
  for (const icon in elementPlusIcons) {
    app.component(`ElIcon${icon}`, elementPlusIcons[icon])
  }
}
export default ElementPlusIconsPlugin
