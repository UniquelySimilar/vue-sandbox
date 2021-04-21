<template>
  <div class="parent">
    <bar-chart :chartData="barChartData" />
  </div>
</template>

<script>
  import BarChart from './BarChart.vue'

  export default {
    components: {
      BarChart
    },
    data() {
      return {
        barChartData: [12, 19, 3, 5, 2, 3],
      }
    }
  }
</script>