import authActions from './actions'
import authMutations from './mutations'
import authGetters from './getters'

export default {
    state() {
        return {
            userId: 'c1'
        }
    },
    mutations: authMutations,
    actions: authActions,
    getters: authGetters
}