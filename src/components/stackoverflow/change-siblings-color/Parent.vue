<template>
  <div class="parent">
    <child initBgColor="aquamarine" instanceName="One" />
    <child initBgColor="mediumorchid" instanceName="Two" />
  </div>
</template>

<script>
  import Child from './Child.vue'

  export default {
    components: {
      Child
    }
  }
</script>