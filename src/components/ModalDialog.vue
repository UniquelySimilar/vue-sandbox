<template>
<!-- The Modal -->
<div id="modal-dialog" class="modal-dialog-container">

  <!-- Modal content -->
  <div class="modal-dialog-content">
    <div class="modal-dialog-header">
      <span class="close" v-on:click="closeModal">&times;</span>
      <!-- TODO: Convert text to slot or prop -->
      <h4>Delete Customer?</h4>
    </div>
    <div class="modal-dialog-body">
    </div>
    <div class="modal-dialog-footer">
      <div class="btn-wrapper">
        <button type="button" class="btn btn-primary btn-sm" @click="deleteRecord">OK</button>
        <button type="button" class="btn btn-secondary btn-sm" @click="closeModal">Cancel</button>
      </div>
  </div>
  </div>
  
</div>  
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      closeModal() {
        this.$emit('closeModalEvent');
      },
      deleteRecord() {
        this.$emit('closeModalEvent')
      }
    }
  }
</script>

<style scoped>
  .modal-dialog-container {
    /* display: none; Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  .modal-dialog-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 0.3rem;
    width: 30%;
  }

  .modal-dialog-footer {
    text-align: center;
  }
</style>