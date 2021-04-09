<template>
  <div id="app" class="container">
    <flash-error-auto-close />
  </div>
</template>

<script>
  import FlashErrorAutoClose from '@/components/stackoverflow/misc/FlashErrorAutoClose'

  export default {
    name: 'App',
    components: {
      FlashErrorAutoClose
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>