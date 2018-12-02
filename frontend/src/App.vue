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
  }
};
</script>


<style lang="scss">

</style>
