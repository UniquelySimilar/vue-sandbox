<template>
  <div class="radio-button-vuex">
    <hr>
    <div class="row">
      <div class="col-md-6">
        <input type="radio" value="One" v-model="picked">
        <label>One</label>
        <br>
        <input type="radio" value="Two" v-model="picked">
        <label>Two</label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pickedIndex: {
        type: Number,
        required: true
      }
    },
    computed: {
      picked: {
        get() {
          return this.$store.state.radioSelections[this.pickedIndex].picked;
        },
        set(newValue) {
          this.$store.commit('updateSelection', { index: this.pickedIndex, newValue: newValue });
        }
      }
    },
  }
</script>

<style scoped>
  label {
    margin-left: 0.5rem;
  }
</style>