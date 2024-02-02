import { createRouter, createWebHistory } from 'vue-router'

import helloWorldOptionApi from "@/views/HelloWorldOptionApi.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HelloWorldOptionsApi',
            component: helloWorldOptionApi
        }
    ]
});

export default router