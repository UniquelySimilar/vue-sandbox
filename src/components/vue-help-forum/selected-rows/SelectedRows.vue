<template>
  <div id="selected-row-users">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>company</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr :class="{ selectedrow: isSelected(user.id) }" v-for="user in users" :key="user.id" @click="selectRow(user.id)">
          <td>{{ user.name }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.salary }}</td>
        </tr>
      </tbody>
    </table>
    <!-- How to render  OR dynamic render this object ?? 
    selected_rows object
    -->
    <hr>
    <h3>Selected Rows</h3>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>company</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in selectedUsers" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.salary }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import users from './selected-row-users.js'

  export default {
    name: "SelectedRowUsers",
    data() {
      return {
        users: users,
        selectedUsers: [],
      };
    },
    methods: {
      selectRow(selectedId) {
        // Check if user already selected
        if (this.isSelected(selectedId)) {
          return;
        }

        let selectedUser = this.users.find( ({ id }) => id === selectedId );
        // Copy and store selected user object
        let userCopy = Object.assign({}, selectedUser);
        this.selectedUsers.push(userCopy);
      },
      isSelected(userId) {
        return this.selectedUsers.find( ({ id }) => id === userId );
      }
    },
  };
</script>

<style scoped>
  .selectedrow {
    background: green;
  }

  tr:hover {
    cursor: pointer;
  }

  td {
    padding: 10px 50px;
  }

  thead {
    color: red;
  }
</style>