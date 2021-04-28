<template>
  <div id="app" class="container">
    <import-local-js />
  </div>
</template>

<script>
  import ImportLocalJs from '@/components/vuetest/import-local-js/ImportLocalJs'

  export default {
    name: 'App',
    components: {
      ImportLocalJs
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>