<template>
  <div class="child-input">
    <div class="form-group">
      <label :for="inputId">{{ inputLabel }}</label>
      <input type="text" class="form-control" :id="inputId" v-model="inputValue" @change="sendValue">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      inputLabel: {
        type: String,
        required: true
      },
      inputId: {
        type: String,
        required: true
      },
      eventName: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        inputValue: ''
      }
    },
    methods: {
      sendValue() {
        this.$emit(this.eventName, this.inputValue);
      }
    }
  }
</script>