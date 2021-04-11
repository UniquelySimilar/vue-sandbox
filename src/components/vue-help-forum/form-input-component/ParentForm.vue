<template>
  <div class="parent-form">
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <child-input inputId="input-one" inputLabel="Input One"
            eventName="input-one-event" @input-one-event="inputOneEvent" />
          <child-input inputId="input-two" inputLabel="Input Two"
            eventName="input-two-event" @input-two-event="inputTwoEvent" />
          <button class="btn btn-secondary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import ChildInput from './ChildInput.vue'

  export default {
    components: {
      ChildInput
    },
    data() {
      return {
        inputOneValue: '',
        inputTwoValue: ''
      }
    },
    methods: {
      submitForm() {
        console.log('form submitted')
        console.log('inputOneValue: ' + this.inputOneValue);
        console.log('inputTwoValue: ' + this.inputTwoValue);
        // Process form
      },
      inputOneEvent(newValue) {
        this.inputOneValue = newValue;
      },
      inputTwoEvent(newValue) {
        this.inputTwoValue = newValue;
      },
    }
  }
</script>