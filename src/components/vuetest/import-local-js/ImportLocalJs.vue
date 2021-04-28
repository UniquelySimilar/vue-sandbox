<template>
  <div class="import-local-js">
    <h4>Import Local JavaScript - see console</h4>
    <div class="row">
      <div class="col-md-6">
        <span>{{ testMessage }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-secondary" @click="getSum(3, 4)">Add 3 and 4</button>
        <span class="answer" v-if="sum">Answer: {{ sum }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import './js/iife-script.js'
  import { add, testMessage } from './js/funcs-and-vars.js'

  export default {
    data() {
      return {
        testMessage,
        sum: 0
      }
    },
    methods: {
      add,
      getSum(a, b) {
        this.sum = add(a, b);
      }
    }
  }
</script>

<style scoped>
  .answer {
    margin-left: 0.5rem;
  }
</style>