import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commonBgColor: 'navajowhite'
  },
  mutations: {
    updateBgColor(state, newColor) {
      state.commonBgColor = newColor;
    }
  }
})