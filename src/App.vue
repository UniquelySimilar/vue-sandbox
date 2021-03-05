<template>
  <div id="app" class="container">
    <ticket-wrapper />
  </div>
</template>

<script>
  import TicketWrapper from '@/components/stackoverflow/get-nested-elements/TicketWrapper'
  
  export default {
    name: 'App',
    components: {
      TicketWrapper
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>