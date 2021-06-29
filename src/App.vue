<template>
  <div id="app" class="container">
    <vuex-module-action />
  </div>
</template>

<script>
  import VuexModuleAction from '@/components/stackoverflow/vuex-module-action/VuexModuleAction'

  export default {
    name: 'App',
    components: {
      VuexModuleAction
    },
    data() {
      return {
      }
    }
  }
</script>
