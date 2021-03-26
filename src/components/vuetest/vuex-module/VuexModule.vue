<template>
  <div class="vuex-module">
    <div class="row">
      <div class="col-md-6">
        <h4>Users</h4>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>GENDER</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.gender }}</td>
            </tr>
          </tbody>
        </table>
        <button type="button" class="btn btn-secondary" @click="addUser">Add Random User</button>
      </div>

      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <h4>Male Users</h4>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>GENDER</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in maleUsers" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.gender }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <h4>Female Users</h4>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>GENDER</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in femaleUsers" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.name }}</td>
                  <td>{{ user.gender }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gender: 'male'
      }
    },
    computed: {
      users() {
        return this.$store.state.userModule.users;
      },
      maleUsers() {
        return this.$store.getters['userModule/getMaleUsers'];
      },
      femaleUsers() {
        return this.$store.getters['userModule/getFemaleUsers'];
      }
    },
    methods: {
      addUser() {
        let nextGender = this.gender === 'male' ? 'female' : 'male';
        this.gender = nextGender;
        this.$store.commit('userModule/addUser', this.gender);
      }
    }
  }
</script>