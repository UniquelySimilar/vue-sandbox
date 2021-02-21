<template>
  <div id="app" class="container">
    <selected-row-users />
  </div>
</template>

<script>
  import SelectedRowUsers from '@/components/vue-help-forum/selected-rows/SelectedRows'

  export default {
    name: 'App',
    components: {
      SelectedRowUsers
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>