<template>
  <div class="vue-ellipse-progress-docs">
    <vue-ellipse-progress :data="circles" :progress="myProgress" :angle="-90" color="blue" :colorFill="colorFillGradient"
      emptyColor="#8ec5fc" :emptyColorFill="emptyColorFillGradient" :size="300" :thickness="10" emptyThickness="10%"
      lineMode="in 10" :legend="true" :legendValue="180"
      :legendFormatter="({currentValue}) => new Intl.NumberFormat('de-DE').format(currentValue)"
      legendClass="legend-custom-style" dash="60 0.9" animation="reverse 700 400" :noData="false" :loading="false"
      fontColor="white" :half="false" :gap="10" dot="10 blue" reverse fontSize="5rem">

      <span slot="legend-value">/200</span>
      <p slot="legend-caption">GOOD JOB</p>

    </vue-ellipse-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        myProgress: 60
      }
    }

  }
</script>