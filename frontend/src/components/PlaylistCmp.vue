<template>
  <div class="playlist-wrapper">
    <div
      class="add-song-btn flex justify-center align-center"
      @click="routeAddSong"
    ><i class="fas fa-plus"></i></div>
    <ul class="search-res">
      <li
        class="song-item space-between"
        v-for="song in playlistToShow"
        :key="song.id"
      >
        <div class="playlist-controls flex flex-column">
          <button
            class="playlist-up-arrow"
            @click="moveSong('up', song)"
          ><i class="fas fa-arrow-circle-up control-arrows"></i></button>
          <button
            class="playlist-down-arrow"
            @click="moveSong('down', song)"
          ><i class="fas fa-arrow-circle-down control-arrows"></i></button>
        </div>
        <div class="playlist-video-details">
          <img
            class="youtube-img"
            :src="song.img"
          />
          <h3 class="youtube-title">{{song.title}}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['playlist'],
  data () {
    return {
      newPlaylist: [],
    }
  },
  computed: {
    playlistToShow () {
      return this.playlist.slice(1)
    },
  },
  methods: {
    moveSong (direction, song) {
      var songIdx = this.playlist.findIndex(playlistSong => {
        return song.id === playlistSong.id
      })
      let newIndex = null;
      if (direction === 'up') {
        if (songIdx === 1) return;
        newIndex = songIdx - 1
      } else {
        if (songIdx === this.playlist.length - 1) return;
        newIndex = songIdx + 1;
      }
      let temp = this.playlist[songIdx]
      this.playlist[songIdx] = this.playlist[newIndex]
      this.playlist[newIndex] = temp
      this.newPlaylist = this.playlist.slice()
      this.$emit('moveSong', this.newPlaylist)
    },

    routeAddSong () {
      var roomId = this.$route.params.roomId
      console.log(roomId)
      this.$router.push(`/room/${roomId}/addsong`)
    },
  }
}
</script>
