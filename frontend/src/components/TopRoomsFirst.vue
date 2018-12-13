<template>
  <div v-if="rooms">
    <h1 class="top-roms-title">Top {{type}}</h1>

      <transition-group name="component-fade" mode="out-in" tag="div" class="top-room-first">
        <div
          v-for="(room,idx) in currRooms"
          class="top-room-first-other"
          :class="(idx === 0) ? 'top-room-first-main' : ''"
          :key="room._id"
          :id="'slide'+idx"
          :style="{background:'url('+ room.playlist[0].img+') center no-repeat', backgroundSize: 'cover'}"
        >
          <h1 class="room-name">{{room.name}}</h1>
          <room-preview-first v-if="idx === 0" :room="room"/>
        </div>
      </transition-group>
  </div>
</template>

<script>
import roomPreviewFirst from '../components/RoomPreviewFirst'

export default {
  name: 'topRoomsFirst',
  props: {
    rooms: Array,
    type: String
  },
  data() {
    return {
      currRooms: this.rooms.slice()
    }
  },
  methods: {
    goToGenre(genre) {
      this.$socket.emit('searchRoom', { byName: '', byType: genre })
      this.$router.push(`/RoomSearch/${genre}`)
    },
    togglePlayer(room) {
      this.$parent.togglePlayer(room)
    },
    setPlayer(playlist) {
      this.$store.dispatch('setPrevPlaylist')
      if (this.isClicked) this.isClicked = false
      else this.isClicked = true
    },
    openPlayer() {
      this.$parent.togglePlayer(this)
    }
  },
  components: {
    roomPreviewFirst
  },
  watch: {
    rooms() {
      this.currRooms = this.rooms.slice()
    }
  },
  mounted() {
    setInterval(() => {
      let currRoom = this.currRooms.shift()
      this.currRooms.push(currRoom)
    }, 500000)
  }
}
</script>
<style>
.top-room-first {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, minmax(20px, 100px));
  grid-gap: 10px;
}
.top-room-first-other {
  transition: all 0.4s;
}
.top-room-first-main {
  grid-area: 1 / 1 / span 3/1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width: 750px) {
  .top-room-first {
    grid-template-columns: repeat(3, 1fr);
  }
  .top-room-first-main {
    grid-area: 1 / 1 / span 2 / span 3;
  }
}
</style>
