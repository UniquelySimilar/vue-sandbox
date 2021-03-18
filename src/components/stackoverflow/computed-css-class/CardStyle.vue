<template>
  <div class="card-style">
    <hr>
    <div class="row">
      <div class="col-md-6">
        <span :class="preview">{{ preview }} Card Style</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      preview: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .default {
    background-color: burlywood;
  }

  .padded {
    background-color:lightskyblue
  }

  .full {
    background-color:lightcoral
  }
</style>