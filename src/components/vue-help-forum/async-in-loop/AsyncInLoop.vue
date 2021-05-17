<template>
  <div class="async-in-loop">
    <h4>Call Async Function in Loop</h4>
    <div class="row">
      <div class="col-md-6">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>MISSION</th>
              <th>MAP</th>
            </tr>
          </thead>
          <tbody v-if="displayMissionsWithMaps">
            <tr v-for="(mwm, index) in missionsWithMaps" :key="index">
              <td>{{ mwm.missionName }}</td>
              <td>{{ mwm.mapName }}</td>
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
        missions: [
          {
            id: 1,
            name: 'mission1',
            mapId: 4
          },
          {
            id: 2,
            name: 'mission2',
            mapId: 5
          },
          {
            id: 1,
            name: 'mission1',
            mapId: 6
          },
        ],
        missionMaps: [
          {
            id: 4,
            name: 'map4'
          },
          {
            id: 5,
            name: 'map5'
          },
          {
            id: 6,
            name: 'map6'
          },
        ],
        missionsWithMaps: [],
        displayMissionsWithMaps: false
      }
    },
    methods: {
      getMissions() {
        return new Promise(resolve => {
          setTimeout( () => {
            resolve(this.missions);
          }, 500)
        })
      },
      getMapForMission(mission) {
        let associatedMap = this.missionMaps.find( missionMap => missionMap.id === mission.mapId);
        return new Promise(resolve => {
          setTimeout( () => {
            resolve(associatedMap)
          }, 500)
        })
      },
      async missionLoop(missions) {
        for (let i = 0; i < missions.length; i++) {
          let missionMap = await this.getMapForMission(missions[i]);
          //console.log(missionMap);
          let missionWithMap = {
            missionName: missions[i].name,
            mapName: missionMap.name
          }
          this.missionsWithMaps.push(missionWithMap);
        }
        //console.log(this.missionsWithMaps);
        this.displayMissionsWithMaps = true;
      }
    },
    created() {
      this.getMissions()
      .then(missions => {
        //console.log(missions);
        this.missionLoop(missions);
      })
    }
  };
</script>
