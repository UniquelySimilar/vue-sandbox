<template>
  <div class="my-slider">
    <h4>My Slider</h4>
    <my-slider-item v-for="(item, index) in sliderItems" :key="index" :sliderItem="item" />
  </div>
</template>

<script>
  import MySliderItem from './MySliderItem.vue'

  export default {
    components: {
      MySliderItem
    },
    data() {
      return {
        sliderItems: [
          {
            name: 'Slider Item 1'
          },
          {
            name: 'Slider Item 2'
          },
          {
            name: 'Slider Item 3'
          }
        ]
      }
    }
  }
</script>