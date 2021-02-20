import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [
      'Initial message'
    ]
  },
  mutations: {
    updateMessage(state, newMessage) {
      state.messages.push(newMessage);
    }
  }
})