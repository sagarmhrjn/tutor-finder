import authActions from './actions'
import authMutations from './mutations'
import authGetters from './getters'

export default {
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null
        }
    },
    mutations: authMutations,
    actions: authActions,
    getters: authGetters
}