import youtubeService from '../services/youtube.service.js'
import socketEmitter from '../services/socket.emitter'

export default {
  state: {
    playlist: []
  },
  mutations: {
    SOCKET_LOAD_PLAYLIST(state, playlist) {
      console.log(playlist)
      state.playlist = playlist
    }
  },
  actions: {
    SOCKET_GET_PLAYLIST(context) {
      // socketEmitter.$socket.emit('getPlaylist')
      Promise.resolve([
        {
          title: 'sasa re sasa',
          id: '3SGOVOEgjto',
          img: 'https://i.ytimg.com/vi/3SGOVOEgjto/hqdefault.jpg'
        },
        {
          title: 'sasa to sasa',
          id: 'iJQR3s2Py6U',
          img: 'https://i.ytimg.com/vi/iJQR3s2Py6U/hqdefault.jpg'
        },
        {
          title: 'Sasa Matic - Rastanak - (Offical video 2018)',
          id: 'cOV-8-c15W0',
          img: 'https://i.ytimg.com/vi/cOV-8-c15W0/hqdefault.jpg'
        },
      ]).then(playlists => {
        console.log('/yyyyyyyyyyyyy', playlists);
      })
    }
  },
  getters: {
    getPlaylist(state) {
      console.log('state.playlist from getter', state.playlist);
      return state.playlist
    }
  }
}