<template>
  <div class="parent">
    <h4>Demo of Alternative to Bootstrap 4 Modal</h4>
    <div class="row">
      <div class="col-md-6">
        <button type="button" class="btn btn-secondary" @click="showModal = true">Show Modal</button>
      </div>
    </div>

    <bootstrap-modal-alt v-if="showModal"
    :titleContent="modalTitle"
    :bodyContent="modalBody"
    @close-modal-event="closeModal"
    @save-changes-event="saveChanges" />
</div>
</template>

<script>
  import BootstrapModalAlt from './BootstrapModalAlt.vue'

  export default {
    components: {
      BootstrapModalAlt
    },
    data() {
      return {
        showModal: false,
        modalTitle: "Modal Title",
        modalBody: "Modal Body"
      }
    },
    methods: {
      closeModal() {
        this.showModal = false;
      },
      saveChanges() {
        // Add logic to save changes
        this.closeModal();
      }
    }
  }
</script>