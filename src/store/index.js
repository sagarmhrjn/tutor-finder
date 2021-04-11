import { createStore } from 'vuex'

import tutorsModule from './modules/tutors'


const store = createStore({
    modules: {
        tutors: tutorsModule
    }
})

export default store