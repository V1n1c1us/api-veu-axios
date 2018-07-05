<template>
  <div>
    <h1>{{ status.name }}</h1>
    <ul>
      <li v-for="(group, index) in groups" :key="index">
        <h3>{{ group.name }}</h3>
        <ul>
          <li v-for="(team, index) in group.teams" :key="index">{{ team.name }}</li>
        </ul>
      </li>  
    </ul>    
  </div>
</template>
<script>
/* eslint-disable */

import axios from 'axios'
export default {
  name: 'WoldCupGroups',
  data() {
    return {
      name: '',
      status: '',
      groups: []
    }
  },
  created: function (){
     this.getPeople()
  },
  methods: {
    getPeople() {
      var vm = this
      var url = 'https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.groups.json'
      axios.get(url)
        .then( function (response) {
          vm.status = response.data
          vm.groups = response.data.groups
          console.log('ALL--', response.data);
          console.log('ALL--', response.data.groups);
          console.log('GRUPOS --', vm.groups);
          
        })
        .catch(function (error) {
          console.log('An error: ', error)
        })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
