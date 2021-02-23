<template>
  <div id="app" class="container">
    <parent :user="user" />
  </div>
</template>

<script>
  import Parent from '@/components/stackoverflow/custom-select/Parent'

  export default {
    name: 'App',
    components: {
      Parent
    },
    data() {
      return {
        user: {
          continent: 'africa'
        }
      }
    }
  }
</script>

<style>

</style>