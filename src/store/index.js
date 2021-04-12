import { createStore } from 'vuex'

import tutorsModule from './modules/tutors'
import requestsModule from './modules/requests'
import authModule from './modules/auth'

const store = createStore({
    modules: {
        tutors: tutorsModule,
        requests: requestsModule,
        auth: authModule
    },
})

export default store