import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from "../pages/Dashboard.vue";
import Contacts from "../pages/Contacts.vue";
import ContactDetail from "../pages/ContactDetail.vue";
import MeetingNotes from "../pages/MeetingNotes.vue";
import AddContact from "../pages/AddContact.vue";

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
    },
    {
        path: '/',
        name: 'contacts',
        component: Contacts,
    },
    {
        path: '/',
        name: 'contactDetail',
        component: ContactDetail,
    },
    {
        path: '/',
        name: 'meetingNotes',
        component: MeetingNotes,
    },
    {
        path: '/',
        name: 'addContact',
        component: AddContact,
    },
];
export default createRouter({
    history: createWebHistory(),
    routes,
})
