<template>
  <div class="input-with-list">
    <h4>Input with List</h4>
    <div class="row">
      <div class="col-md-6">
        <div class="input-group">
          <input type="text" class="form-control" v-model="searchValue" @keyup.enter="processSearch"
            @click="onClick" @input="onInput">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" @click="processSearch">Search</button>
          </div>
        </div>
        <div class="form-group">
          <ul class="list-group" v-if="showSearchHistory">
            <li class="list-group-item" v-for="(item, index) in searchHistory" :key="index"
              @click="selectPreviousSearch(index)">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <button type="button" class="btn btn-secondary" @click="clearHistory">Clear history</button>
      </div>
    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        searchValue: '',
        searchHistory: [],
        showSearchHistory: false,
        searchHistoryMaxLength: 5
      }
    },
    methods: {
      processSearch() {
        if ( this.searchHistory.indexOf(this.searchValue) === -1) {
          this.searchHistory.push(this.searchValue);
          if (this.searchHistory.length > this.searchHistoryMaxLength) {
            // Remove the first (oldest) element
            this.searchHistory.shift();
          }
        }
        this.searchValue = '';
      },
      selectPreviousSearch(index) {
        this.searchValue = this.searchHistory[index];
        this.showSearchHistory = false;
      },
      clearHistory() {
        this.searchHistory = [];
        this.searchValue = '';
      },
      onClick() {
        // Toggle show/hide
        this.showSearchHistory = !this.showSearchHistory;
      },
      onInput() {
        this.showSearchHistory = false;
      }
    }
  }
</script>

<style scoped>
  li:hover {
    background-color:gainsboro;
  }
</style>