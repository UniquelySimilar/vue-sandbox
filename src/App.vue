<template>
  <div id="app" class="container">
    <digits-input :use-label="true" :num-digits="10">Digits Input</digits-input>
  </div>
</template>

<script>
//import PersonManager from './components/PersonManager.vue'
import DigitsInput from './components/DigitsInput.vue'

export default {
  name: 'App',
  components: {
    //PersonManager,
    DigitsInput
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
