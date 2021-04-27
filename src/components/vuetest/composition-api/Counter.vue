<template>
  <div class="counter">
    <h5>Counter Standard SFC</h5>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-secondary" @click="increment">Increment</button>
        <span class="count-span">Count is: {{ count }}, double is: {{ double }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      increment() {
        this.count++;
      }
    },
    computed: {
      double() {
        return this.count * 2;
      }
    }
  }
</script>

<style scoped>
  .count-span {
    margin-left: 0.5rem;
  }
</style>