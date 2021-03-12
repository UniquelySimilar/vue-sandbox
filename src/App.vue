<template>
  <div id="app" class="container">
    <multi-concurrent-reqs />
  </div>
</template>

<script>
  import MultiConcurrentReqs from '@/components/vuetest/misc/MultiConcurrentReqs'

  export default {
    name: 'App',
    components: {
      MultiConcurrentReqs
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>