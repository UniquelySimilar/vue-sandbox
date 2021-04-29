<template>
  <div id="app" class="container">
    <router-params-change-navbar />
    <router-view></router-view>
  </div>
</template>

<script>
  import RouterParamsChangeNavbar from '@/components/stackoverflow/router-params-change/RouterParamsChangeNavbar'

  export default {
    name: 'App',
    components: {
      RouterParamsChangeNavbar
    },
    data() {
      return {
      }
    }
  }
</script>
