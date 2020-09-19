import { createRouter, createWebHashHistory } from "vue-router";
import commonRoutes from "./common";
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
            component: () => import("../views/index.vue"),
        },
    ],
});
router.beforeEach((to, from, next) => {
    console.log(to);
    next();
});
router.afterEach((to, from) => {
    console.log(from);
});
export default router;
