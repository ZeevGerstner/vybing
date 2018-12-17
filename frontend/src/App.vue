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
<<<<<<< HEAD
  created () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
=======
  
  created(){
>>>>>>> c478f823960b29c806d0dc76517ac9f14c73bf71
    var currUser = JSON.parse(localStorage.getItem('currUser'));
    if(currUser){
      this.$store.commit({type: 'setCurrUser', currUser})
    }
  }
};

</script>


<style lang="scss">

</style>
