<template>
  <div class="parent">
    <h2>Parent component</h2>
    <child @child-object-event="processChildEvent"/>
  </div>
</template>

<script>
  import Child from '@/components/vue-help-forum/emit-duplicate-object/Child'

  export default {
    data() {
      return {
        children: []
      }
    },
    components: {
      Child
    },
    methods: {
      processChildEvent(childObj) {
        //console.log(childObj)
        this.children.push(childObj);
      }
    }
  }
</script>