import { createRouter, createWebHistory } from 'vue-router'

import TutorsList from './pages/tutors/TutorsList'
import TutorRegistration from './pages/tutors/TutorRegistration'
import TutorDetail from './pages/tutors/TutorDetail'
import TutorContact from './pages/requests/TutorContact'
import RequestsReceived from './pages/requests/RequestsReceived'
import NotFound from './pages/NotFound'
import UserAuth from './pages/auth/UserAuth'

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
        { path: '/register', component: TutorRegistration },
        { path: '/requests', component: RequestsReceived },
        { path: '/auth', component: UserAuth },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})

export default router