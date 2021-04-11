import requestActions from './actions'
import requestMutations from './mutations'
import requestGetters from './getters'

export default {
    namespaced: true,
    state() {
        return {
            requests: []
        }
    },
    mutations: requestMutations,
    actions: requestActions,
    getters: requestGetters
}