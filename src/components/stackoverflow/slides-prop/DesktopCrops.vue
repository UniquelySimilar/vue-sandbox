<template>
  <div class="desktop-crops">
    <div class="row">
      <div class="col-md-6">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>IMAGE PATH</th>
              <th>OPTIONAL TEXT</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="slide in slides" :key="slide.id">
              <td>{{ slide.imgPath }}</td>
              <td>{{ slide.optionalText }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      slides: {
        type: Array,
        required: true
      }
    }
  }
</script>