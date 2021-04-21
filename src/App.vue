<template>
  <div id="app" class="container">
    <mixin-plugin />
  </div>
</template>

<script>
  import MixinPlugin from '@/components/vuetest/plugins/MixinPlugin'

  export default {
    name: 'App',
    components: {
      MixinPlugin
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>