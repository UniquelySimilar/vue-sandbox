<template>
  <div class="parent">
    <h3>Parent.vue</h3>
    <hr>
    <child :formState="formState" @form-state-event="updateFormState" />
  </div>
</template>

<script>
  import Child from './Child.vue'

  export default {
    components: {
      Child
    },
    data() {
      return {
        formState: 'Initial State'
      }
    },
    methods: {
      updateFormState(newState) {
        console.log('updateFormState');
        this.formState = newState;
      }
    }
    
  }
</script>