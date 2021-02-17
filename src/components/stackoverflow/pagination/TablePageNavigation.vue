<template>
  <div class="table-page-navigation">
    <button class="btn btn-primary" @click="back" >Back</button>

    <span>
      {{ itemsTotal }} Total Items {{ pageFirstItem}} - {{ pageLastItem }} Shown
    </span>

    <button class="btn btn-secondary" @click="forward" >Forward</button>
  </div>
</template>

<script>
  export default {
    name: 'TablePageNavigation',
    props: {
      /**
       * passed values can be either 10 or 25 or 50
       */
      itemsPerPage: {
        type: Number,
        default: 10,
        validator: (prop) => [10, 25, 50].includes(prop),
      },
      itemsTotal: {
        type: Number,
        default: 100,
      },
    },
    data() {
      return {
        currentPage: 1,
      }
    },
    computed: {
      numPages() {
        return this.itemsTotal / this.itemsPerPage;
      },
      pageFirstItem() {
        return (this.currentPage - 1) * this.itemsPerPage + 1;
      },
      pageLastItem() {
        return this.currentPage * this.itemsPerPage;
      }
    },
    methods: {
      back() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      forward() {
        if (this.currentPage < this.numPages) {
          this.currentPage++;
        }
      },
    },
  }
</script>
