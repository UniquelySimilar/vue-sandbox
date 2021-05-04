<template>
  <div class="parent">
    <div class="row">
      <div class="col-md-6">
        <vue-ellipse-progress :progressProp="50" />
      </div>
    </div>
  </div>
</template>

<script>
  import VueEllipseProgress from './VueEllipseProgress'

  export default {
    components: {
      VueEllipseProgress
    }
  }
</script>