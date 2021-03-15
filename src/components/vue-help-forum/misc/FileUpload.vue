<template>
  <div class="file-upload">
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>Choose file to upload</label>
            <input type="file" class="form-control" @change="logFileName">
          </div>
          <button type="submit" class="btn btn-secondary">Submit</button>
         </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      logFileName(event) {
        console.log(event.target.value)
      },
      submitForm() {
        console.log('submitForm')
      }
    }
  }
</script>