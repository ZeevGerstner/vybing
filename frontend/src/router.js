import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Room from './views/Room.vue'
import Createroom from './views/CreateRoom.vue'
import Signup from './components/Signup.vue'
import RoomSearch from './views/RoomSearch.vue'
import PlaylistCmp from './components/PlaylistCmp.vue'
import AddSong from './components/AddSong.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/RoomSearch/:genreName?',
      name: 'RoomSearch',
      component: RoomSearch
    },
    {
      path: '/room/:roomId',
      name: 'room',
      component: Room,
      children: [
        {
          path: '',
          component: PlaylistCmp
        },
        {
          path: 'addsong',
          component: AddSong
        }
      ]
    },
    {
      path: '/createroom',
      name: 'createroom',
      component: Createroom
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
