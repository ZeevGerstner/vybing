<template>
  <div class="room-item">
    <router-link
      class="room-item-link"
      tag="div"
      :to="'/room/'+room._id"
    >
      <div
        v-if="room.playlist.length"
        class="room-item-youtube-img"
        :style="{background:'url('+ room.playlist[0].img+') center no-repeat', backgroundSize: 'cover'}"
      >
        <div
          :class="['video-btn', !isOpen? 'play-mode': 'pause-mode']"
          @click.stop="openPlayer"
        >
          <i
            v-if="!isOpen"
            class="fa fa-play"
          ></i>
          <i
            v-else
            class="fa fa-pause"
          ></i>
        </div>
      </div>
      <div :class="['room-details', 'room-item-details', isOpen? 'room-pause-mode' : '']">
        <h3
          v-if="room.playlist.length"
          :class="['song-title', isOpen? 'song-title-pause-mode' : '', setMove]"
        >
          {{room.playlist[0].title}}
        </h3>
        <div
          v-if="room.playlist.length"
          class="player-status"
        >
          <h1 class="room-name room-item-name">{{room.name}}</h1>
        </div>
        <div class="room-icons">
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

    <youtube-player
      class="prev-player"
      v-if="isOpen"
      :playlist="room.playlist"
    />

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
  data () {
    return {
      isOpen: false,
      adminRoom: null,
      roomCount: 0
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
      eventBus.$emit(TOGGLE_PLAYER, this)
    }
  },
  sockets: {
    updateRoomCounts (roomCounts) {
      const roomCount = roomCounts[this.room._id]
      this.roomCount = roomCount || 0
    }
  },
  created () {
    this.$socket.emit('getRoomCounts')
    eventBus.$on(TOGGLE_PLAYER, vm => {
      if (this !== vm) this.isOpen = false
      else this.isOpen = !this.isOpen
    })
  }
};
</script>

<style scoped lang="scss">
</style>
