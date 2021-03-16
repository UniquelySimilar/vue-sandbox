<template>
  <div class="joke-list">
    <div class="row">
      <div class="col-md-6">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>SETUP</th>
              <th>PUNCHLINE</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(joke, index) in jokes" :key="index">
              <td>
                <a href="#" v-on:click.prevent="getPunchline(index)">{{ joke.setup }}</a>
              </td>
              <td>
                <span v-if="joke.showPunchline">{{ joke.punchline }}</span>
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
        jokes: [
          {
            setup: "setup1",
            punchline: "punchline1"
          },
          {
            setup: "setup2",
            punchline: "punchline2"
          },
          {
            setup: "setup3",
            punchline: "punchline3"
          }
        ]
      }
    },
    methods: {
      getPunchline(index) {
        this.jokes[index].showPunchline = true;
      },
      addPropertyToJokes() {
        // New property must be reactive
        this.jokes.forEach( joke => this.$set(joke, 'showPunchline', false) );
      }
    },
    mounted() {
      this.addPropertyToJokes();
    }
  }
</script>