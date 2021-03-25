<template>
  <div class="parent">
    <h4>Home</h4>
    <div class="row">
      <div class="col-md-6">
        <router-link class="btn btn-primary" :to="{ name: 'detail', params: { id: detailId } }">Show Detail</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        detailId: 1
      }
    }
  }
</script>