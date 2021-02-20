<template>
  <div id="app" class="container">
    <parent />
  </div>
</template>

<script>
  import Parent from '@/components/vuetest/react-to-vuex/Parent'

  export default {
    name: 'App',
    components: {
      Parent
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>