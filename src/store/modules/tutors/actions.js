export default {
    async registerTutor(context, data) {
        const userId = context.rootGetters.userId
        const tutorData = {
            firstName: data.first,
            lastName: data.last,
            areas: data.areas,
            description: data.desc,
            hourlyRate: data.rate
        }

        const response = await fetch(`https://vue-http-demo-c43fa-default-rtdb.firebaseio.com/tutors/${userId}.json`,
            {
                method: 'PUT',
                body: JSON.stringify(tutorData)
            })

        if (!response.ok) {
            // error todo
        }

        context.commit('registerTutor', {
            ...tutorData,
            id: userId
        })
    }
}