<template>
  <div id="app" class="container">
    <parent-form />
  </div>
</template>

<script>
  import ParentForm from '@/components/vue-help-forum/form-input-component/ParentForm'

  export default {
    name: 'App',
    components: {
      ParentForm
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>