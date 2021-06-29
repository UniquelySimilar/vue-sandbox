<template>
  <div class="row">
    <div class="col-md-6">
      <h3>Vuex Module Action</h3>
      <button type="button" class="btn btn-secondary" @click="updateId">Update Vehicle ID</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    updateId() {
      this.$store.dispatch('bookingFunnel/updateVehicleId', 2);
    },
  },
  created() {
    console.log(this.$store.getters['bookingFunnel/getVehicleId']);
  }
}
</script>