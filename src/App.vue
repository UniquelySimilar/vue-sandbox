<template>
  <div id="app" class="container">
    <email-validation />
  </div>
</template>

<script>
  import EmailValidation from '@/components/stackoverflow/misc/EmailValidation'
  export default {
    name: 'App',
    components: {
      EmailValidation
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>