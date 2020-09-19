export default [
    {
        name: "login",
        path: "/login",
        meta: {
            requiredAuth: false,
        },
        component: () => import("../views/common/login.vue"),
    },
    {
        name: "register",
        path: "/register",
        meta: {
            requiredAuth: false,
        },
        component: () => import("../views/common/register.vue"),
    },
];
