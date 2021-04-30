<template>
  <div class="child">
    <div class="row">
      <div class="col-md-6" :style="currentBgColor">
        <span>Sibling Component {{ instanceName }}</span>
        <button type="button" class="btn btn-secondary" @click="updateCommonBgColor">Change All Sibling Colors</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      initBgColor: {
        type: String,
        required: true
      },
      instanceName: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        backgroundColor: this.initBgColor
      }
    },
    computed: {
      currentBgColor() {
        return 'background-color: ' + this.$store.state.commonBgColor;
      }
    },
    methods: {
      updateCommonBgColor() {
        this.$store.commit('updateBgColor', this.backgroundColor);
      }
    }
  }
</script>

<style scoped>
  .child {
    margin-top: 0.5rem;
  }

  span {
    font-size: 1.5rem;
    padding: 0.5rem;
  }

  button {
    float: right;
  }
</style>