<template>
  <div id="app" class="container">
    <sort-table-by-columns />
  </div>
</template>

<script>
  import SortTableByColumns from '@/components/stackoverflow/misc/SortTableByColumns'

  export default {
    name: 'App',
    components: {
      SortTableByColumns
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>