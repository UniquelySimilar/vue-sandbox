<template>
  <div id="app" class="container">
    <responsive-grid-view />
  </div>
</template>

<script>
  import ResponsiveGridView from './components/ResponsiveGridView.vue'

  export default {
    name: 'App',
    components: {
      ResponsiveGridView
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
