<template>
  <div class="multi-concurrent-reqs">
    <h3>Users</h3>
    <div class="row">
      <div class="col-md-8">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>NAME</th>
              <th>USER NAME</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr>
    <h3>Albums</h3>
    <div class="row">
      <div class="col-md-4">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>TITLE</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="album in albums" :key="album.id">
              <td>{{ album.title }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        baseUrl: 'https://jsonplaceholder.typicode.com',
        users: [],
        albums: []
      }
    },
    methods: {
      getUsers() {
        return axios.get(this.baseUrl + '/users');
      },
      getAlbums() {
        return axios.get(this.baseUrl + '/albums');
      }
    },
    created() {
      Promise.all([this.getUsers(), this.getAlbums()])
      .then( results => {
        this.users = results[0].data.slice(0, 5);
        this.albums = results[1].data.slice(0, 5);
      })
      .catch( error => console.log(error) );
    }
  }
</script>