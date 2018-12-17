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
  created () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    var currUser = JSON.parse(localStorage.getItem('currUser'));
    if (currUser) {
      this.$store.commit({ type: 'setCurrUser', currUser })
    }
  }
};
</script>


<style lang="scss">
</style>
