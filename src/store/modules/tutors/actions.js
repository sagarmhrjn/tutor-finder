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

        const token = context.rootGetters.token;

        const response = await fetch(`https://vue-http-demo-c43fa-default-rtdb.firebaseio.com/tutors/${userId}.json?auth=${token}`,
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
    },
    async loadTutors(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return
        }
        const response = await fetch(`https://vue-http-demo-c43fa-default-rtdb.firebaseio.com/tutors.json`)

        const responseData = await response.json()

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!')
            throw error
        }

        const tutors = []

        for (const key in responseData) {
            const tutor = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                areas: responseData[key].areas,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate
            }
            tutors.push(tutor)
        }
        context.commit('setTutors', tutors)
        context.commit('setFetchTimeStamp')
    }
}