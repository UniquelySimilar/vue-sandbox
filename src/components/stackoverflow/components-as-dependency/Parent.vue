<template>
  <div class="parent">
    <h3>Parent.vue</h3>
    <hr>
    <child-one v-if="includeChildOne" />
    <child-two v-if="includeChildTwo" />
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
        includeChildOne: false,
        includeChildTwo: true
      }
    }
  }
</script>