<template>
  <div id="app" class="container">
    <reporter-tickets :dev="[]" />
  </div>
</template>

<script>
  import ReporterTickets from '@/components/vue-help-forum/ReporterTickets'
  
  export default {
    name: 'App',
    components: {
      ReporterTickets
    }
  }
</script>

<style>

</style>
