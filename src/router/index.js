import { createRouter, createWebHistory } from 'vue-router';
import Loginpage from '@/components/Loginpage.vue';
import Registration from '@/components/Registration.vue';
import Dashboard from '@/components/Dashboard.vue';

const routes = [
    { path: '/', name: 'Registration', component: Registration }, // Default page
    { path: '/login', name: 'Login', component: Loginpage },// Moved login to '/login'
    { path: '/dashboard', name: 'Dashboard', component: Dashboard}
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
