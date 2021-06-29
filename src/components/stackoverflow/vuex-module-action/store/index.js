import Vue from "vue";
import Vuex from "vuex";

import bookingFunnel from "../module/booking-funnel.js";

Vue.use(Vuex);

const store =  new Vuex.Store({
  modules: {
    bookingFunnel
  }
});

export default store;