<template>
  <div id="app" class="container">
    <person-manager />
  </div>
</template>

<script>
  import PersonManager from '@/components/person/PersonManager'
  
  export default {
    name: 'App',
    components: {
      PersonManager
    }
  }
</script>

<style>

</style>
