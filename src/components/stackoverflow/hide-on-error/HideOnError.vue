<template>
  <div class="hide-on-error">
    <h4>HideOnError.vue</h4>
    <button type="button" class="btn btn-primary" @click="processError">Click to hide me</button>
  </div>
</template>

<script>
  export default {
    methods: {
      processError() {
        this.hideMe();
      },
      hideMe() {
        this.$emit('hide-child-event');
      }
    }
  }
</script>