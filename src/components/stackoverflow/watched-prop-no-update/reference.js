const sharedProps = {
  formState: {
    type: Array,
    required: true
  }
}
const Foo = Vue.defineComponent({
  template: `<div>
  Foo
  <button @click="changeAndEmit">Click me</button>
</div>`,
  props: sharedProps,
  setup(props, context) {
    Vue.watch(() => props.formState, () => {
      console.log("Foo: formState changed (anon func)")
    }, { deep: true })
    Vue.watch(props.formState, () => {
      console.log("Foo: formState changed")
    }, { deep: true })
    /*
    const _temp = Vue.ref("test")
    Vue.watch(_temp, () => {
      console.log("Foo: temp variable watch")
    })
    setTimeout(() => _temp.value = "1234", 2000)
    */

    const changeAndEmit = () => {
      console.log('Emiting values up')
      context.emit("formStateEvent", "Abc")
      context.emit("moveEvent")
    }
    const obu = Vue.onBeforeUnmount(() => {
      console.log("Foo: About to unmount")
    })
    const u = Vue.onUnmounted(() => {
      console.log("Foo: Unmounted")
    })

    return {
      changeAndEmit,
      obu,
      u
    }
  }
})
const Bar = Vue.defineComponent({
  template: `<div>
  Bar
</div>`,
  props: sharedProps,
  setup(props) {
    Vue.watch(() => props.formState, () => {
      console.log("Bar: formState changed")
    })
  }
})

Vue.createApp({
  template: `<div>
  <component 
    :is="activeComponent"
    :formState="formState" 
    v-on:formStateEvent="listenToFormState" 
    v-on:moveEvent="listenToMove" 
  />
</div>`,
  components: {
    Foo,
    Bar
  },
  setup() {
    const formState = Vue.ref([])
    const activeComponent = Vue.ref("Foo")

    const listenToFormState = (val) => {
      console.log('Form state listener fired')
      formState.value = formState.value.concat(val)
      console.log('Form state has changed')
    }
    const listenToMove = (val) => {
      console.log('move listener fired')
      activeComponent.value = "Bar"
      console.log('activeComponent has changed')
    }

    return {
      formState,
      activeComponent,
      listenToFormState,
      listenToMove,
    }
  }
}).mount("#app")
