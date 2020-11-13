import { createRouter, createWebHashHistory } from "vue-router";
import commonRoutes from "./common";
import indexView from "../views/index.vue";
import { useCloudBase } from "../hooks/cloudbase";
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
    const app = useCloudBase();
    if (to.meta.requiredAuth) {
        if (app.auth().hasLoginState()) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});
router.afterEach((to, from) => { });
export default router;
