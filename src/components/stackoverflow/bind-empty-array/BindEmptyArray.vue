<template>
  <div class="bind-empty-array">
    <h2>BindEmptyArray.vue</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group" v-for="(input, index) in inputs" :key="index">
        <label>{{ input.label }}</label>
        <input type="text" class="form-control" v-model="inputValues[index]">
     </div>
     <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        inputs: [
          {
            label: 'Input One'
          },
          {
            label: 'Input Two'
          }
        ],
        inputValues: []
      }
    },
    methods: {
      submitForm() {
        this.inputValues.forEach( element => console.log(element) )
      }
    }
  }
</script>