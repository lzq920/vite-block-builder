import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./routers";
import store from "./stores";
import commonPlugin from "./plugins/common";
createApp(App).use(Antd).use(router).use(store).use(commonPlugin).mount("#app");
