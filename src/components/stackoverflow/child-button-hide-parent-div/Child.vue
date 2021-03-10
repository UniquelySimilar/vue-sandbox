<template>
  <div class="child">
    <hr>
    <h3>Child.vue</h3>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-secondary" @click="toggleParentDiv">Click to toggle parent div</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      toggleParentDiv() {
        this.$emit('toggle-parent-div');
      }
    }
  }
</script>