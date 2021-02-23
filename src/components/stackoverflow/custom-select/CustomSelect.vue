<template>
  <div class="custom-select">
    <select v-model="selectedContinent" class="" v-on:change="changeContinent">
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: ['id', 'selected', 'label', 'options'],
    data() {
      return {
        selectedContinent: this.selected
      }
    },
    methods: {
      changeContinent() {
        //console.log('changeContinent: ' + this.selectedContinent);
        this.$emit('change-continent-event', this.selectedContinent);
      }
    }
  }
</script>