<template>
  <div class="create-entries">

    <div class="row">

      <div class="col-sm-4 form-container">
        <form @submit.prevent="saveEntry">
          <div class="form-group">
            <label>Owner Name</label>
            <input type="text" class="form-control"
              v-model.trim="entry.ownerName" :disabled="entries.length === maxEntries">
            <span class="text-danger"
              v-if="validationMsgs.has('ownerName')">{{ validationMsgs.get('ownerName') }}</span>
          </div>
          <div class="form-group">
            <label>Dog Name</label>
            <input type="text" class="form-control"
              v-model.trim="entry.dogName" :disabled="entries.length === maxEntries">
            <span class="text-danger"
              v-if="validationMsgs.has('dogName')">{{ validationMsgs.get('dogName') }}</span>
          </div>
          <div class="form-group">
            <button v-if="entries.length < maxEntries" class="btn btn-primary" type="submit">Save Entry</button>
            <span v-else>Maximum of five entries reached</span>
          </div>
        </form>
      </div>

      <div class="col-sm-1"></div>

      <div class="col-sm-6 table-container">
        <div>
          <span class="bold-text">{{ currentEntriesTitle }}</span>
        </div>

        <div v-if="entries.length > 0">
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
          <button type="button" class="btn btn-primary clear-btn" @click="clearEntries">Clear Entries</button>
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
        maxEntries: 5,
        validationMsgs: new Map()
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
      },
      currentEntriesTitle() {
        return this.entries.length === 0 ? 'No Current Entries' : 'Current Entries';
      }
    },
    methods: {
      validateEntry () {
        this.validationMsgs = new Map();

        if (this.entry.ownerName.length === 0) {
          this.validationMsgs.set('ownerName', 'Owner name required');
        }

        if (this.entry.dogName.length === 0) {
          this.validationMsgs.set('dogName', 'Dog name required');
        }

        if (this.validationMsgs.size > 0) {
          return false;
        }

        return true;
      },
      saveEntry() {
        if (!this.validateEntry()) {
          return;
        }

        this.entry.id = this.nextId;
        this.entries.push(this.entry);
        this.initEntry();
      },
      initEntry() {
        this.entry = new Entry(0, '', '');
      },
      clearEntries() {
        this.entries = [];
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
  
  .clear-btn {
    margin-bottom: 1em;
  }

  .form-container, .table-container {
    background-color: lightcyan;
    border: 1px solid darkcyan;
    border-radius: 4px;
  }

  .bold-text {
    font-weight: bold;
  }
</style>