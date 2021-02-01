<template>
  <div class="create-entries">

    <div class="row">

      <div class="col-md-4 form-container">
        <form @submit.prevent="saveEntry">
          <div class="form-group">
            <label>Owner Name</label>
            <input type="text" v-model="entry.ownerName" class="form-control">
          </div>
          <div class="form-group">
            <label>Dog Name</label>
            <input type="text" v-model="entry.dogName" class="form-control">
          </div>
          <div class="form-group">
            <button v-if="entries.length < maxEntries" class="btn btn-primary" type="submit">Save Entry</button>
            <span v-else>Maximum of five entries reached</span>
          </div>
        </form>
      </div>

      <div class="col-md-6" v-if="entries.length >= 0">
        <div class="col-md-3">
          <span class="bold-text">Current Entries:</span>
        </div>

        <div class="col-md-8">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Owner Name</th>
                <th>Dog Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="entry in entries" :key="entry.id">
                <td>{{ entry.id }}</td>
                <td>{{ entry.ownerName }}</td>
                <td>{{ entry.dogName }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import { Entry } from '@/globalvars.js'

  export default {
    data() {
      return {
        entry: {},
        entries: [],
        maxEntries: 5
      }
    },
    computed: {
      nextId() {
        let maxId = 0;
        if (this.entries.length > 0) {
          maxId = Math.max.apply(Math, this.entries.map(function (entry) {
            return entry.id;
          }));
        }

        return maxId + 1;
      }
    },
    methods: {
      saveEntry() {
        this.entry.id = this.nextId;
        this.entries.push(this.entry);
        this.initEntry();
      },
      initEntry() {
        this.entry = new Entry(0, '', '');
      }
    },
    created() {
      this.initEntry();
    }
  }
</script>

<style scoped>
  .create-entries {
    margin-top: 1em;
  }

  .form-container {
    background-color: lightcyan;
    border: 1px solid darkcyan;
    border-radius: 4px;
  }

  .bold-text {
    font-weight: bold;
  }
</style>