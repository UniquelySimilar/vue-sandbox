<template>
  <div id="app" class="container">
    <bind-multiple-checkboxes />
  </div>
</template>

<script>
  import BindMultipleCheckboxes from '@/components/stackoverflow/misc/BindMultipleCheckboxes'

  export default {
    name: 'App',
    components: {
      BindMultipleCheckboxes
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>