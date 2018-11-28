import youtubeService from '../services/youtube.service.js'
import socketEmitter from '../services/socket.emitter'

export default {
  state: {
    playlist: []
  },
  mutations: {
    SOCKET_LOAD_PLAYLIST(state,playlist){
      state.playlist = playlist
    }
  },
  actions:{
    SOCKET_GET_PLAYLIST(){
      socketEmitter.$socket.emit('getPlaylist')
    }
  },
  getters: {
    getPlaylist(state){
      return state.playlist
    }
  }
}