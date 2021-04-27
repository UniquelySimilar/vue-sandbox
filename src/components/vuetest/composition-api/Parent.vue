<template>
  <div class="parent">
    <h4>Composition API Parent</h4>
    <counter />
    <hr>
    <counter-composition />
  </div>
</template>

<script>
  import Counter from './Counter.vue'
  import CounterComposition from './CounterComposition.vue'

  export default {
    components: {
      Counter,
      CounterComposition
    }
  }
</script>