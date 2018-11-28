<template>
  <div class="room">
    <h1>Hello ROOM</h1>
    <youtube-player :playlist="playlist"/>
    <add-song/>
    <chat-room/>
  </div>
</template>



<script>
"use strict";
import addSong from "@/components/AddSong.vue";
import youtubePlayer from "@/components/YoutubePlayer.vue";
import chatRoom from "@/components/Chat.vue";

export default {
  data() {
    return {
      playlist:[]
    };
  },
  mounted() {
    // this.playlist = this.$store.getters.getPlaylist
    // console.log('!!!!!!!!!S', this.$store.getters.getPlaylist)
  },
  methods: {},
  sockets: {
    LOAD_PLAYLIST: function(playlist) {
      console.log(playlist)
      this.playlist = playlist
    }
  },
  created() {
    // this.$store.dispatch("SOCKET_GET_PLAYLIST");
    this.$socket.emit('getPlaylist')
  },
  components: {
    addSong,
    youtubePlayer,
    chatRoom
  }
};
</script>

