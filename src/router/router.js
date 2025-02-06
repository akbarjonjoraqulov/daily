import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "../pages/HomePage.vue";
import Dashboard from "../pages/Dashboard.vue";
import Contacts from "../pages/Contacts.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/D',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/',
        name: 'contacts',
        component: Contacts,
    },
];
export default createRouter({
    history: createWebHistory(),
    routes,
})
