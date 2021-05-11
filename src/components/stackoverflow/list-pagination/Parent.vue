<template>
  <div class="parent">
    <h4>Parent</h4>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <list-view :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
  import items from './items.js'
  import ListView from './ListView.vue'

  export default {
    components: {
      ListView
    },
    data() {
      return {
        items
      }
    }
  }
</script>