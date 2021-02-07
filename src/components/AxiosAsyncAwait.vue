<template>
  <div class="axios-async-await">
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
        users: []
      }
    },
    methods: {
      getUsers() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => this.users = response.data )
        .catch( error => console.log(error) );
      },
      async getUsersAsync() {
        try {
          let response = await axios.get('https://jsonplaceholder.typicode.com/users');
          this.users = response.data;
        }
        catch (error) {
          console.log(error);
        }
      }
    },
    created() {
      this.getUsersAsync();
    }

  }
</script>

<style scoped>

</style>