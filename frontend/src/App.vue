<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import appHeader from "./components/appHeader";

export default {
  name: 'app',
  components: {
    appHeader
  },
  created(){
    var currUser = JSON.parse(localStorage.getItem('currUser'));
    if(currUser){
      console.log('currUser',currUser)
      this.$store.commit({type: 'setCurrUser', currUser})
    }
  }
};
</script>


<style lang="scss">

</style>
