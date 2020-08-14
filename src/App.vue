<template>
  <div id="app" class="container">
    <!--
    <person-manager />
    -->
    <phone-filter />
  </div>
</template>

<script>
//import PersonManager from './components/PersonManager.vue'
import PhoneFilter from './components/PhoneFilter.vue'

export default {
  name: 'App',
  components: {
    //PersonManager,
    PhoneFilter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
