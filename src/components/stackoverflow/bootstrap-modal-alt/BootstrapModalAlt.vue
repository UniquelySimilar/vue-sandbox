<template>
  <div class="bootstrap-modal-alt">
    <div id="modal-dialog" class="modal-dialog-container">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ titleContent }}</h5>
          <button type="button" class="close" @click="closeModal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>{{ bodyContent }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="saveChanges">Save changes</button>
          <button type="button" class="btn btn-secondary" @click="closeModal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      titleContent: {
        type: String,
        required: true
      },
      bodyContent: {
        type: String,
        required: true
      }
    },
    methods: {
      closeModal() {
        this.$emit('close-modal-event');
      },
      saveChanges() {
        this.$emit('save-changes-event');
      }
    }
  }
</script>

<style scoped>
  .modal-dialog-container {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    margin: 10% auto;
    width: 60%;
  }
</style>