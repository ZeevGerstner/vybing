import youtubeService from '../services/youtube.service.js'

export default {
  state: {
    songs: []
  },
  actions: {
    searchSong({ commit }, txt) {
      if(!txt) {
        commit({ type: 'setSongs', songs: [] })
      }
      else {
        youtubeService.loadVideos(txt)
          .then(songs => {
            commit({ type: 'setSongs', songs })
          })
      }
    }
  },
  mutations: {
    setSongs(state, { songs }) {
      state.songs = songs
    }
  },
  getters: {
    searchRes: (state) => state.songs
  }
}