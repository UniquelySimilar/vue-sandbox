<template>
  <div id="app" class="container">
    <parent />
  </div>
</template>

<script>
  import Parent from '@/components/stackoverflow/slides-prop/Parent'

  export default {
    name: 'App',
    components: {
      Parent
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>