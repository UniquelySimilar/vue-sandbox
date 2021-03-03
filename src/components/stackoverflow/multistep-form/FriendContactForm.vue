<template>
  <div class="friend-contact-form">
    <div class="row">
      <div class="col-md-4">
        <hr>
        <h4>Friend {{ currentContactNumber[numContacts] }}</h4>
        <form @submit.prevent="saveContact">
          <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" v-model="contact.firstName">
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" v-model="contact.lastName">
          </div>
          <button class="btn btn-primary">{{ formBtnLabel }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        contact: {},
        contacts: [],
        maxContacts: 3,
        currentContactNumber: ['One', 'Two', 'Three']
      }
    },
    computed: {
      numContacts() {
        return this.contacts.length;
      },
      formBtnLabel() {
        return (this.numContacts < (this.maxContacts - 1)) ? 'Next' : 'Finish';
      }
    },
    methods: {
      saveContact() {
        if (this.numContacts < this.maxContacts) {
          let contactCopy = { ...this.contact };
          this.resetContact();
          this.contacts.push(contactCopy);
        }

        if (this.numContacts === this.maxContacts) {
          this.$emit('save-contacts', this.contacts)
        }
      },
      resetContact() {
        this.contact = {}
      }
    }
  }
</script>