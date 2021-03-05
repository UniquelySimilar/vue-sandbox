<template>
  <div class="child">
    <h3>Child.vue</h3>
    <div class="row">
      <div class="col-md-6">
        <label>Form State From Parent (Prop):</label>
        <span>{{ dataFormState }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <button type="button" class="btn btn-sm btn-secondary" @click="changeAndEmit">Emit new form state</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      formState: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        dataFormState: this.formState,
        clickCounter: 1
      }
    },
    watch: {
      formState(newValue) {
        this.dataFormState = newValue;
      }
    },
    methods: {
      changeAndEmit() {
        console.log('Emitting values up')
        this.$emit("form-state-event", "New form state " + this.clickCounter++);
      }
    },
  }
</script>

<style scoped>
  label {
    font-weight: bold;
    margin-right: 0.5rem;
  }
</style>