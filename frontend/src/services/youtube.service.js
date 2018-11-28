'use strict'

const axios = require('axios')

const API_KEY = 'AIzaSyBM9QKJYLqPjzhah37qpOBwUaG5n_eCVj8&q'

async function loadVideos(search) {
    var videos = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${API_KEY}=${search}&maxResults=20`)
    return videos.data.items.map(video => {
        return {
            title: video.snippet.title,
            id: video.id.videoId,
            img: video.snippet.thumbnails.high.url
        }
    })
}

export default {
    loadVideos
}