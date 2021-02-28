<template>
  <div class="router-props">
    <h3>RouterProps.vue</h3>
    <div class="row">
      <div class="col-md-6">
        <router-link class="btn btn-primary" :to="{ name: 'home'}">Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // props: {
    //   id: {
    //     type: Number,
    //     required: true
    //   }
    // }
  }
</script>