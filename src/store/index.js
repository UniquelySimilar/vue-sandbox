import Vue from 'vue'
import Vuex from 'vuex'

//import { persons } from '../globalvars'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        //persons
    },
    getters: {
        // malePersons: state => {
        //     return state.persons.filter(person => person.gender == 'male');
        // },
        // femalePersons: state => {
        //     return state.persons.filter(person => person.gender == 'female');
        // }
    },
    mutations: {
        increment(state, number) {
            state.count += number
        }
      
        // addPerson(state, person) {
        //     state.persons.push(person);
        // }
    }

})