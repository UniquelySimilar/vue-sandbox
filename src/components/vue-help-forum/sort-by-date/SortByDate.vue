<template>
  <div class="sort-by-date">
    <h3>Sort by Date</h3>
    <div class="row">
      <div class="col-md-6">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dateEl in getDates()" :key="dateEl.id">
              <td>{{ dateEl.id }}</td>
              <td>{{ dateEl.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="inlineRadio1"
            :value="false"
            v-model="sorted"
          />
          <label class="form-check-label" for="inlineRadio1">Unsorted</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="inlineRadio2"
            :value="true"
            v-model="sorted"
          />
          <label class="form-check-label" for="inlineRadio2">Sorted</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sorted: false,
    };
  },
  methods: {
    getDates() {
      if (this.sorted) {
        return this.$store.getters.sortedDates;
      } else {
        return this.$store.state.unsortedDates;
      }
    },
  },
};
</script>
