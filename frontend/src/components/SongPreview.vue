<template>
  <li v-if="song" class="song-item">
    <button>Add song</button> 
    <h3>{{song.title}}</h3>
    <img :src="song.img" />
  </li>
</template>

<script>
export default {
  name: "somgsPreview",
  props:{
    song: Object
  },
};
</script>

<style scoped lang="scss">
.song-item {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5px;

  img {
    height: 100px;
    width: 100px;
  }
  button {
    height: 50px;
  }
}

</style>
