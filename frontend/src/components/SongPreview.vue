<template>
  <li v-if="song" class="song-item">
    <img class="add-btn"  @click="addSong(song)" src="../assets/imgs/add-icon.png">    
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
  methods: {
    addSong(song){
      // console.log('add', {...song})
      this.$emit('addSong', {...song})
    }
  }
};
</script>

<style scoped lang="scss">


</style>
