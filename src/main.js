import {createApp} from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import './style.css'
import router from "./router/router.js";

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
