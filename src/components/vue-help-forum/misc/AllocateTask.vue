<template>
  <div class="allocate-tasks">
    <form method="POST" @submit.prevent="assignTask">
      <div class="form-group">
        <label for="tasks">Tasks:</label>
        <select v-model="user.tasks" class="form-control" id="tasks">
          <option v-for="task in tasks" :value="task.id" :key="task.id">
            {{ task.name }} - {{ task.description }}
          </option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    props: {
      dev: {
        type: Array,
        required: true,
        default: () => [],
      },
      tasks: {
        type: Array,
        required: true,
        default: () => [],
      }
    },
    data: function () {
      return {
        user: {
          tasks: "",
          dev: ""
        },
        form: {
          task_id: "",
          user_id: ""
        },
        errors: {}
      }
    },
    methods: {
      assignTask: function () {
        console.log('assignTask')

        this.$emit('failure');
        this.$emit('pass-errors', this.errors);

        // this.form.task_id = this.user.tasks;
        // this.form.user_id = this.dev.id;
        // alert(this.form.task_id);
        // alert(this.form.user_id);
        // axios.post('/ticketsapp/public/api/store_task_user', this.form)
        //   .then((response) => {
        //     console.log(response.data);
        //     alert('ok');
        //     this.errors = response.data;
        //     alert(Object.keys(this.errors).length);
        //     if (Object.keys(this.errors).length === 0) {
        //       alert('viva');
        //     } else {
        //       alert('there is an error');
        //       this.$emit('failure');
        //       this.$emit('pass-errors', this.errors);
        //       alert('I should have passed the errors to parent');
        //     }
        //   })
        //   .catch(error => {
        //     alert('no ok');
        //     console.log(error);
        //   });
      }
    },
    // mounted() {
    //   console.log('Component mounted.');
    //   // NOTE: this.id undefined
    //   console.log(this.id);
    // },
  }
</script>