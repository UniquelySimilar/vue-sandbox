<template>
  <div id="app" class="container">
    <two-select-tags />
  </div>
</template>

<script>
  import TwoSelectTags from '@/components/stackoverflow/two-select-tags/TwoSelectTags'

  export default {
    name: 'App',
    components: {
      TwoSelectTags
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>