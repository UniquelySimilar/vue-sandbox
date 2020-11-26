<template>
  <div id="app" class="container">
    <h3>Vue Sandbox</h3>
    <select-test />
  </div>
</template>

<script>
  import SelectTest from './components/selecttest/SelectTest.vue'
  
  export default {
    name: 'App',
    components: {
      SelectTest
    },
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
