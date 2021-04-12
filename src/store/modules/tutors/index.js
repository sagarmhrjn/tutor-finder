import tutorActions from './actions'
import tutorMutations from './mutations'
import tutorGetters from './getters'


export default {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            tutors: [
                {
                    id: 'c1',
                    firstName: 'Sagar',
                    lastName: 'Maharjan',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "I'm Sagar and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Jenish',
                    lastName: 'Maharjan',
                    areas: ['frontend', 'career'],
                    description:
                        'I am Jenish and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                }
            ]
        }
    },
    mutations: tutorMutations,
    actions: tutorActions,
    getters: tutorGetters
}