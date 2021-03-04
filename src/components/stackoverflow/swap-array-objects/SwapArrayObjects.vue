<template>
  <div class="swap-array-objects">
    <h3>SwapArrayObjects.vue</h3>
    <div class="row">
      <div class="col-md-6">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>TITLE</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>{{ item.title }}</td>
              <td>
                <button class="btn btn-secondary btn-sm" @click="moveUp(index)">Up</button>
              </td>
              <td>
                <button class="btn btn-secondary btn-sm" @click="moveDown(index)">Down</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            title: 'title1'
          },
          {
            title: 'title2'
          },
          {
            title: 'title3'
          },
          {
            title: 'title4'
          },
          {
            title: 'title5'
          }
        ]
      }
    },
    methods: {
      moveUp(index) {
        if (index === 0) {
          return;
        }

        let priorIndex = index - 1;

        let itemCopy = {...this.items[index]};
        let priorItemCopy = {...this.items[priorIndex]};

        // Swap array position with prior element
        this.$set(this.items, priorIndex, itemCopy);
        this.$set(this.items, index, priorItemCopy);
      },
      moveDown(index) {
        if (index === this.items.length - 1) {
          return;
        }

        let subsequentIndex = index + 1;

        let itemCopy = {...this.items[index]};
        let subsequentItemCopy = {...this.items[subsequentIndex]};

        // Swap array positions with subsequent element
        this.$set(this.items, subsequentIndex, itemCopy);
        this.$set(this.items, index, subsequentItemCopy);
      }
    }
  }
</script>