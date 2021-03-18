<template>
  <div class="parent">
    <h5>Select Card Style</h5>
    <div class="row">
      <div class="col-md-6">
        <div class="form-check">
          <input class="form-check-input" type="radio" id="one" value="default" v-model="preview" />
          <label class="form-check-label" for="one">Default</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" id="two" value="padded" v-model="preview" />
          <label class="form-check-label" for="two">Padded</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" id="three" value="full" v-model="preview" />
          <label class="form-check-label" for="three">Full</label>
        </div>
      </div>
    </div>
    <card-style :preview="preview" />
  </div>
</template>

<script>
  import CardStyle from './CardStyle.vue'

  export default {
    components: {
      CardStyle
    },
    data() {
      return {
        preview: 'default'
      }
    }
  }
</script>