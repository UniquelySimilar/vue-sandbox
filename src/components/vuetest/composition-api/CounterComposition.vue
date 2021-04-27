<template>
  <div class="counter-composition">
    <h5>Counter using Composition API</h5>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-secondary" @click="increment">Increment</button>
        <span class="count-span">Count is: {{ count }}, double is: {{ double }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive, computed } from 'vue';

  export default {
    setup() {
      const state = reactive({
        count: 0,
        double: computed(() => state.count * 2)
      });

      function increment() {
        state.count++
      }

      return {
        count,
        double,
        increment
      }
    }
  }
</script>