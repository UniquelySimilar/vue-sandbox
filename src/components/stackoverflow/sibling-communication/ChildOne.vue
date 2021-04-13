<template>
  <div class="child-one">
    <h4>Child One</h4>
    <button class="btn btn-secondary" @click="showChildTwo">Show Child Two</button>
  </div>
</template>

<script>
  export default {
    methods: {
      showChildTwo() {
        this.$emit('show-child-two-event');
      }
    }
  }
</script>