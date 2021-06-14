<template>
  <div id="app" class="container">
    <sort-by-date />
  </div>
</template>

<script>
  import SortByDate from '@/components/vue-help-forum/sort-by-date/SortByDate'

  export default {
    name: 'App',
    components: {
      SortByDate
    },
    data() {
      return {
      }
    }
  }
</script>
