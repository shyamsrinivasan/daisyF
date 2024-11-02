import { createRouter, createWebHistory } from 'vue-router'


const routes: Array<any> = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/components/Home.vue"), 
        children: [
            {
                path: "profile/:user_id",
                name: "UserProfile",
                components: () => import("@/views/user/Profile.vue"),
            },            
        ],               
    },
    {
        path: "/login",
        name: "Login",
        // component: () => import("@/components/Login.vue"),
        redirect: { name: "Home" }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router

