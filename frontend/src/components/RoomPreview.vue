<template>
  <div class="room-item">
    <router-link
      class="room-item-link"
      tag="div"
      :to="'/room/'+room._id"
    >
      <img
        v-if="room.playlist.length > 1"
        class="room-item-youtube-img"
        :src="room.playlist[0].img"
      />

      <div class="room-details room-item-details">
        <h1 class="room-name room-item-name">{{room.name}}</h1>
        <div class="room-icons">
          <h3 class="tag-genre room-item-genre">{{room.type}}</h3>
          <div class="room-icon room-item-icon">
            <img
              class="icon-img room-icon-img"
              src="../assets/imgs/LISTENERS-ICON.png"
            >
            <h4 class="icon-count room-item-count">{{room.listeners.length}}</h4>
          </div>

          <div class="room-icon room-item-icon">
            <img
              class="icon-img room-icon-img"
              src="../assets/imgs/EAR-ICON.png"
            >
            <h4 class="icon-count room-item-count">{{room.likes}}</h4>
          </div>

        </div>

      </div>
    </router-link>

    <div
      v-if="room.playlist.length > 1"
      class="player-status"
    >
      <!-- <h4 class="now-playing">Now playing</h4> -->
      <h5
        class="video-btn"
        @click="openPlayer"
      >
        <i
          v-if="!isOpen"
          class="fa fa-play"
        ></i>
        <i
          v-else
          class="fa fa-stop"
        ></i>
      </h5>
    </div>

    <h3
      v-if="room.playlist.length > 1"
      class="song-title"
      :class="setMove"
    >{{room.playlist[0].title}}</h3>

    <youtube-player
      class="prev-player"
      v-if="isOpen"
      :playlist="room.playlist"
    />

  </div>
</template>

<script>
import youtubePlayer from "@/components/YoutubePlayer.vue";

export default {
  name: "roomPreview",
  props: {
    room: Object
  },
  components: {
    youtubePlayer,
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player;
    },
    setMove () {
      if (this.isOpen) return 'move-txt'
    }
  },
  methods: {
    setPlayer (playlist) {
      this.$store.dispatch('setPrevPlaylist')
      if (this.isClicked) this.isClicked = false
      else this.isClicked = true
    },
    openPlayer () {
      this.$parent.togglePlayer(this)
    }
  }

};
</script>

<style scoped lang="scss">
</style>
