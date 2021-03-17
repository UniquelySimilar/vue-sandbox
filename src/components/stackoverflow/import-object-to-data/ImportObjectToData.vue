<template>
  <div class="import-object-to-data">
    <div class="row">
      <div class="col-md-6">
        <span>{{ DataObject.getMessage() }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import DataObject from './data-object.js'

  export default {
    data() {
      return {
        DataObject
      }
    }
  }
</script>