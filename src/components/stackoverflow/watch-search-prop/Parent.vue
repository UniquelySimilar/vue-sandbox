<template>
  <div class="parent">
    <h4>Parent Component</h4>
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label for="prop-value">Enter new prop value</label>
          <input type="text" class="form-control" id="prop-value" v-model="parentSearch">
        </div>
        <hr>
      </div>
    </div>
    <search-input :searchFromParent="parentSearch" @update-search-event="updateSearch" />
  </div>
</template>

<script>
  import SearchInput from './SearchInput.vue'

  export default {
    components: {
      SearchInput
    },
    data() {
      return {
        parentSearch: 'Search value from parent prop'
      }
    },
    methods: {
      updateSearch(searchFromChild) {
        this.parentSearch = searchFromChild;
      }
    }
  }
</script>