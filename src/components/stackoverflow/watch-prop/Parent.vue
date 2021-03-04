<template>
  <div class="parent">
    <h3>Parent</h3>
    <div class="row">
      <div class="col-md-6">
        <button class="btn btn-secondary" @click="incrementCounter">Change parent message</button>
      </div>
    </div>
    <child :propMessage="message" />
  </div>
</template>

<script>
  import Child from '@/components/stackoverflow/watch-prop/Child'

  export default {
    components: {
      Child
    },
    data() {
      return {
        counter: 0
      }
    },
    computed: {
      message() {
        return 'Message' + this.counter;
      }
    },
    methods: {
      incrementCounter() {
        this.counter++;
      }
    }
  }
</script>