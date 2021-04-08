<template>
  <div id="app" class="container">
    <vuex-local-storage />
  </div>
</template>

<script>
  import VuexLocalStorage from '@/components/stackoverflow/vuex-local-storage/VuexLocalStorage'

  export default {
    name: 'App',
    components: {
      VuexLocalStorage
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>