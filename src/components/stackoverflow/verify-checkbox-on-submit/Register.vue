<template>
  <div class="register">
    <h4>Register</h4>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <checkbox-accept @terms-accepted-event="processCheckboxAccept" />
          <button type="submit" class="btn btn-secondary">Submit</button>
          <span v-if="displayWarning" class="warning">Please accept terms</span>
        </form>
      </div>
    </div>
    <h5 v-if="displaySuccess">Registration succeeded!</h5>
  </div>
</template>

<script>
  import CheckboxAccept from './CheckboxAccept';

  export default {
    components: {
      CheckboxAccept
    },
    data() {
      return {
        termsAccepted: false,
        displayWarning: false,
        displaySuccess: false
      }
    },
    methods: {
      processCheckboxAccept(accepted) {
        this.termsAccepted = accepted;
        this.displayWarning = false;
      },
      submitForm() {
        if (!this.termsAccepted) {
          this.displayWarning = true;
        }
        else {
          this.displaySuccess = true;
        }
      }
    }
  }
</script>

<style scoped>
  .warning {
    color: red;
    margin-left: 1rem;
  }
</style>