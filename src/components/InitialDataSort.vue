<template>
  <div class="initial-data-sort">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        users: [],
        usersSorted: []
      }
    },
    methods: {
      getUsers() {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            this.users = response.data;
            // Sort users
            this.users.sort(this.compareNames);
          })
          .catch(error => console.log(error));
      },
      compareNames(a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        let comparison = 0;
        if (nameA > nameB) {
          comparison = 1;
        } else if (nameA < nameB) {
          comparison = -1;
        }
        return comparison;
      }
    },
    created() {
      this.getUsers();
    }
  }
</script>