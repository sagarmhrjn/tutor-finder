export default {
    registerTutor(context, data) {
        const tutorData = {
            id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            areas: data.areas,
            description: data.desc,
            hourlyRate: data.rate
        }
        context.commit('registerTutor', tutorData)
    }
}