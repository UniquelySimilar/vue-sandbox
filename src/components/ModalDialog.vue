<template>
<!-- The Modal -->
<div id="my-modal" class="modal-container">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close" v-on:click="closeModal">&times;</span>
      <h2>Modal Header</h2>
    </div>
    <div class="modal-body">
      <p>Some text in the Modal Body</p>
      <p>Some other text...</p>
    </div>
    <div class="modal-footer">
      <h3>Modal Footer</h3>
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
        this.$emit('closeModalEvt');
      }
    }
  }
</script>

<style scoped>
/* The Modal (background) */
.modal-container {
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

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}
</style>