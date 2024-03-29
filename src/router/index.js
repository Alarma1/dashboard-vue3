import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorPage from "../views/ErrorPage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'error',
            component: ErrorPage
        },
    ]
})

export default router
