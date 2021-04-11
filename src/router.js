import { create } from 'core-js/fn/object'
import { createRouter, createWebHistory } from 'vue-router'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/tutors' },
        { path: '/tutors', component: null },
        {
            path: '/tutors/:id', component: null, children: [
                { path: '/contact', component: null },  //  /tutors/t1/contact
            ]
        },
        { path: '/register', component: null },

        { path: '/requests', component: null },
        { path: '/tutors', component: null },
        { path: '/:notFound(.*)', component: null }
    ]
})