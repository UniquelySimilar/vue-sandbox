<template>
  <div id="app" class="container">
    <h3>Vue Sandbox</h3>
    <css-grid-layout />
  </div>
</template>

<script>
  import CssGridLayout from './components/CssGridLayout.vue'
  
  export default {
    name: 'App',
    components: {
      CssGridLayout
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
