<template>
  <div class="reporter-tickets">
    <allocate-task :dev="dev" :tasks="tasks" @pass-errors="onPassErrors" @failure="displayErrors=true"
      @success="displaySuccess=true"></allocate-task>
      <!-- NOTE: displaySuccess is not defined-->
    <hr>
    <!--      
    <validated-errors :errorsForm="errorsTicket" v-if="displayErrors===true"></validated-errors>
    -->
  </div>
</template>

<script>
  import AllocateTask from "./AllocateTask.vue"
  //import ValidatedErrors from "./ValidatedErrors.vue"

  export default {
    components: {
      'allocate-task': AllocateTask,
      //'validated-errors': ValidatedErrors
    },
    props: {
      dev: {
        type: Array,
        required: true,
        default: () => [],
      },
      // tasks: {
      //   type: Array,
      //   required: true,
      //   default: () => [],
      // }
    },
    data: function () {
      return {
        displayErrors: false,
        errorsTicket: [],
        tasks: [
          {
            id: 1,
            name: 'Code',
            description: 'write code'
          },
          {
            id: 2,
            name: 'Test',
            description: 'Write and run tests'
          }
        ]
      }
    },
    methods: {
      onPassErrors(value) {
        //alert('errors passed');
        console.log('reporter-tickets parent component received errors-passed event');
        const values = Object.values(value);
        this.errorsTicket = values;
        console.log(this.errorsTicket);
      }
    },
    // mounted() {
    //   console.log('Component mounted.');
    // }
  }

</script>