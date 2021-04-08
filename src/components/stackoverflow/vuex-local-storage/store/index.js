import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',
    localStorage: window.localStorage
  },
  getters: {
    getTokenFromLocalStorage: state => {
      return state.localStorage.getItem('accessToken');
    }
  },
  mutations: {
    storeTokenInLocalStorage(state, newToken) {
      state.accessToken = newToken;
      state.localStorage.setItem('accessToken', newToken);
    }
  }
})
