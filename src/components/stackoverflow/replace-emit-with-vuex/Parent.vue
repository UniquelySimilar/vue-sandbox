<template>
  <div class="parent">
    <h2>Parent.vue</h2>
    <div class="row">
      <div class="col-md-6">
        <label class="font-weight-bold">Message from Vuex: </label>
        <span>{{ message }}</span>
      </div>
    </div>
    <hr>
    <child />
  </div>
</template>

<script>
  import Child from './Child.vue'

  export default {
    components: {
      Child
    },
    computed: {
      message() {
        return this.$store.state.message;
      }
    }

  }
</script>

<style scoped>
  label {
    margin-right: 0.5rem;
  }
</style>