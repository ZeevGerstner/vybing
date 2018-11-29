<template>
  <div class="room-item">
    <router-link class="room-item-link" tag="div" :to="'/room/'+room._id">
      <img v-if="room.playlist.length > 1" class="youtube-img" :src="room.playlist[0].img" />
      
      <div class="room-details room-item-details">
      <h1 class="room-name room-item-name">{{room.name}}</h1>
        <div class="room-icons">
          <h3 class="tag-genre room-item-genre">{{room.type}}</h3>
            <div class="room-icon room-item-icon">
              <img class="icon-img room-icon-img" src="../assets/imgs/LISTENERS-ICON.png">
              <h4 class="icon-count room-item-count">{{room.members.length}}</h4>
            </div>

            <div class="room-icon room-item-icon">
              <img class="icon-img room-icon-img" src="../assets/imgs/EAR-ICON.png">
              <h4 class="icon-count room-item-count">{{room.likes}}</h4>
          </div>

        </div>

      </div>
    </router-link>

    <h4 class="now-playing">Now playing</h4>
    <h3 class="song-title" v-if="room.playlist.length > 1">{{room.playlist[0].title}}</h3>

  </div>
</template>

<script>
export default {
  name: "roomPreview",
  props:{
    room: Object
  },
};
</script>

<style scoped lang="scss">


</style>
