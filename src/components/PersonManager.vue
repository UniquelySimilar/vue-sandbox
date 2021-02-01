<template>
  <div id="sandbox">
    <header>
      <h2>PersonManager Component</h2>
    </header>
    <div class="row">
      <main class="col-md-8">
        <person-table heading="Persons" :persons="persons" />
        <person-table heading="Male Persons" :persons="malePersons" />
        <person-table heading="Female Persons" :persons="femalePersons" />
      </main>
      <aside class="col-md-4">
        <h4>Add randomized person</h4>
        <button type="button" @click="addRandomizedPerson()">Add</button>
        <hr>
        <h4>Add Person</h4>
        <form>
          <div class="form-group">
            <label>Name</label>
            <input type="text" v-model.trim="person.name" class="form-control">
            <span class="text-danger" v-if="validationMessages.has('name')">{{ this.validationMessages.get('name') }}</span>
          </div>
          <div class="form-group">
            <label>Age</label>
            <input type="number" v-model.number="person.age" min="1" class="form-control">
            <span class="text-danger" v-if="validationMessages.has('age')">{{ this.validationMessages.get('age') }}</span>
          </div>
          <div class="form-group">
            <label>Gender</label>
            <select v-model="person.gender" class="form-control">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button type="submit" class="btn btn-default" @click.prevent="addPerson()">Add</button>
        </form>
      </aside>
    </div>
  </div>

</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import PersonTable from './PersonTable.vue'
  import { Person } from '../globalvars'

  export default {
    data() {
      return {
        genderAry: ['male', 'female'],
        person: {},
        validationMessages: new Map()
      }
    },
    components: {
      PersonTable
    },
    computed: {
      nextPersonId() {
        let maxId = Math.max.apply(Math, this.persons.map(function (person) {
          return person.id;
        }));

        return maxId + 1;
      },
      ...mapState([
        'persons'
      ]),
      ...mapGetters([
        'malePersons',
        'femalePersons'
      ])
    },
    methods: {
      addRandomizedPerson() {
        let id = this.nextPersonId;
        let age = Math.floor(Math.random() * 80) + 20;
        let genderIdx = Math.floor(Math.random() * 2);
        let newPerson = new Person(id, 'Name' + id, this.genderAry[genderIdx], age);

        this.$store.commit('addPerson', newPerson);
      },
      addPerson() {
        // Reset
        this.validationMessages = new Map();

        if (this.person.name.length === 0) {
          this.validationMessages.set('name', 'Name is required');
        }

        if (!Number.isInteger(this.person.age) || this.person.age < 1 || this.person.age > 120) {
          this.validationMessages.set('age', 'Age must be an integer between 1 and 120');
        }
        if (this.validationMessages.size > 0) {
          return;
        }

        let id = this.nextPersonId;
        let newPerson = new Person(id, this.person.name, this.person.gender, this.person.age);
        this.$store.commit('addPerson', newPerson);
        this.initPerson();
      },
      initPerson() {
        this.person = new Person(0, '', 'male', 0);
      }

    },
    created() {
      this.initPerson();
    }

  }
</script>

<style scoped>
  header {
    text-align: center;
  }
</style>