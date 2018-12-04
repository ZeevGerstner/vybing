'use strict'

const axios = require('axios')

import {YT_API_KEY} from './api.keys.js'

const limit =5 

async function loadVideos(search) {
    var videos = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_API_KEY}=${search}&maxResults=${limit}`)
    return videos.data.items.map(video => {
        return {
            title: video.snippet.title,
            id: video.id.videoId,
            img: video.snippet.thumbnails.medium.url
        }
    })
}

export default {
    loadVideos
}