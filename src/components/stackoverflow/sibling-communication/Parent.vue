<template>
  <div class="parent">
    <div class="row">
      <div class="col-md-6">
        <h4>Parent</h4>
        <hr>
        <child-one @show-child-two-event="handleShowChildTwoEvent" />
        <hr>
        <child-two v-if="showChildTwo" />
      </div>
    </div>
  </div>
</template>

<script>
  import ChildOne from './ChildOne.vue'
  import ChildTwo from './ChildTwo.vue'

  export default {
    components: {
      ChildOne,
      ChildTwo
    },
    data() {
      return {
        showChildTwo: false
      }
    },
    methods: {
      handleShowChildTwoEvent() {
        this.showChildTwo = true;
      }
    }

  }
</script>