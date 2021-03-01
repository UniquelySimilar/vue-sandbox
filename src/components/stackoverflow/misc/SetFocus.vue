<template>
  <div class="set-focus">
    <div class="row">
      <div class="col-md-3">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>Input One</label>
            <input type="text" class="form-control" ref="input1">
          </div>
          <div class="form-group">
            <label>Input Two</label>
            <input type="text" class="form-control" ref="input2">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      submitForm() {
        console.log('submitForm')
        // Simulate API call
        setTimeout( () => {
          this.$refs.input2.focus();
        }, 2000)
      }
    }
  }
</script>