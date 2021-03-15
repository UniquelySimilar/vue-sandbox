<template>
  <div class="parent">
    <h3>Parent.vue</h3>
    <radio-button-vuex :pickedIndex="0" />
    <radio-button-vuex :pickedIndex="1" />
  </div>
</template>

<script>
  import RadioButtonVuex from './RadioButtonVuex.vue'

  export default {
    components: {
      RadioButtonVuex
    }
  }
</script>