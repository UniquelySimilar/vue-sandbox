<template>
  <div id="app" class="container">
    <clear-filters />
  </div>
</template>

<script>
  import ClearFilters from '@/components/stackoverflow/clear-filters/ClearFilters'

  export default {
    name: 'App',
    components: {
      ClearFilters
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>