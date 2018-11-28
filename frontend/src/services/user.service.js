import axios from 'axios'
const BASE_URL = process.env.NODE_ENV !== 'development'
    ? ''
    : '//localhost:3000'

function login(userName){
    return axios.put(`${BASE_URL}/login`,{
        userName
    })
    .then(res => res.data)
}

export default {
    login
}