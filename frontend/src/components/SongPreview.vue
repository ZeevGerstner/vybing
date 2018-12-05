<template>
  <li v-if="song" class="song-item">
    <i @click="addSong(song)" class="fas fa-plus-circle control-arrows"></i>
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
      this.$emit('addSong', {...song})
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped lang="scss">

</style>
