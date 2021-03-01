<template>
  <div class="multiple-button-states">
    <button type="button" :class="buttonClass" @click="changeButtonState">Trigger color change</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        buttonState: 1
      }
    },
    computed: {
      buttonClass() {
        let returnClass = ''
        switch(this.buttonState) {
          case 2:
            returnClass = 'green';
            break;
          case 3:
            returnClass = 'blue';
            break;
          case 4:
            returnClass = 'yellow';
            break;
          default:  // 1
            returnClass = 'red';
        }

        return returnClass;
      }
    },
    methods: {
      changeButtonState() {
        if (this.buttonState === 4) {
          this.buttonState = 1;
        }
        else {
          this.buttonState++;
        }
      }
    }

  }
</script>

<style scoped>
  .red {
    background-color: red;
  }

  .green {
    background-color: green;
  }

  .blue {
    background-color: blue;
  }

  .yellow {
    background-color: yellow;
  }
</style>