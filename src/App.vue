<template>
  <div id="app" class="container">
    <access-this-in-foreach />
  </div>
</template>

<script>
  import AccessThisInForeach from '@/components/vuetest/misc/AccessThisInForeach'

  export default {
    name: 'App',
    components: {
      AccessThisInForeach
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>