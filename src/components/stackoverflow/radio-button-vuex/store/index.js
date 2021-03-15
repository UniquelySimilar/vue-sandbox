import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    radioSelections: [
      {
        picked: 'One'
      },
      {
        picked: 'Two'
      }
    ]
  },
  mutations: {
    updateSelection(state, payload) {
      state.radioSelections[payload.index].picked = payload.newValue;
    }
  }
})