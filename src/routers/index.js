import { createRouter, createWebHashHistory } from "vue-router";
import commonRoutes from "./common";
import store from "../stores";
import indexView from "../views/index.vue";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...commonRoutes,
        {
            name: "index",
            path: "/",
            meta: {
                requiredAuth: true,
            },
            component: indexView,
        },
    ],
});
router.beforeEach((to, from, next) => {
    if (to.meta.requiredAuth) {
        if (!!store.state.userToken) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});
router.afterEach((to, from) => {});
export default router;
