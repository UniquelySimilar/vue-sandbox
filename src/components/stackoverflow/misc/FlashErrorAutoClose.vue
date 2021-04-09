<template>
  <div class="flash-error-auto-close">
    <h4>Flash Error with Auto Close</h4>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-secondary" @click="triggerTimedErrorDisplay">Show Flash Error</button>
        <div id="flash-error" v-if="displayError" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        errorMessage: 'This is the error message',
        displayError: false,
        displayTime: 5000
      }
    },
    methods: {
      triggerTimedErrorDisplay() {
        this.displayError = true;

        setTimeout( () => {
          this.displayError = false;
        }, this.displayTime);
      }
    }
  }
</script>

<style scoped>
  #flash-error {
    margin-top: 0.5rem;
  }
</style>