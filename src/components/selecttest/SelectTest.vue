<template>
  <div class="select-test">
    <select v-model="visibleComponent">
      <option value="1">Show component one</option>
      <option value="2">Show component two</option>
    </select>

    <child-one v-if="visibleComponent == 1" />
    <child-two v-if="visibleComponent == 2" />
  </div>
</template>

<script>
  import ChildOne from './ChildOne.vue';
  import ChildTwo from './ChildTwo.vue';

  export default {
    components: {
      ChildOne,
      ChildTwo
    },
    data() {
      return {
        visibleComponent: 1
      }
    }
  }
</script>