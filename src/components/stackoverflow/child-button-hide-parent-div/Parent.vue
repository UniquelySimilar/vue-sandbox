<template>
  <div class="parent">
    <h3>Parent.vue</h3>
    <div class="row">
      <div class="col-md-6">
        <div v-if="showDiv">Div for child to show/hide</div>
      </div>
    </div>
    <child @toggle-parent-div="toggleDiv" />
  </div>
</template>

<script>
  import Child from './Child.vue'

  export default {
    components: {
      Child
    },
    data() {
      return {
        showDiv: true
      }
    },
    methods: {
      toggleDiv() {
        this.showDiv = !this.showDiv;
      }
    }
  }
</script>