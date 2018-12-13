<template>
  <div class="room-preview-first">
    <div
      v-if="room.playlist.length"
      :class="['video-btn-preview', !isOpen? 'play-mode': 'pause-mode']"
      @click.stop="openPlayer"
    >
      <span>Listen to this room</span>
      <i v-if="!isOpen" class="fa fa-play"></i>
      <i v-else class="fa fa-pause"></i>
    </div>

    <div :class="['room-details-first', isOpen? 'room-pause-mode-first' : '']">
      <h3
        v-if="room.playlist.length"
        v-for="(song, idx) in room.playlist"
        :class="['song-title-first', (idx === 0) ?'song-title-first-bold' : '']"
        :key="idx"
        v-show="idx<3"
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

    <youtube-player class="prev-player" v-if="isOpen" :playlist="room.playlist"/>
  </div>
</template>

<script>
import eventBus, { TOGGLE_PLAYER } from '../services/event.bus.js'
import youtubePlayer from "@/components/YoutubePlayer.vue";

export default {
  name: 'roomPreviewFirst',
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
    openPlayer() {
      eventBus.$emit(TOGGLE_PLAYER, this)
      this.$emit('playing')
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
.room-preview-first {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 1) 100%
  );
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.room-pause-mode-first {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);

  background-size: 400% 400%;
  -webkit-animation: Gradient 3s ease infinite;
  animation: Gradient 3s ease infinite;
}

.room-icons-first {
  display: flex;
  padding: 7px;
  padding-left: 12px;
}
.song-title-first {
  padding: 6;
  font-family: "roboto-thin";
  font-size: 1em;
  color: #f4f4f4;
  margin: 7px;
  margin-left: 15px;
}
.song-title-first-bold{
  font-family: "roboto-bold";

}
.video-btn-preview {
  color: #99cc009d;
  transition: all 0.4s;
  font-size: 2em;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  margin: 7px;
  span {
    font-family: "roboto-bold";
    font-size: 1em;
    font-size: 0.5em;
    margin-left: 15px;
  }
  i {
    margin: 4px 0px 0px 8px;
    text-align: center;
  }
  &:hover {
    color: #81a600;
  }
}

.video-btn-preview.pause-mode {
  visibility: visible;
  opacity: 1;
}
</style>
