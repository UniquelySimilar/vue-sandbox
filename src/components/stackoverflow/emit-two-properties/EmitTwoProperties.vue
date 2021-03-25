<template>
  <div class="emit-two-properties">
    <div class="form-group">
      <label for="segment-location">Segment Location</label>
      <select class="form-control" id="segment-location"
       v-model="segmentLocation" @change="selectSegmentLocation">
        <option v-for="(segLoc, index) in segmentLocations" :key="index"
         :value="segLoc">{{ segLoc.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        segmentLocation: {},
        segmentLocations: [
          { value: "Residential", name: 'Residential building' },
          { value: "Workplace", name: 'Workplace' },
          { value: "Hospitality", name: 'Hospitality or Retail' },
          { value: "Real Estate", name: 'Real Estate' },
          { value: "Commercial Parking", name: 'Commercial Parking' },
          { value: "Fleets", name: 'Fleets' },
          { value: "Cities & Governments", name: 'Cities & Governments' },
          { value: "Corridor", name: 'Highway, Corridor or Petrol Station' }
        ],
      }
    },
    methods: {
      selectSegmentLocation() {
        this.$emit('select-segment-location-event', this.segmentLocation);
      }
    }
  }
</script>