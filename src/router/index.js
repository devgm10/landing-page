import { createRouter, createWebHistory } from 'vue-router';

import MainLayout from '@/layouts/MainLayout.vue';
import NotFound from '@/views/NotFound.vue';
import LandingView from '@/views/landing/LandingView.vue';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: LandingView,
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
