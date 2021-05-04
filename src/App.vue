<template>
  <div id="app" class="container">
    <parent />
  </div>
</template>

<script>
  import Parent from '@/components/stackoverflow/bootstrap-modal-no-jquery/Parent'

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
