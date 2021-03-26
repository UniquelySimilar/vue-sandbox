<template>
  <div id="app" class="container">
    <vuex-module />
  </div>
</template>

<script>
  import VuexModule from '@/components/vuetest/vuex-module/VuexModule'

  export default {
    name: 'App',
    components: {
      VuexModule
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>