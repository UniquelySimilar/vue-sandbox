<template>
  <div class="wrapper">
    <div class="one">One</div>
    <div class="two">Two</div>
    <div class="three">Three</div>
    <div class="four">Four</div>
    <div class="five">Five</div>
    <div class="six">Six</div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.wrapper div {
  background-color: aquamarine;
  border: 2px solid rgb(42, 207, 207);
  border-radius: 5px;
  padding: 1em;
  opacity: 0.5;
}

.one {
  grid-column: 1 / 3;
  grid-row: 1;
}

.two { 
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}

.three {
  grid-column: 1;
  grid-row: 2 / 5;
}

.four {
  grid-column: 3;
  grid-row: 3;
}

.five {
  grid-column: 2;
  grid-row: 4;
}

.six {
  grid-column: 3;
  grid-row: 4;
}
</style>