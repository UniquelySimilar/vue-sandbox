<template>
  <div :style="{ backgroundColor: computedBgColor }">
    <h3>Background Color Prop Test</h3>
  </div>
</template>

<script>
  export default {
    props: {
      bgColor: {
        type: String,
        required: false
      }
    },
    computed: {
      computedBgColor() {
        return this.bgColor ? this.bgColor : 'aqua';
      }
    }
  }
</script>

<style scoped>

</style>