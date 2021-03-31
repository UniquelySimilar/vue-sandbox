<template>
  <div class="product-all">
    <h4>Product All</h4>
    <div class="row">
      <div class="col-md-6">
        <router-link class="btn btn-secondary" :to="{ name: 'home' }">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    }
  }
</script>