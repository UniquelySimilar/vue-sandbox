<template>
  <div class="child">
    <button @click="emitObjects">Emit Objects</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      emitObjects() {
        let obj = {};
        for (let i = 0; i < 2; i++) {
          obj = {
            id: i,
            name: 'name' + i
          }

          this.$emit('child-object-event', obj);
        }
      }
    }
  }
</script>