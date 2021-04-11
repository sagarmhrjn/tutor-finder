export default {
    tutors(state) {
        return state.tutors
    },
    hasTutors(state) {
        return state.tutors && state.tutors.length > 0
    },
    // state, getters, rootState, rootGetters
    isTutor(_, getters, _2, rootGetters) {
        const tutors = getters.tutors
        const userId = rootGetters.userId
        // check if user id is present in tutor object id
        return tutors.some(tutor => tutor.id === userId)
    }
}