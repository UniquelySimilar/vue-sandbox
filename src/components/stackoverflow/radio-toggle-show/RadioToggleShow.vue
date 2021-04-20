<template>
  <div class="radio-toggle-show">
    <h4>Radio Toggle Show</h4>
    <div class="row">
      <div class="col-md-6">
        <div class="form-check">
          <input class="form-check-input" type="radio" id="showDiv" :value="true" v-model="displayDiv">
          <label class="form-check-label" for="showDiv">Show Div</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" id="hideDiv" :value="false" v-model="displayDiv">
          <label class="form-check-label" for="hideDiv">Hide Div</label>
        </div>
      </div>
    </div>
    <div class="row" v-if="displayDiv">
      <div class="col-md-6">
        <h5>Div that is shown or hidden by radio button</h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        displayDiv: false
      }
    }
  }
</script>