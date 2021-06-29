export default {
  namespaced: true,
  state: {
    vehicleId: null,
  },
  getters: {
    getVehicleId(state) {
      return state.vehicleId;
    }
  },
  mutations: {
    setVehicleId(state, payload) {
      state.vehicleId = payload;
      console.log(state.vehicleId);
    },
  },
  actions: {
    updateVehicleId(context, payload) {
      context.commit('setVehicleId', payload)
    }
  },
};