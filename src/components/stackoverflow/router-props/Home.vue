<template>
  <div class="home">
    <h3>Home.vue</h3>
    <div class="row">
      <div class="col-md-3">
        <router-link class="btn btn-primary" :to="{ name: 'routerProps', params: { id: this.id }}">RouterProps via link</router-link>
      </div>
      <div class="col-md-3">
        <button class="btn btn-primary" type="button" @click="goRouterProps">RouteProps via push</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: 1
      }
    },
    methods: {
      goRouterProps() {
        this.$router.push({ name: 'routerProps', params: { id: undefined }})
        //this.$router.push({ name: 'routerProps', params: { id: this.id }})
      }
    }
  }
</script>