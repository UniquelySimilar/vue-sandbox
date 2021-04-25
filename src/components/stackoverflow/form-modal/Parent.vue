<template>
  <div class="parent">
    <h4>Parent of Form Modal</h4>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-secondary" @click="showAddModal">Show Add Modal</button>
        <button class="btn btn-secondary btn-edit" @click="showEditModal">Show Edit Modal</button>
      </div>
    </div>
    <form-modal v-if="displayModal"
      :parentProduct="product"
      @save-product-event="saveProduct"
      @close-modal-event="hideModal"
    />
  </div>
</template>

<script>
  import FormModal from './FormModal.vue'

  export default {
    components: {
      FormModal
    },
    data() {
      return {
        product: {
          id: 0,
          name: '',
          description: ''
        },
        displayModal: false
      }
    },
    methods: {
      showAddModal() {
        this.resetProduct();
        this.displayModal = true;
      },
      showEditModal() {
        this.product.id = 1;
        this.product.name = 'productEdit';
        this.product.description = 'productEditDescription';
        this.displayModal = true;
      },
      hideModal() {
        this.displayModal = false;
      },
      saveProduct(modalProduct) {
        this.product = modalProduct;
        this.hideModal();
        console.log(this.product);
      },
      resetProduct() {
        this.product.id = 0;
        this.product.name = '';
        this.product.description = '';
      }
    }
  }
</script>

<style scoped>
  .btn-edit {
    margin-left: 0.5rem;
  }
</style>