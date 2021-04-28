<template>
  <div class="import-local-js">
    <h4>Import Local JavaScript - see console</h4>
    <div class="row">
      <div class="col-md-6">
        <div class="alert alert-primary">
          <span>{{ testMessage }}</span>
        </div>
        <div class="alert alert-secondary">
          <button class="btn btn-secondary" @click="getSum(3, 4)">Add 3 and 4</button>
          <span class="answer" v-if="sum">Answer: {{ sum }}</span>
        </div>
        <div class="alert alert-success">
          <span>Area of rectangle: {{ rectangle.area }}</span>
        </div>
        <div class="alert alert-warning">
          <span>Circle Function: radius = {{ radius }}, diameter = {{ diameter() }}, area = {{ circleArea() }}</span>
        </div>
        <div class="alert alert-info">
          <span>Circle Object: radius = {{ circleObj.radius }}, diameter = {{ circleObj.diameter() }}, area = {{ circleObj.area() }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import './js/iife-script.js'
  import { add, testMessage } from './js/funcs-and-vars.js'
  import Rectangle from './js/RectangleClass.js'
  import circleFunction from './js/circle-function.js'
  const { radius, diameter, circleArea } = circleFunction()
  import circleObj from './js/circle-object.js'

  export default {
    data() {
      return {
        testMessage,
        sum: 0,
        rectangle: new Rectangle(5, 6),
        radius,
        circleObj
      }
    },
    methods: {
      add,
      getSum(a, b) {
        this.sum = add(a, b);
      },
      diameter,
      circleArea
    }
  }
</script>

<style scoped>
  .answer {
    margin-left: 0.5rem;
  }
</style>