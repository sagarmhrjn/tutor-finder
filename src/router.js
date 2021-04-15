import { createRouter, createWebHistory } from 'vue-router'

import TutorsList from './pages/tutors/TutorsList'
import TutorRegistration from './pages/tutors/TutorRegistration'
import TutorDetail from './pages/tutors/TutorDetail'
import TutorContact from './pages/requests/TutorContact'
import RequestsReceived from './pages/requests/RequestsReceived'
import NotFound from './pages/NotFound'
import UserAuth from './pages/auth/UserAuth'
import store from './store'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/tutors' },
        { path: '/tutors', component: TutorsList },
        {
            path: '/tutors/:id',
            component: TutorDetail,
            props: true,
            children: [
                { path: 'contact', component: TutorContact },  //  /tutors/t1/contact
            ]
        },
        { path: '/register', component: TutorRegistration, meta: { requiresAuth: true } },
        { path: '/requests', component: RequestsReceived, meta: { requiresAuth: true } },
        { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenitcated) {
        next('/auth')
    } else if (to.meta.requiresUnauth && store.getters.isAuthenitcated) {
        next('/tutors')
    } else {
        next()
    }
})
export default router