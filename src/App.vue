<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-2">
        <router-link :to="{ name: 'userDetail', params: { id: 1 } }">User 1</router-link>
      </div>
      <div class="col-md-2">
        <router-link :to="{ name: 'userDetail', params: { id: 2 } }">User 2</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style>

</style>
