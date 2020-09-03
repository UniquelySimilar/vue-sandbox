<template>
  <div class="array-update">
    <ul id="example-2">
      <li v-for="(item, index) in items" v-bind:key="item.message">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    <button type="button" @click="filterList">Filter</button>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        parentMessage: 'Parent',
        items: [
          { message: 'Foo' },
          { message: 'Bar' },
          { message: 'Baz' }
        ]
      }
    },
    methods: {
      filterList() {
        this.items = this.items.filter(item => item.message != "Baz");
      }
    }
  }
</script>

<style scoped>

</style>