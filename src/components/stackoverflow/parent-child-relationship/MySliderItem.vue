<template>
  <div class="my-slider-item">
    <h5>{{ sliderItem.name }}</h5>
  </div>
</template>

<script>
  export default {
    props: {
      sliderItem: {
        type: Object,
        required: true
      }
    }
  }
</script>