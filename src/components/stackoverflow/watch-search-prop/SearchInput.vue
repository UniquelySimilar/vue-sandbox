<template>
  <div class="search-input">
    <h5>Search Input Component (child)</h5>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <input type="text" class="form-control" id="search-input" v-model="localSearch">
          </div>
          <button type="submit" class="btn btn-secondary">Submit search value to parent</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      searchFromParent: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        localSearch: this.searchFromParent
      }
    },
    watch: {
      searchFromParent(newValue) {
        this.localSearch = newValue;
      }
    },
    methods: {
      submitForm() {
        this.$emit('update-search-event', this.localSearch)
      }
    }
  }
</script>