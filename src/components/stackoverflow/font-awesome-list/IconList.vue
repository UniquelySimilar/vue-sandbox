<template>
  <div class="icon-list">
    <h3>Icon List</h3>
    <div class="row">
      <div class="col-md-6">
        <ul class="list-group">
          <li v-for="(iconName, index) in currentIcons" :key="index" class="list-group-item" >
            <font-awesome-icon :icon="iconName" class="fa-2x" />
          </li>
        </ul>
        <button v-if="displayMoreBtn" class="btn btn-secondary" @click="showMore" >
          <font-awesome-icon icon="ellipsis-h" class="fa-2x" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faCloudMoonRain } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faPeace } from "@fortawesome/free-solid-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee);
library.add(faCloudMoonRain);
library.add(faEnvelope);
library.add(faFan);
library.add(faEllipsisH);
library.add(faGuitar);
library.add(faPeace);
library.add(faRobot);

export default {
  data() {
    return {
      initialIcons: ["coffee", "cloud-moon-rain", "envelope", "fan"],
      additionalIcons: ["guitar", "peace", "robot"],
      displayMoreBtn: true,
      currentIcons: [],
    };
  },
  methods: {
    showMore() {
      this.currentIcons = this.currentIcons.concat(this.additionalIcons);
      this.displayMoreBtn = false;
    },
  },
  created() {
    this.currentIcons = this.initialIcons;
  },
};
</script>
