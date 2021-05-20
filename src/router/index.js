import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: "/",
        name: "Login",
        component:  () => import('../views/login/login.vue'),
    },
    {
        path: "/index",
        name: "Index",
        component:  () => import('../views/index/index.vue'),
    },
    {
        path: "/error",
        name: "Error",
        component:  () => import('../views/error/error.vue'),
    },
];

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;