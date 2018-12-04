import axios from 'axios'

let apiKey = "dc6zaTOxFJmzC";
let searchEndPoint = "https://api.giphy.com/v1/gifs/search?";
let limit = 5;

function getGifs(searchTerm) {
    let url = `${searchEndPoint}&api_key=${apiKey}&q=${searchTerm}&limit=${limit}`;
    return axios.get(url).then(res => res.data)
}

export default {
    getGifs
}