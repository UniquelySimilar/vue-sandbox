<template>
  <div class="radio-button-test">
    <div v-for="(radioValue, index) in radioValues" :key="index">
      <input type="radio" :value="radioValue" v-model="picked" @change="valuePicked">
      <label>{{ radioValue }}</label>
      <br>
    </div>
    <span>Picked: {{ picked }}</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        picked: 'One',
        radioValues: [
          'One',
          'Two'
        ]
      }
    },
    methods: {
      valuePicked() {
        console.log(this.picked);
      }
    }
  }
</script>