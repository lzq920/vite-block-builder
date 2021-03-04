import directives from '../directives'
import mixin from '../mixins'
import lodash from 'lodash'
export default {
  install: (app, options) => {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
    app.mixin(mixin)
    app.config.globalProperties.lodash = lodash
  }
}
