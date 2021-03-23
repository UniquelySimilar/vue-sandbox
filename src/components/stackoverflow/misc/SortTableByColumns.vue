<template>
  <div class="sort-table-by-columns">
    <div class="row"><div class="col-md-6">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th @click="sortContacts('firstName')">FIRST NAME</th>
            <th @click="sortContacts('lastName')">LAST NAME</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(contact, index) in contacts" :key="index">
            <td>{{ contact.firstName }}</td>
            <td>{{ contact.lastName }}</td>
          </tr>
        </tbody>
      </table>
    </div></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        contacts: [
          {
            firstName: 'Aaa',
            lastName: 'Www'
          },
          {
            firstName: 'Lll',
            lastName: 'Mmm'
          },
          {
            firstName: 'Zzz',
            lastName: 'Bbb'
          },
        ]
      }
    },
    methods: {
      sortContacts(property) {
        this.contacts.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
      }
    }
  }
</script>