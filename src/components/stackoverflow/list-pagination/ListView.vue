<template>
  <div class="list-view">
    <h4>Items</h4>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in pageItems" :key="item.id">{{ item.name }}</li>
    </ul>
    <button type="button" class="btn btn-secondary" @click="previousPage" :disabled="onFirstPage">Previous</button>
    <button type="button" class="btn btn-secondary" @click="nextPage" :disabled="onLastPage">Next</button>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        pageSize: 8,
        currentPage: 1
      }
    },
    computed: {
      numItems() {
        return this.items.length;
      },
      startIndex() {
        return (this.currentPage - 1) * this.pageSize;
      },
      endIndex() {
        return this.startIndex + this.pageSize;
      },
      pageItems() {
        return this.items.slice(this.startIndex, this.endIndex);
      },
      onFirstPage() {
        return this.currentPage === 1;
      },
      onLastPage() {
        return this.endIndex >= this.numItems;
      }
    },
    methods: {
      nextPage() {
        if (this.endIndex < this.numItems) {
          this.currentPage++;
        }
      },
      previousPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      }
    }
  }
</script>

<style scoped>
  button {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }
</style>