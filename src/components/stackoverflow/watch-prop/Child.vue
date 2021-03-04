<template>
  <div class="child">
    <hr>
    <div class="row">
      <div class="col-md-6">
        <label>Message in child from watched prop:</label>{{ dataMessage }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      propMessage: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        dataMessage: this.propMessage
      }
    },
    watch: {
      propMessage(newMessage) {
        this.dataMessage = newMessage;
      }
    }
  }
</script>

<style scoped>
  label {
    font-weight: bold;
    margin-right: 0.5rem;
  }
</style>