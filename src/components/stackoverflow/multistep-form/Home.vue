<template>
  <div class="home">
    <h3>Home</h3>
    <div class="row">
      <div class="col-md-4">
        <button class="btn btn-primary" v-if="!displayForm && !displayTable" @click="showForm">Add Friends</button>
      </div>
    </div>
    <friend-contact-form v-if="displayForm" @save-contacts="saveContacts" />
    <table v-if="displayTable" class="table table-bordered">
      <thead>
        <tr>
          <td>FIRST NAME</td>
          <td>LAST NAME</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(contact, index) in contacts" :key="index">
          <td>{{ contact.firstName }}</td>
          <td>{{ contact.lastName }}</td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary" v-if="displayReset" @click="reset">Reset</button>
  </div>
</template>

<script>
  import FriendContactForm from './FriendContactForm'

  export default {
    components: {
      FriendContactForm
    },
    data() {
      return {
        contacts: [],
        displayForm: false,
        displayTable: false,
        displayReset: false
      }
    },
    methods: {
      showForm() {
        this.displayForm = true;
      },
      saveContacts(contacts) {
        //console.log(contacts);
        this.contacts = contacts;
        this.displayForm = false;
        this.displayTable = true;
        this.displayReset = true;
      },
      reset() {
        this.contacts = [];
        this.displayForm = false;
        this.displayTable = false;
        this.displayReset = false;
      }
    }

  }
</script>