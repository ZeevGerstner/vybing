<template>
  <div>
    <router-link tag="div" :to="'/room/'+room._id">
      <div v-if="room.playlist.length">
        <div :class="['video-btn', !isOpen? 'play-mode': 'pause-mode']" @click.stop="openPlayer">
          <i v-if="!isOpen" class="fa fa-play"></i>
          <i v-else class="fa fa-pause"></i>
        </div>
      </div>
      <div :class="['room-details-first', isOpen? 'room-pause-mode' : '']">
        <h3
          v-if="room.playlist.length"
          :class="['song-title song-title-first', isOpen? 'song-title-pause-mode' : '', setMove]"
          v-for="(song, idx) in room.playlist"
          :key="idx"
          v-show="idx<5"
        >{{song.title}}</h3>
        <div class="room-icons-first">
          <h3 class="room-item-genre">{{room.type}}</h3>
          <div class="room-icon room-item-icon">
            <i class="fas fa-eye font-awesome"></i>
            <h4 class="icon-count room-item-count">{{roomCount}}</h4>
          </div>

          <div class="room-icon room-item-icon">
            <i class="fas fa-thumbs-up font-awesome"></i>
            <h4 class="icon-count room-item-count">{{room.userLikedIds.length}}</h4>
          </div>
        </div>
      </div>
    </router-link>

    <youtube-player class="prev-player" v-if="isOpen" :playlist="room.playlist"/>
  </div>
</template>

<script>
import eventBus, { TOGGLE_PLAYER } from '../services/event.bus.js'
import youtubePlayer from "@/components/YoutubePlayer.vue";

export default {
  name: 'roomPreview',
  props: {
    room: Object
  },
  components: {
    youtubePlayer,
  },
  data() {
    return {
      isOpen: false,
      adminRoom: null,
      roomCount: 0
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
    setMove() {
      if (this.isOpen) return 'move-txt'
    }
  },
  methods: {
    setPlayer(playlist) {
      this.$store.dispatch('setPrevPlaylist')
      if (this.isClicked) this.isClicked = false
      else this.isClicked = true
    },
    openPlayer () {
      eventBus.$emit(TOGGLE_PLAYER, this)
    }
  },
  sockets: {
    updateRoomCounts(roomCounts) {
      const roomCount = roomCounts[this.room._id]
      this.roomCount = roomCount || 0
    }
  },
  created() {
    this.$socket.emit('getRoomCounts')
    eventBus.$on(TOGGLE_PLAYER, vm => {
      if (this !== vm) this.isOpen = false
      else this.isOpen = !this.isOpen
    })
  }
};
</script>

<style scoped lang="scss">
.room-details-first {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 92%,
    rgba(0, 0, 0, 1) 100%
  ); 
  width: 100%;
  height: 100%;
}
.room-icons-first{
  display: flex;
  padding: 12px;
}
.song-title-first{
  padding: 6;
}

</style>
