<template>
  <div class="room">
    <h1>Hello ROOM</h1>
    <youtube-player/>
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
  // mounted() {
  //   this.playlist = this.$store.getters.getPlaylist
  // },
  methods: {},
  sockets: {
    SOCKET_LOAD_PLAYLIST: function(playlist) {
      console.log(playlist);
    }
  },
  created() {
    this.$store.dispatch("SOCKET_GET_PLAYLIST");
  },
  components: {
    addSong,
    youtubePlayer,
    chatRoom
  }
};
</script>

