<template>
  <div id="app" class="container">
    <import-object-to-data />
  </div>
</template>

<script>
  import ImportObjectToData from '@/components/stackoverflow/import-object-to-data/ImportObjectToData'

  export default {
    name: 'App',
    components: {
      ImportObjectToData
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>