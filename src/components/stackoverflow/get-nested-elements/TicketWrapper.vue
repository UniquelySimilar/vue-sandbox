<template>
  <div class="ticket-wrapper">
    <h3>Ticket Wrapper</h3>
    <div class="row">
      <div class="col-md-4">
        <ul>
          <list-item v-for="(item, index) in items" :key="index" :itemText="item.text" ref="listItems"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import ListItem from './ListItem.vue'

  export default {
    components: {
      ListItem
    },
    data() {
      return {
        items: [
          {
            text: 'item1'
          },
          {
            text: 'item2'
          },
          {
            text: 'item3'
          },
        ]
      }
    },
    mounted() {
      console.log(this.$refs.listItems)
      this.$refs.listItems.forEach( listItemComponent => {
        console.log(listItemComponent.$el.innerText);
      })
    }
  }
</script>