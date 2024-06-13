import { createRouter,createWebHistory } from 'vue-router';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
import Home from '../views/Home.vue';
import Services from '../views/Services.vue';
import CV from '../views/CV.vue';
import Portfolio from '../views/Portfolio.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
            },
            {
                path: '/services',
                name: 'Services',
                component: Services,
            },
            {
                path: '/cv',
                name: 'CV',
                component: CV,
            },
            {
                path: '/portfolio',
                name: 'Portfolio',
                component: Portfolio,
            },
            {
                path: '/blog',
                name: 'Blog',
                component: Blog,
            },
            {
                path: '/contact',
                name: 'Contact',
                component: Contact,
            },
        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
        children: [
    
        ],
    },
];

const router  = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;