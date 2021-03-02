import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: 'Initial message'
  },
  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage;
    }
  }
})

export default store;