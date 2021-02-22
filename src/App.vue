<template>
  <div id="app" class="container">
    <bind-empty-array />
  </div>
</template>

<script>
  import BindEmptyArray from '@/components/stackoverflow/bind-empty-array/BindEmptyArray'

  export default {
    name: 'App',
    components: {
      BindEmptyArray
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>