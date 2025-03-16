import { createRouter, createWebHistory } from 'vue-router';
import Loginpage from '@/components/Loginpage.vue';

const routes = [
    { path: '/', name: 'Login', component: Loginpage }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Use correct base path
    routes
});

export default router;