<template>
  <div class="parent">
    <h3>Parent.vue</h3>
    <hr>
    <hide-on-error v-if="showChild" @hide-child-event="handleHideChildEvent" />
  </div>
</template>

<script>
  import HideOnError from './HideOnError.vue'
  export default {
    components: {
      HideOnError
    },
    data() {
      return {
        showChild: true
      }
    },
    methods: {
      handleHideChildEvent() {
        this.showChild = false;
      }
    }
  }
</script>