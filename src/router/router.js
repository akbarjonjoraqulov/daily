import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: "/",
        component: () => import("@/pages/SignUp.vue")
    },
    {
        path: '/dashboard',
        component: () => import("@/pages/Dashboard.vue")
    },
    {
        path: '/contacts',
        component: () => import("@/pages/Contacts.vue")
    },
    {
        path: '/contacts/:id',
        component: () => import("@/pages/ContactDetail.vue")
    },
    {
        path: '/meeting notes',
        component: () => import("@/pages/MeetingNotes.vue")
    },
    {
        path: '/addContact',
        component: () => import("@/pages/AddContact.vue")
    },
];
export default createRouter({
    history: createWebHistory(),
    routes,
})
