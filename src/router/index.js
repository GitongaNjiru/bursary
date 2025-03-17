import { createRouter, createWebHistory } from 'vue-router';
import Loginpage from '@/components/Loginpage.vue';
import Registration from '@/components/Registration.vue';
import Dashboard from '@/components/Dashboard.vue';
import Application from '@/components/Application.vue';

const routes = [
    { path: '/', name: 'Registration', component: Registration },
    { path: '/login', name: 'Login', component: Loginpage },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/application', name: 'Application', component: Application }, // Add this route
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
