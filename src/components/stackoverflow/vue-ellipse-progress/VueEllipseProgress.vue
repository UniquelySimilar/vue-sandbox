<template>
  <div class="vue-ellipse-progress">
    <vue-ellipse-progress :progress="progress" colorFill="#955251" :noData="noData" :size="size" :thickness="10" />
    <div class="form-group">
      <label for="select-progress">Select Progress Amount</label>
      <select class="form-control" id="select-progress" v-model="progress">
        <option :value="0">0</option>
        <option :value="25">25</option>
        <option :value="50">50</option>
        <option :value="75">75</option>
        <option :value="100">100</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      progressProp: {
        type: Number,
        required: true
      }
    },
    computed: {
      noData() {
        return (this.progress === 0) ? true : false;
      }
    },
    data() {
      return {
        size: 100,
        show: true,
        progress: this.progressProp,
      };
    },
    methods: {},
  };
</script>