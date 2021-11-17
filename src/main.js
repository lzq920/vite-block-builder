import { createApp } from 'vue'
import App from './App.vue'
import './assets/base/tailwind.css'
import router from './routers'
import store from './stores'
import elementPlus from './plugins/element-plus'
import elementPlusIcons from './plugins/element-plus-icon'

createApp(App).use(router).use(store).use(elementPlus, {}).use(elementPlusIcons).mount('#app')
