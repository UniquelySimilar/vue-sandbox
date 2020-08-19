<template>
  <div id="app" class="container">
      <!--
    <digits-input :use-label="true" :num-digits="10">Digits Input</digits-input>
    <person-manager />
    -->
    <button type="button" v-on:click="displayModalHandler">Display Modal</button>
    <modal-dialog v-if="displayModal" v-on:closeModalEvt="closeModal" />
  </div>
</template>

<script>
//import PersonManager from './components/PersonManager.vue'
//import DigitsInput from './components/DigitsInput.vue'
import ModalDialog from './components/ModalDialog.vue'

export default {
  name: 'App',
  components: {
    //PersonManager,
    //DigitsInput
    ModalDialog
  },
  data() {
    return {
      displayModal: false
    }
  },
  methods: {
    displayModalHandler() {
      this.displayModal = true;
    },
    closeModal() {
      this.displayModal = false;
    }
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
