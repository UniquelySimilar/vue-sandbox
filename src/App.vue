<template>
  <div id="app" class="container">
    <dynamic-form-object :userProperties="userProperties" />
  </div>
</template>

<script>
  import DynamicFormObject from '@/components/vue-help-forum/DynamicFormObject'

  export default {
    name: 'App',
    components: {
      DynamicFormObject
    },
    data() {
      return {
        userProperties: {
          id: 0,
          name: '',
          email: ''
        }
      }
    }
  }
</script>

<style>

</style>