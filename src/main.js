import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './routers'
import store from './stores'
import commonPlugin from './plugins/common'
createApp(App).use(router).use(store).use(commonPlugin).mount('#app')
