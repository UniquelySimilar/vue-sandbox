<template>
  <div class="parent">
    <h4>Home</h4>
    <div class="row">
      <div class="col-md-6">
        <router-link class="btn btn-primary" :to="{ name: 'productall', params: { id: productId } }">Product All</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        productId: '603aaaf5dead94fee94d2811'
      }
    }
  }
</script>