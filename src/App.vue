<template>
  <div id="app" class="container">
    <array-update />
  </div>
</template>

<script>
import ArrayUpdate from './components/ArrayUpdate.vue'

export default {
  name: 'App',
  components: {
    ArrayUpdate
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
