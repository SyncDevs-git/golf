import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'

import App from './App.vue'
import Animals from './Animals.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Animals },
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')