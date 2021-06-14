import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    unsortedDates: [
      { id: 1, date: '2019-06-28' },
      { id: 2, date: '2019-06-10' },
      { id: 3, date: '2019-06-22' }
    ]
  },
  getters: {
    sortedDates: state => {
      return state.unsortedDates.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
    }
  },
})
