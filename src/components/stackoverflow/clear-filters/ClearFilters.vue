<template>
  <div class="clear-filters">
    <div class="row">
      <div class="col-md-6">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>NAME</th>
              <th>CURRENCY</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="asset in filteredAssets" :key="asset.id">
              <td>{{ asset.name }}</td>
              <td>{{ asset.currency }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label class="criteria-label">FILTER CRITERIA:</label>
          <select class="form-control" v-model="currentCriteria">
            <option v-for="(criteria, index) in criteriaOptions" :key="index" :value="criteria">{{ criteria }}</option>
          </select>
        </div>
        <button type="button" class="btn btn-secondary" @click="resetFilter">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
  import assets from './clear-filters-data.js';

  export default {
    data() {
      return {
        assets: assets,
        criteriaOptions: [
          'ALL', 'USD', 'GBP', 'CAD'
        ],
        currentCriteria: 'ALL'
      }
    },
    computed: {
      filteredAssets() {
        if (this.currentCriteria === 'ALL') {
          return this.assets;
        }
        else {
          return this.assets.filter( asset => asset.currency === this.currentCriteria);
        }
      }
    },
    methods: {
      resetFilter() {
        this.currentCriteria = 'ALL';
      }
    }
  }
</script>

<style scoped>
  .criteria-label {
    font-weight: bold;
  }
</style>