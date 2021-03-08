<template>
  <div class="parent">
    <h3>Slides</h3>
    <desktop-crops :slides="slides" />
  </div>
</template>

<script>
  import DesktopCrops from './DesktopCrops.vue'

  export default {
    components: {
      DesktopCrops
    },
    data() {
      return {
        slides: [
          {
            id: 1,
            imgPath: '/img/1',
            optionalText: 'optional slide 1'
          },
          {
            id: 2,
            imgPath: '/img/2',
            optionalText: 'optional slide 2'
          },
        ]
      }
    }
  }
</script>