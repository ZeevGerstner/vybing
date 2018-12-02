<template>
  <div v-if="room" class="container room">
    <div class="left-room-container">
      <nav class="nav-room">
        <div class="room-title">
          <h2 class="room-name">{{room.name}}</h2>
          <h4 class="room-creator">creator: <span>{{room.admin}}</span></h4>
        </div>
        <div class="room-details">
          <div class="tag-genre room-genre">{{room.type}}</div>

          <div class="room-icon">
            <img class="icon-img" src="../assets/imgs/LISTENERS-ICON.png">
            <h4 class="icon-count">{{room.members.length}}</h4>
          </div>
          <div class="room-icon ">
            <img class="icon-img" src="../assets/imgs/EAR-ICON.png">
            <h4 class="icon-count">{{room.likes}}</h4>
          </div>
        </div>
      </nav>
    <div class="room-player">
      
      <youtube-player :playlist="room.playlist" @updatePlaylist="updatePlaylist"></youtube-player>
    </div>
    <playlist-cmp :playlist="room.playlist" @moveSong="moveSong"></playlist-cmp>
    <!-- <add-song @addSong="addSong" /> -->
    </div>
    <chat-room/>
  </div>
</template>

<script>
"use strict";
import addSong from "@/components/AddSong.vue";
import youtubePlayer from "@/components/YoutubePlayer.vue";
import chatRoom from "@/components/Chat.vue";
import playlistCmp from '@/components/PlaylistCmp.vue'

export default {
  data() {
    return {
      room: null,
    };
  },
  methods: {
    updatePlaylist(playlist) {
      this.room.playlist = playlist
      this.$socket.emit('updatePlaylist', this.room._id, playlist)
    },
    addSong(song){
      console.log(song);
      this.room.playlist.push(song)
      var playlist = this.room.playlist
      console.log(playlist)
      this.$socket.emit('updatePlaylist', this.room._id, playlist)

    },
    moveSong(playlist) {
      this.room.playlist = playlist
      this.$socket.emit('modifyPlaylist', this.room._id, playlist)
    }
  },
  sockets: {
  },
  created() {
    const roomId = this.$route.params.roomId;
    this.$socket.emit('getRoomById', roomId)
    // this.$store.dispatch("SOCKET_GET_PLAYLIST");
    this.$socket.emit('getPlaylist')
  },
  sockets: {
    setRoom: function(room){
      this.room = room
    },
    loadPlaylist(playlist) {
      console.log('updated playlist: ', playlist)
      this.room.playlist = playlist
    }
  },
  watch:{
    '$route.params.roomId' : function(id){
      this.$socket.emit('getRoomById', id)
      this.$socket.emit('getPlaylist')
    }
  },
  components: {
    addSong,
    youtubePlayer,
    chatRoom,
    playlistCmp,
  }
};
</script>

