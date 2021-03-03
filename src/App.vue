<template>
  <div id="app" class="container">
    <router-wildcard-navbar />
    <router-view></router-view>
  </div>
</template>

<script>
  import RouterWildcardNavbar from '@/components/stackoverflow/router-wildcard-match/RouterWildcardNavbar'
  
  export default {
    name: 'App',
    components: {
      RouterWildcardNavbar
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>