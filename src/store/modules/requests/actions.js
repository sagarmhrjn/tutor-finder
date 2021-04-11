export default {
    contactTutor(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            tutorId: payload.tutorId,
            userEmail: payload.email,
            message: payload.message
        }
        context.commit('addRequest', newRequest)
    }
}