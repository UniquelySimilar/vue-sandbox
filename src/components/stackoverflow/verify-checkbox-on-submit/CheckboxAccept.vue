<template>
  <div class="checkbox-accept">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="accepted" @change="processAccept" id="checkbox1">
      <label class="form-check-label" for="checkbox1">
        Accept terms
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        accepted: false
      }
    },
    methods: {
      processAccept() {
        this.$emit('terms-accepted-event', this.accepted)
      }
    }
  }
</script>