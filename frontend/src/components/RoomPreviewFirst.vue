<template>
  <div class="room-preview-first">
    <div v-if="room.playlist.length">
      <div
        :class="['video-btn-preview', !isOpen? 'play-mode': 'pause-mode']"
        @click.stop="openPlayer"
      >
        <i v-if="!isOpen" class="fa fa-play"></i>
        <i v-else class="fa fa-pause"></i>
      </div>
    </div>
    
    <div :class="['room-details-first', isOpen? 'room-pause-mode' : '']">

      <h3
        v-if="room.playlist.length"
        class="song-title-first"
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

    <youtube-player class="prev-player" v-if="isOpen" :playlist="room.playlist"/>
  </div>
</template>

<script>
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
      this.$emit('togglePlayer', this)
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
  }
};
</script>

<style scoped lang="scss">
.room-preview-first {
  position: relative;
}
.room-details-first {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 51%,
    rgba(0, 0, 0, 1) 100%
  );

}
.room-icons-first {
  display: flex;
  padding: 11px;
}
.song-title-first {
  padding: 6;
  font-family: "roboto-thin";
  font-size: 1em;
  color: #f4f4f4;
  -ms-flex-item-align: baseline;
  align-self: baseline;
  margin-left: 7px;
  position: relative;
  overflow: hidden;
  width: 95%;
  text-overflow: ellipsis;
}
.video-btn-preview {
  color: #99cc009d;
  transition: all 0.4s;
  font-size: 2em;
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
