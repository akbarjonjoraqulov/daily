import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from "../pages/Dashboard.vue";
import Contacts from "../pages/Contacts.vue";
import ContactDetail from "../pages/ContactDetail.vue";
import MeetingNotes from "../pages/MeetingNotes.vue";
import AddContact from "../pages/AddContact.vue";
import SignUp from "@/pages/SignUp.vue";

const routes = [
    {
        path: "/",
        name: "singUp",
        component: SignUp,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts,
    },
    {
        path: '/contacts/:id',
        name: 'contactDetail',
        component: ContactDetail,
    },
    {
        path: '/meetingnotes',
        name: 'meetingNotes',
        component: MeetingNotes,
    },
    {
        path: '/addContact',
        name: 'addContact',
        component: AddContact,
    },
];
export default createRouter({
    history: createWebHistory(),
    routes,
})
