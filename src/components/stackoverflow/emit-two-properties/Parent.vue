<template>
  <div class="parent">
    <h4>Parent.vue</h4>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <emit-two-properties @select-segment-location-event="updateSegmentLocation" />
          <button class="btn btn-secondary">Submit</button>
        </form>
        <p><span>Selected Segment Location Value:</span>{{ segmentLocation.value }}</p>
        <p><span>Selected Segment Location Name:</span>{{ segmentLocation.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import EmitTwoProperties from './EmitTwoProperties'

  export default {
    components: {
      EmitTwoProperties
    },
    data() {
      return {
        segmentLocation: {}
      }
    },
    methods: {
      updateSegmentLocation(segLoc) {
        this.segmentLocation = segLoc;
      }
    }
  }
</script>