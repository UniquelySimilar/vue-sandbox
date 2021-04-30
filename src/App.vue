<template>
  <div id="app" class="container">
    <parent />
  </div>
</template>

<script>
  import Parent from '@/components/stackoverflow/change-siblings-color/Parent'

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
