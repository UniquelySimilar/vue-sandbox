<template>
  <div class="divide-array">
    <div class="row">
      <div class="col-md-6">
        <ul>
          <li v-for="(line, index) in sixLetterStringArray" :key="index">
            {{ line }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        alphabet: [
          'A', 'B', 'C', 'D', 'E', 'F',
          'G', 'H', 'I', 'J', 'K', 'L',
          'M', 'N', 'O', 'P', 'Q', 'R',
          'S', 'T', 'U', 'V', 'W', 'X',
          'Y', 'Z'
        ],
        numLettersOnline: 6
      }
    },
    computed: {
      sixLetterStringArray() {
        let alphabetCopy = [...this.alphabet];
        let lineArray = [];
        let done = false;

        while (!done) {
          let tempArray = [];
          for (let i = 0; i < this.numLettersOnline; i++) {
            tempArray.push(alphabetCopy[0]);
            alphabetCopy.shift();
            if (alphabetCopy.length === 0) {
              done = true;
              break;
            }
          }
          let line = tempArray.join(' ');
          lineArray.push(line);
        }

        return lineArray;
      }
    },
    created() {
      //console.log(this.sixLetterStringArray);
    }
  }
</script>