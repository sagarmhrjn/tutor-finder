import { createStore } from 'vuex'

import tutorsModule from './modules/tutors'
import requestsModule from './modules/requests'


const store = createStore({
    modules: {
        tutors: tutorsModule,
        requests: requestsModule
    },
    state() {
        return {
            userId: 'c1'
        }
    },
    getters: {
        userId(state) {
            return state.userId
        }
    }
})

export default store