<template>
  <div v-if="rooms" class="top-roms-header top-rooms-first">
    <h1 class="top-roms-header">Top {{type}}</h1>

    <transition-group name="component-fade" mode="out-in" tag="div" class="top-room-first">
      <div
        v-for="(room,idx) in currRooms"
        class="top-room-first-other"
        :class="(idx === 0) ? 'top-room-first-main' : ''"
        :key="room._id"
        :id="'slide'+idx"
        :style="{background:'url('+ room.playlist[0].img+') bottom no-repeat', backgroundSize: 'cover'}"
        @click="changeSlide(idx)"
      >
        <h2 class="room-name-first">{{room.name}}</h2>
        <room-preview-first @togglePlayer="togglePlayer" v-if="idx === 0" :room="room"/>
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
    changeSlide(idx) {
      if (idx === 0) {
        this.$router.push('/room/' + this.currRooms[0]._id)
      } else {
        let currRoom = this.currRooms.splice(idx, 1)
        this.currRooms.unshift(currRoom[0])
      }
    },
    setPlayer(playlist) {
      this.$store.dispatch('setPrevPlaylist')
      if (this.isClicked) this.isClicked = false
      else this.isClicked = true
    },
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
    }, 10000)
  }
}
</script>

<style>
.top-room-first {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, minmax(20px, 100px));
  grid-gap: 10px;
  cursor: pointer;
}
.top-room-first-other {
  transition: all 0.4s;
}
.top-room-first-main {
  grid-area: 1 / 1 / span 3/1;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
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
.room-name-first {
  color: #f4f4f4;
  font-family: "roboto-bold";
  font-size: 1.5em;
  margin-top: 7px;
  margin-left: 7px;
  text-shadow: 0 0 20px black;
}
</style>
