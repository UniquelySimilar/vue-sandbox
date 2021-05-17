<template>
  <div id="app" class="container">
    <async-in-loop />
  </div>
</template>

<script>
  import AsyncInLoop from '@/components/vue-help-forum/async-in-loop/AsyncInLoop'

  export default {
    name: 'App',
    components: {
      AsyncInLoop
    },
    data() {
      return {
      }
    }
  }
</script>
