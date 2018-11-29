<template>
  <li v-if="song" class="song-item">
    <img  class="add-btn" src="../assets/imgs/add-icon.png">    

    <h3 class="youtube-title">{{song.title}}</h3>
    <img class="youtube-img" :src="song.img" />
  </li>
</template>

<script>
export default {
  name: "songPreview",
  props:{
    song: Object
  },
};
</script>

<style scoped lang="scss">


</style>
