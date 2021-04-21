export default {
  install(Vue /*, options*/) {
    Vue.mixin({
      methods: {
        getMixinPluginMessage() {
          return 'Hello from MixinPlugin';
        }
      }
    });
  }
}