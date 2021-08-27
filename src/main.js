import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routers'
import store from './stores'
import ElementPlus from './plugins/element-plus'
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
