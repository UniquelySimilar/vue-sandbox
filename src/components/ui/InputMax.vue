<template>
  <div class="input-max">
    <div class="form-row">
        <div class="col-md-8">
          <input class="form-control" type="text" placeholder="Address"
            v-model="address" @keyup="updateAddress">
        </div>
        <div class="col-md-4">
          <span v-if="displayWarning" class="error-msg">* You can only enter {{ maxLength }} characters</span>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        address: '',
        previousAddress: '',
        maxLength: 15,
        displayWarning: false
      }
    },
    methods: {
      updateAddress(event) {
        let newValue = event.target.value;
        // NOTE: Ultimately doesn't seem to be needed here, but leaving for reference
        // if (event.key == 'Backspace' || event.key == 'Delete') {
        //   this.address = newValue;
        //   this.previousAddress = newValue;
        //   this.displayWarning = false;
        // }
        if (newValue.length > this.maxLength) {
          event.preventDefault()
          this.address = this.previousAddress;
          this.displayWarning = true;
        }
        else {
          this.address = newValue;
          this.previousAddress = newValue;
          this.displayWarning = false;
        }
      }
    }
  }
</script>

<style scoped>
  .error-msg {
    color: red;
  }
</style>