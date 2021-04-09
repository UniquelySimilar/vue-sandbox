<template>
  <div id="app" class="container">
    <my-slider />
  </div>
</template>

<script>
  import MySlider from '@/components/stackoverflow/parent-child-relationship/MySlider'

  export default {
    name: 'App',
    components: {
      MySlider
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>