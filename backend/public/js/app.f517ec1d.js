(function(t){function e(e){for(var o,i,a=e[0],c=e[1],l=e[2],u=0,p=[];u<a.length;u++)i=a[u],n[i]&&p.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);m&&m(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],o=!0,i=1;i<s.length;i++){var c=s[i];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var o={},n={app:0},r=[];function i(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dbc2d5ba"}[t]+".js"}function a(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise(function(e,o){s=n[t]=[e,o]});e.push(s[2]=o);var r,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=i(t),r=function(e){l.onerror=l.onload=null,clearTimeout(u);var s=n[t];if(0!==s){if(s){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,s[1](i)}n[t]=void 0}};var u=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,c.appendChild(l)}return Promise.all(e)},a.m=t,a.c=o,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(s,o,function(e){return t[e]}.bind(null,o));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var m=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"039a":function(t,e,s){"use strict";var o=s("3760"),n=s.n(o);n.a},"15f9":function(t,e,s){},"1e74":function(t,e,s){},"23e2":function(t,e,s){},2658:function(t,e,s){},"2a2b":function(t,e,s){},"2de1":function(t,e,s){"use strict";var o=s("1e74"),n=s.n(o);n.a},3598:function(t,e,s){},3760:function(t,e,s){},"392a":function(t,e,s){"use strict";var o=s("2a2b"),n=s.n(o);n.a},4299:function(t,e,s){"use strict";var o=s("bf11"),n=s.n(o);n.a},"45fd":function(t,e,s){"use strict";var o=s("c964"),n=s.n(o);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var o=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("app-header"),s("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"nav"},[o("div",{staticClass:"nav-container flex align-center space-between container"},[o("img",{staticClass:"nav-logo",attrs:{src:s("5fbe")},on:{click:t.goToRooms}}),o("div",{ref:"search",staticClass:"search"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.byName,expression:"filter.byName"}],attrs:{placeholder:"search"},domProps:{value:t.filter.byName},on:{input:[function(e){e.target.composing||t.$set(t.filter,"byName",e.target.value)},t.searchRooms]}}),o("span",{staticClass:"fa fa-search"}),t.isSearch?o("ul",{staticClass:"rooms-results"},[o("li",{staticClass:"all-results",on:{click:t.seeAllResults}},[t._v("See all results for: "+t._s(t.filter.byName))]),t._l(t.roomsResults,function(e){return o("li",{key:e._id,on:{click:function(s){t.goToRoomById(e._id)}}},[t._v(t._s(e.name))])})],2):t._e()]),o("div",{staticClass:"nav-link"},[o("li",{on:{click:function(e){t.toggleOpen("Genre")}}},[o("span",{staticClass:"navbar-txt"},[t._v("▼Genres")]),t._m(0),"Genre"===t.isOpen?o("div",{staticClass:"genres"},t._l(t.getGenre,function(e,s){return o("div",{key:s,staticClass:"genre",on:{click:function(s){t.searchByGenre(e)}}},[t._v(t._s(e))])})):t._e()]),o("li",{on:{click:t.goToRooms}},[o("span",{staticClass:"navbar-txt"},[t._v("Rooms")]),t._m(1)]),o("li",{staticClass:"login"},[t.isUserLogin?t._e():o("div",{on:{click:function(e){t.toggleOpen("Login")}}},[o("span",{staticClass:"navbar-txt",attrs:{id:"LOGIN-IS-HERE"}},[t._v("Login")]),t._m(2)]),"Login"===t.isOpen?o("login-user",{on:{closeLogin:function(e){t.isOpen=null}}}):t._e(),t.isUserLogin?o("router-link",{staticClass:"navbar-userName",attrs:{to:"/profile/"+t.getUser._id}},[t._v(t._s(t.getUser.name))]):t._e()],1),t.isUserLogin?o("li",{staticClass:"navbar-userName",on:{click:t.logoutUser}},[t._v("Logout")]):t._e()])]),t.isGoTop?o("div",{staticClass:"home-go-top",on:{click:t.goTop}},[o("i",{staticClass:"fas fa-arrow-circle-up"})]):t._e()])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"navbar-icon"},[s("i",{staticClass:"fas fa-th-list"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"navbar-icon"},[s("i",{staticClass:"fas fa-home"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"navbar-icon",attrs:{id:"login"}},[s("i",{staticClass:"fas fa-user"})])}],c=(s("7f7f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"login-user"},[s("form",{staticClass:"login-form",on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],ref:"userNameLogin",staticClass:"login-input",attrs:{placeholder:"User Name",type:"text"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"login-input",attrs:{placeholder:"Password",type:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),s("button",{staticClass:"login-btn"},[t._v("Login")])]),s("div",{staticClass:"login-more"},[s("h2",{staticClass:"go-signup-btn",on:{click:t.goToSignup}},[t._v("Signup")]),t.isWorng?s("h2",{staticClass:"worng"},[t._v("Worng!")]):t._e()])])}),l=[],u={data:function(){return{user:{name:"",password:""},isWorng:!1,currUser:null}},methods:{loginUser:function(){var t=this;this.$store.dispatch({type:"login",user:this.user}).then(function(e){e?(t.isWorng=!1,t.user={name:"",password:""},t.$emit("closeLogin")):t.isWorng=!0})},goToSignup:function(){this.$emit("closeLogin"),this.$router.push("/Signup")}},mounted:function(){this.$refs.userNameLogin.focus()}},m=u,p=(s("039a"),s("2877")),f=Object(p["a"])(m,c,l,!1,null,null,null);f.options.__file="Login.vue";var d=f.exports,h={name:"appHeader",props:{msg:String},components:{loginUser:d},data:function(){return{isOpen:null,roomsResults:[],isSearch:!1,filter:{byType:"",byName:""},isGoTop:!1}},created:function(){},methods:{changeCss:function(){var t=document.querySelector(".nav");window.scrollY>200?t.classList.remove("start-navbar"):t.classList.add("start-navbar"),window.scrollY>600?this.isGoTop=!0:this.isGoTop=!1},toggleOpen:function(t){this.isOpen===t?this.isOpen=null:(this.isOpen,this.isOpen=t)},searchRooms:function(){console.log("search: ",this.filter),this.$socket.emit("searchRoom",this.filter),this.isSearch=!0,""===this.filter.byName&&(this.isSearch=!1)},goToRoomById:function(t){this.$router.push("/room/"+t),this.filter.byName="",this.isSearch=!1},seeAllResults:function(){this.$router.push("/RoomSearch"),this.searchRooms(),this.isSearch=!1},searchByGenre:function(t){this.filter.byType=t,this.searchRooms(),this.$router.push("/RoomSearch/"+t)},goToRooms:function(){this.filter={byType:"",byName:""},this.$router.push("/")},logoutUser:function(){this.$store.commit({type:"logoutUser"})},goTop:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}},watch:{"$route.params.genreName":{immediate:!0,handler:function(t){t&&(this.filter.byType=t,this.searchRooms())}},$route:{immediate:!0,handler:function(t){console.log("inside route watch",t),"home"===t.name?(window.addEventListener("scroll",this.changeCss),this.$nextTick(function(){var t=document.querySelector(".nav");t.classList.add("start-navbar"),t.classList.add("home-nav-bar")})):(this.isGoTop=!1,window.removeEventListener("scroll",this.changeCss),this.$nextTick(function(){var t=document.querySelector(".nav");t.classList.remove("home-nav-bar"),t.classList.remove("start-navbar")}))}}},sockets:{setRoomsFilter:function(t){console.log(t),this.roomsResults=t}},computed:{getGenre:function(){return this.$store.getters.getGenre},getUser:function(){return this.$store.getters.getCurrUser},isUserLogin:function(){return this.$store.getters.isUserLogin}}},g=h,v=Object(p["a"])(g,i,a,!1,null,null,null);v.options.__file="appHeader.vue";var y=v.exports,_={name:"app",components:{appHeader:y},created:function(){var t=JSON.parse(localStorage.getItem("currUser"));t&&(console.log("currUser",t),this.$store.commit({type:"setCurrUser",currUser:t}))}},C=_,w=(s("5c0b"),Object(p["a"])(C,n,r,!1,null,null,null));w.options.__file="App.vue";var b=w.exports,k=s("8c4f"),U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"home-img2"}),t._m(0),s("router-link",{staticClass:"tag-genre add-room-btn",attrs:{tag:"div",to:"/createroom"}},[t._v("Create Room")]),s("top-rooms",{staticClass:"container",attrs:{type:"likes",rooms:t.getRoomsBy("likes")}}),s("top-rooms",{staticClass:"container",attrs:{type:"listeners",rooms:t.getRoomsBy("listeners")}}),t._l(t.getGenre,function(e,o){return 0!==t.getRoomsBy(e).length?s("top-rooms",{key:o,attrs:{type:e,rooms:t.getRoomsBy(e)}}):t._e()})],2)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-img"},[s("h2",{staticClass:"home-title-txt"},[t._v("Pick a room and Join the "),s("span",[t._v("V")]),t._v("ybe!")])])}],P=(s("ac6a"),s("55dd"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.rooms?s("div",[s("div",{staticClass:"top-roms-header container"},[s("h1",{staticClass:"top-roms-title"},[t._v("Top "+t._s(t.type))]),"listeners"!==t.type&&"likes"!==t.type?s("button",{staticClass:"genre",on:{click:function(e){t.goToGenre(t.type)}}},[t._v("See all by "+t._s(t.type))]):t._e()]),s("div",{staticClass:"room-list container"},t._l(t.rooms,function(t){return s("room-preview",{key:t._id,attrs:{room:t}})}))]):t._e()}),S=[],x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"room-item"},[s("router-link",{staticClass:"room-item-link",attrs:{tag:"div",to:"/room/"+t.room._id}},[t.room.playlist.length?s("div",{staticClass:"room-item-youtube-img",style:{background:"url("+t.room.playlist[0].img+") center no-repeat",backgroundSize:"cover"}},[s("div",{class:["video-btn",t.isOpen?"pause-mode":"play-mode"],on:{click:function(e){return e.stopPropagation(),t.openPlayer(e)}}},[t.isOpen?s("i",{staticClass:"fa fa-pause"}):s("i",{staticClass:"fa fa-play"})])]):t._e(),s("div",{class:["room-details","room-item-details",t.isOpen?"room-pause-mode":""]},[t.room.playlist.length?s("h3",{class:["song-title",t.isOpen?"song-title-pause-mode":"",t.setMove]},[t._v("\n        "+t._s(t.room.playlist[0].title)+"\n      ")]):t._e(),t.room.playlist.length?s("div",{staticClass:"player-status"},[s("h1",{staticClass:"room-name room-item-name"},[t._v(t._s(t.room.name))])]):t._e(),s("div",{staticClass:"room-icons"},[s("h3",{staticClass:"room-item-genre"},[t._v(t._s(t.room.type))]),s("div",{staticClass:"room-icon room-item-icon"},[s("i",{staticClass:"fas fa-eye font-awesome"}),s("h4",{staticClass:"icon-count room-item-count"},[t._v(t._s(t.room.listeners.length))])]),s("div",{staticClass:"room-icon room-item-icon"},[s("i",{staticClass:"fas fa-thumbs-up font-awesome"}),s("h4",{staticClass:"icon-count room-item-count"},[t._v(t._s(t.room.userLikedIds.length))])])])])]),t.isOpen?s("youtube-player",{staticClass:"prev-player",attrs:{playlist:t.room.playlist}}):t._e()],1)},O=[],R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"player-container"},[s("div",{staticClass:"youtube-container"},[s("youtube",{ref:"youtube",attrs:{width:"200",height:"113","player-vars":t.playerVars},on:{playing:t.playing,ready:t.ready,ended:t.ended}})],1),s("div",{staticClass:"player-details"},[s("h4",{staticClass:"player-txt"},[t._v("NOW PLAYING:")]),s("h2",{staticClass:"song-name"},[t._v(t._s(t.playlist[0].title))]),t.currAddBy?s("h4",{staticClass:"player-txt"},[t._v("ADDED BY: "+t._s(t.currAddBy.name))]):t._e()])])},T=[],L={name:"youtubePlayer",props:{playlist:Array},data:function(){return{videoId:"",currAddBy:"",playerVars:{start:0,controls:1},currSongTime:0}},methods:{ready:function(t){this.setSong()},playing:function(){},ended:function(){var t=this.playlist.splice(0,1);t=t[0],this.playlist.push(t),this.emitUpdatePlaylist(),this.currSongTime=0,this.setSong()},setSong:function(){this.playlist[0].addedBy?this.$socket.emit("getUserById",this.playlist[0].addedBy):this.currAddBy={name:"guest"},this.videoId=this.playlist[0].id,this.player.loadVideoById(this.playlist[0].id,this.currSongTime)},emitUpdatePlaylist:function(){this.$emit("updatePlaylist",this.playlist)},getUserById:function(t){}},created:function(){this.$socket.emit("getTime")},sockets:{connect:function(){},getStatusTime:function(){var t=this;this.player.getCurrentTime().then(function(e){t.$socket.emit("setStatusTime",e)})},setCurrTime:function(t){this.currSongTime=Math.floor(t)},setUserProfile:function(t){this.currAddBy=t[0]}},computed:{player:function(){return this.$refs.youtube.player}}},N=L,j=Object(p["a"])(N,R,T,!1,null,null,null);j.options.__file="YoutubePlayer.vue";var E=j.exports,I={name:"roomPreview",props:{room:Object},components:{youtubePlayer:E},data:function(){return{isOpen:!1,adminRoom:null}},computed:{player:function(){return this.$refs.youtube.player},setMove:function(){if(this.isOpen)return"move-txt"}},methods:{setPlayer:function(t){this.$store.dispatch("setPrevPlaylist"),this.isClicked?this.isClicked=!1:this.isClicked=!0},openPlayer:function(){this.$parent.togglePlayer(this)}}},G=I,B=(s("392a"),Object(p["a"])(G,x,O,!1,null,"b42a3c14",null));B.options.__file="RoomPreview.vue";var A=B.exports,M={name:"topRooms",props:{rooms:Array,type:String},methods:{goToGenre:function(t){this.$socket.emit("searchRoom",{byName:"",byType:t}),this.$router.push("/RoomSearch/".concat(t))},togglePlayer:function(t){this.$parent.togglePlayer(t)}},components:{roomPreview:A}},q=M,D=Object(p["a"])(q,P,S,!1,null,null,null);D.options.__file="TopRooms.vue";var J=D.exports,V={name:"home",components:{topRooms:J},data:function(){return{isLogin:!1,isSignup:!1,rooms:[]}},created:function(){this.$socket.emit("getRoomList")},sockets:{setRoomList:function(t){this.rooms=t,this.$nextTick(function(){window.scrollTo({top:70,left:0,behavior:"smooth"})})}},methods:{getRoomsBy:function(t){return"likes"===t?this.rooms.slice().sort(function(e,s){return s[t]-e[t]}).slice(0,4):"listeners"===t?this.rooms.slice().sort(function(e,s){return s[t].length-e[t].length}).slice(0,4):this.rooms.slice().filter(function(e){return e.type===t}).sort(function(t,e){return e.likes-t.likes}).slice(0,4)},togglePlayer:function(t){console.log("home",t),this.$children.forEach(function(e){e.$children.forEach(function(e){e!==t&&(e.isOpen=!1)})}),t.isOpen=!t.isOpen}},computed:{getGenre:function(){return this.$store.getters.getGenre}}},W=V,H=Object(p["a"])(W,U,$,!1,null,null,null);H.options.__file="Home.vue";var Y=H.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.room?s("div",{staticClass:"container room"},[s("nav",{staticClass:"nav-room"},[s("div",{staticClass:"room-title"},[s("h2",{staticClass:"room-name"},[t._v(t._s(t.room.name))]),t.isAdmin?s("h4",{staticClass:"room-creator"},[t._v("\n        creator:\n        "),s("span",{staticClass:"room-creator-hover",on:{click:function(e){t.isUserPrev=!t.isUserPrev}}},[t._v(t._s(t.adminRoom.name))])]):t._e(),s("user-preview",{directives:[{name:"show",rawName:"v-show",value:t.isUserPrev,expression:"isUserPrev"}],attrs:{user:t.adminRoom}})],1),s("div",{staticClass:"room-details-topbar"},[s("div",{staticClass:"room-item-genre"},[t._v(t._s(t.room.type))]),s("div",{staticClass:"room-icon"},[s("i",{staticClass:"fas fa-eye font-awesome"}),s("h4",{staticClass:"icon-count"},[t._v(t._s(t.room.listeners.length))])]),s("div",{staticClass:"room-icon",on:{click:t.toggleLike}},[s("i",{staticClass:"fas fa-thumbs-up btn-room-like"}),s("h4",{staticClass:"icon-count"},[t._v(t._s(t.roomLikes))])])])]),s("div",{staticClass:"room-player"},[s("youtube-player",{attrs:{playlist:t.room.playlist},on:{updatePlaylist:t.updatePlaylist}})],1),s("router-view",{attrs:{playlist:t.room.playlist},on:{moveSong:t.moveSong,addSong:t.addSong}}),s("chat-room",{class:t.chatStatus,attrs:{room:t.room}}),t.isChatOpen?s("div",{staticClass:"close-chat-btn",on:{click:t.toggleChat}},[s("i",{staticClass:"fas fa-times"})]):s("div",{staticClass:"open-chat-btn flex justify-center align-center",on:{click:t.toggleChat}},[s("i",{staticClass:"fas fa-comments"})])],1):t._e()},z=[],Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playlist-wrapper"},[s("div",{staticClass:"add-song-search-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search.txt,expression:"search.txt"}],ref:"searchInput",staticClass:"add-song-input",attrs:{type:"text",placeholder:"search song"},domProps:{value:t.search.txt},on:{input:[function(e){e.target.composing||t.$set(t.search,"txt",e.target.value)},t.searchSong]}}),s("div",{staticClass:"btn-search-close",on:{click:function(e){return e.stopPropagation(),t.closeSearch(e)}}},[s("i",{staticClass:"fas fa-times fa-2x"})])]),t.songs.length?s("ul",{staticClass:"search-res"},t._l(t.songs,function(e){return s("song-preview",{key:e.id,attrs:{song:e},on:{addSong:t.addSong}})})):s("div",{attrs:{id:"search-img-wrapper"}},[s("img",{attrs:{src:"https://res.cloudinary.com/da2l5r1cy/image/upload/v1543854878/kids-search-robot.png"}})])])},K=[],X=(s("386d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.song?s("li",{staticClass:"song-item"},[s("i",{staticClass:"fas fa-plus-circle control-arrows",on:{click:function(e){t.addSong(t.song)}}}),s("h3",{staticClass:"youtube-title"},[t._v(t._s(t.song.title))]),s("img",{staticClass:"youtube-img",attrs:{src:t.song.img}})]):t._e()}),Z=[],tt=s("be94"),et={name:"songPreview",props:{song:Object},methods:{addSong:function(t){this.$emit("addSong",Object(tt["a"])({},t)),this.$router.go(-1)}}},st=et,ot=(s("9a76"),Object(p["a"])(st,X,Z,!1,null,"6f7baa2a",null));ot.options.__file="SongPreview.vue";var nt=ot.exports,rt={name:"addSong",data:function(){return{search:{txt:""}}},methods:{searchSong:function(){this.$store.dispatch("searchSong",this.search.txt)},addSong:function(t){this.$emit("addSong",t)},closeSearch:function(){this.$router.go(-1)}},computed:{songs:function(){return this.$store.getters.searchRes}},components:{songPreview:nt},mounted:function(){this.$refs.searchInput.focus()}},it=rt,at=(s("82ed"),Object(p["a"])(it,Q,K,!1,null,"9f1f6aca",null));at.options.__file="AddSong.vue";var ct=at.exports,lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"chat-container flex"},[s("h2",{staticClass:"chat-title"},[t._v("ROOM CHAT")]),s("div",{ref:"msgs",staticClass:"chat-txts"},t._l(t.msgs,function(e,o){return s("div",{key:o,staticClass:"chat-txt-container"},[s("div",{staticClass:"chat-txt"},[s("span",{class:t.setColorToUser(e),on:{click:function(e){t.toggleUserPrev(o)}}},[t._v(t._s(e.user.name))]),t.isUserPrev===o?s("user-preview",{directives:[{name:"show",rawName:"v-show",value:e.user._id,expression:"msg.user._id"}],attrs:{user:e.user}}):t._e(),s("span",{staticClass:"msg-txt"},[t._v(": "+t._s(e.txt))])],1),s("div",{staticClass:"chat-line"})])})),s("form",{staticClass:"chat-form",on:{submit:function(e){return e.preventDefault(),t.sendMsg(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newMsg,expression:"newMsg"}],staticClass:"chat-input",attrs:{placeholder:"Talk with people in this room",type:"text"},domProps:{value:t.newMsg},on:{input:function(e){e.target.composing||(t.newMsg=e.target.value)}}})])])},ut=[],mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gif-search-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.gifSearch,expression:"gifSearch"}],attrs:{type:"text"},domProps:{value:t.gifSearch},on:{input:[function(e){e.target.composing||(t.gifSearch=e.target.value)},function(e){t.getGifs()}]}}),s("gif-preview",{attrs:{gifs:t.gifs}})],1)},pt=[],ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gif-preview-container"},[s("ul",t._l(t.gifs,function(e){return s("li",{key:e.id},[t._v("\n            "+t._s(e)+"\n        ")])}))])},dt=[],ht={props:["gifs"]},gt=ht,vt=(s("4299"),Object(p["a"])(gt,ft,dt,!1,null,null,null));vt.options.__file="GifPreview.vue";var yt=vt.exports,_t=s("bc3a"),Ct=s.n(_t),wt="dc6zaTOxFJmzC",bt="https://api.giphy.com/v1/gifs/search?",kt=5;function Ut(t){var e="".concat(bt,"&api_key=").concat(wt,"&q=").concat(t,"&limit=").concat(kt);return Ct.a.get(e).then(function(t){return t.data})}var $t={getGifs:Ut},Pt={data:function(){return{gifSearch:"",gifs:[]}},components:{GifPreview:yt},methods:{getGifs:function(){var t=this;$t.getGifs().then(function(e){return t.gifs=e})}}},St=Pt,xt=(s("2de1"),Object(p["a"])(St,mt,pt,!1,null,null,null));xt.options.__file="AddGif.vue";var Ot=xt.exports,Rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"user-preview"},[t.user?s("div",[s("i",{staticClass:"fas fa-user-plus icon-user-prev",on:{click:t.followUser}}),s("i",{staticClass:"fas fa-info-circle icon-user-prev",on:{click:t.goToUserProfile}}),s("i",{staticClass:"fas fa-comments icon-user-prev"})]):t._e()])},Tt=[],Lt={props:["user"],created:function(){console.log("userPrev:::",this.user)},data:function(){return{}},methods:{goToUserProfile:function(){this.$router.push("/profile/"+this.user._id)},followUser:function(){console.log("follow!")}}},Nt=Lt,jt=(s("95c2"),Object(p["a"])(Nt,Rt,Tt,!1,null,null,null));jt.options.__file="UserPreview.vue";var Et=jt.exports,It={props:["room"],data:function(){return{msgs:[],newMsg:"",isUserPrev:null}},methods:{sendMsg:function(){this.$socket.emit("sendMsg",{txt:this.newMsg,user:this.getUser}),this.newMsg=""},setColorToUser:function(t){return"guest"===t.isMyUser?"guest-chat-user":"true"===t.isMyUser?"chat-user":"other-chat-user"},toggleUserPrev:function(t){console.log("idx",t),null===this.isUserPrev?this.isUserPrev=t:this.isUserPrev===t?this.isUserPrev=null:this.isUserPrev=t}},sockets:{setNewMsg:function(t){var e=this;"guest"===t.user.name?t.isMyUser="guest":t.user.name!==this.getUser.name?t.isMyUser="false":t.isMyUser="true",this.msgs.push(t),this.$nextTick(function(){var t=e.$refs.msgs.lastChild;t.scrollIntoView()})}},computed:{getUser:function(){var t=this.$store.getters.getCurrUser;return t||{name:"guest"}}},created:function(){this.$socket.emit("chatRoomJoined",this.room)},components:{AddGif:Ot,userPreview:Et}},Gt=It,Bt=(s("f196"),Object(p["a"])(Gt,lt,ut,!1,null,null,null));Bt.options.__file="Chat.vue";var At=Bt.exports,Mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playlist-wrapper"},[s("div",{staticClass:"add-song-btn flex justify-center align-center",on:{click:t.routeAddSong}},[s("i",{staticClass:"fas fa-plus"})]),s("ul",{staticClass:"search-res"},t._l(t.playlistToShow,function(e){return s("li",{key:e.id,staticClass:"song-item"},[s("div",{staticClass:"playlist-controls flex flex-column"},[s("button",{staticClass:"playlist-up-arrow",on:{click:function(s){t.moveSong("up",e)}}},[s("i",{staticClass:"fas fa-arrow-circle-up control-arrows"})]),s("button",{staticClass:"playlist-down-arrow",on:{click:function(s){t.moveSong("down",e)}}},[s("i",{staticClass:"fas fa-arrow-circle-down control-arrows"})])]),s("h3",{staticClass:"youtube-title"},[t._v(t._s(e.title))]),s("img",{staticClass:"youtube-img",attrs:{src:e.img}})])}))])},qt=[],Dt=(s("20d6"),{props:["playlist"],data:function(){return{newPlaylist:[]}},computed:{playlistToShow:function(){return this.playlist.slice(1)}},methods:{moveSong:function(t,e){var s=this.playlist.findIndex(function(t){return e.id===t.id}),o=null;if("up"===t){if(1===s)return;o=s-1}else{if(s===this.playlist.length-1)return;o=s+1}var n=this.playlist[s];this.playlist[s]=this.playlist[o],this.playlist[o]=n,this.newPlaylist=this.playlist.slice(),this.$emit("moveSong",this.newPlaylist)},routeAddSong:function(){var t=this.$route.params.roomId;console.log(t),this.$router.push("/room/".concat(t,"/addsong"))}}}),Jt=Dt,Vt=Object(p["a"])(Jt,Mt,qt,!1,null,null,null);Vt.options.__file="PlaylistCmp.vue";var Wt=Vt.exports,Ht={data:function(){return{room:null,isUserPrev:!1,adminRoom:null,isAdmin:!1,isLiked:!1,isChatOpen:!1,roomLikes:0}},methods:{updatePlaylist:function(t){this.room.playlist=t,this.$socket.emit("updatePlaylist",this.room._id,t)},addSong:function(t){this.getUser._id?t.addedBy=this.getUser._id:t.addedBy=this.getUser.name,this.room.playlist.push(t);var e=this.room.playlist;this.$socket.emit("modifyPlaylist",this.room._id,e)},moveSong:function(t){this.room.playlist=t,this.$socket.emit("modifyPlaylist",this.room._id,t)},toggleLike:function(){this.getUser._id&&this.$socket.emit("updateLiked",{room:this.room,user:this.getUser})},toggleChat:function(){this.isChatOpen=!this.isChatOpen}},created:function(){var t=this.$route.params.roomId;this.$socket.emit("getRoomById",t),this.$socket.emit("getPlaylist")},computed:{getUser:function(){var t=this.$store.getters.getCurrUser;return t||{name:"guest"}},userLiked:function(){if(this.isLiked)return"unlike"},chatStatus:function(){if(this.isChatOpen)return"show-chat"},chatIsOpen:function(){if(this.isChatOpen)return"hide"}},sockets:{setRoom:function(t){this.room=t,this.roomLikes=this.room.userLikedIds.length,this.$socket.emit("getUserById",this.room.admin)},loadPlaylist:function(t){this.room.playlist=t},setUserProfile:function(t){this.adminRoom=t[0],this.isAdmin=!0},updateUser:function(t){console.log(t),this.$store.commit({type:"setCurrUser",currUser:t}),localStorage.setItem("currUser",JSON.stringify(t))}},watch:{"$route.params.roomId":function(t){this.$socket.emit("getRoomById",t),this.$socket.emit("getPlaylist")}},components:{addSong:ct,youtubePlayer:E,chatRoom:At,playlistCmp:Wt,userPreview:Et},destroyed:function(){this.$socket.emit("roomClose")}},Yt=Ht,Ft=Object(p["a"])(Yt,F,z,!1,null,null,null);Ft.options.__file="Room.vue";var zt=Ft.exports,Qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"createroom container"},[s("h2",{staticClass:"create-title"},[t._v("Create Room")]),s("form",{staticClass:"create-form",on:{submit:function(e){return e.preventDefault(),t.createRoom(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newRoom.name,expression:"newRoom.name"}],ref:"input",staticClass:"create-input",attrs:{placeholder:"room name",type:"text"},domProps:{value:t.newRoom.name},on:{input:function(e){e.target.composing||t.$set(t.newRoom,"name",e.target.value)}}}),t.errName?s("h2",{staticClass:"create-title"},[t._v("please enter a name!!")]):t._e(),s("select",{directives:[{name:"model",rawName:"v-model",value:t.newRoom.type,expression:"newRoom.type"}],staticClass:"create-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.newRoom,"type",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Select a genre")]),t._l(t.getGenre,function(e,o){return s("option",{key:o,domProps:{value:e}},[t._v(t._s(e))])})],2),t.errType?s("h2",{staticClass:"create-title"},[t._v("please select a type!!")]):t._e(),s("button",{staticClass:"tag-genre create-btn"},[t._v("Create!")])])])},Kt=[],Xt={data:function(){return{newRoom:{name:"",type:"",admin:"",userLikedIds:[],listeners:[],playlist:[{title:"Rick Astley - Never Gonna Give You Up (Video)",id:"dQw4w9WgXcQ",img:"https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"}]},errName:!1,errType:!1}},methods:{createRoom:function(){this.newRoom.name?this.newRoom.type?this.$socket.emit("createRoom",this.newRoom):this.errType=!0:this.errName=!0}},sockets:{setNewRoom:function(t){var e=this.getUser;this.$socket.emit("updateRoomsCreatedUser",e,t._id),this.$router.push("/room/"+t._id)}},created:function(){var t=this;this.getUser._id?(this.$nextTick(function(){t.$refs.input.focus()}),this.newRoom.admin=this.getUser._id):this.$router.push("/Signup")},computed:{getGenre:function(){return this.$store.getters.getGenre},getUser:function(){var t=this.$store.getters.getCurrUser;return t||{name:"guest"}}}},Zt=Xt,te=(s("ee42"),Object(p["a"])(Zt,Qt,Kt,!1,null,null,null));te.options.__file="CreateRoom.vue";var ee=te.exports,se=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"signup signup-img container"},[s("div",{staticClass:"signup-container"},[s("h2",{staticClass:"category-title"},[t._v("Signup")]),s("form",{staticClass:"signup-form",on:{submit:function(e){return e.preventDefault(),t.signupUser(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],staticClass:"signup-input",attrs:{placeholder:"User Name",type:"text"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],staticClass:"signup-input",attrs:{placeholder:"Password",type:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),s("button",{staticClass:"signup-btn"},[t._v("Signup")])])])])},oe=[],ne={data:function(){return{newUser:{name:"",password:"",roomsCreatedIds:[],roomsLikedIds:[],followersIds:[]}}},methods:{signupUser:function(){this.$store.dispatch({type:"signup",newUser:this.newUser}),this.newUser={name:"",password:"",roomsCreatedIds:[],roomsLikedIds:[]}}}},re=ne,ie=(s("8d1b"),Object(p["a"])(re,se,oe,!1,null,null,null));ie.options.__file="Signup.vue";var ae=ie.exports,ce=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h2",{staticClass:"category-title"},[t._v(t._s(t.genre))]),t.rooms.length>0?s("div",{staticClass:"room-list container"},t._l(t.rooms,function(e){return t.rooms?s("room-preview",{key:e._id,attrs:{room:e}}):t._e()})):s("div",[s("h2",{staticClass:"category-title"},[t._v("There are no rooms in this genre!")])])])},le=[],ue={name:"RoomSearch",components:{roomPreview:A},data:function(){return{rooms:[],genre:""}},created:function(){var t=this.$route.params.genreName;t&&(this.genre=t)},watch:{"$route.params.genreName":function(t){t&&(this.genre=t)}},sockets:{setRoomsFilter:function(t){this.rooms=t}},methods:{togglePlayer:function(t){this.$children.forEach(function(e){e!==t&&(e.isOpen=!1)}),t.isOpen=!t.isOpen}}},me=ue,pe=(s("45fd"),Object(p["a"])(me,ce,le,!1,null,null,null));pe.options.__file="RoomSearch.vue";var fe=pe.exports,de=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"profile "},[s("h2",{staticClass:"profile-name container"},[t._v(t._s(t.user.name))]),s("h2",{staticClass:"profile-name container"},[t._v("Created Room:")]),s("div",{staticClass:"room-list container"},t._l(t.user.roomsCreated,function(t){return s("room-preview",{key:t._id,attrs:{room:t}})})),s("h2",{staticClass:"profile-name container"},[t._v("Liked Room:")]),s("div",{staticClass:"room-list container"},t._l(t.user.roomsLiked,function(t){return s("room-preview",{key:t._id,attrs:{room:t}})}))])},he=[],ge={data:function(){return{user:Object}},components:{roomPreview:A},created:function(){var t=this.$route.params.userId;this.$socket.emit("getUserById",t)},computed:{},sockets:{setUserProfile:function(t){this.user=t[0]}},methods:{togglePlayer:function(t){this.$children.forEach(function(e){e!==t&&(e.isOpen=!1)}),t.isOpen=!t.isOpen}}},ve=ge,ye=(s("79cc"),Object(p["a"])(ve,de,he,!1,null,null,null));ye.options.__file="UserProfile.vue";var _e=ye.exports;o["a"].use(k["a"]);var Ce=new k["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:Y},{path:"/RoomSearch/:genreName?",name:"RoomSearch",component:fe},{path:"/room/:roomId",name:"room",component:zt,children:[{path:"",component:Wt},{path:"addsong",component:ct}]},{path:"/createroom",name:"createroom",component:ee},{path:"/signup",name:"signup",component:ae},{path:"/profile/:userId",name:"UserProfile",component:_e},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),we=s("2f62"),be="";function ke(t){return Ct.a.put("".concat(be,"/login"),{user:t}).then(function(t){return t.data})}function Ue(t){return console.log(t),Ct.a.post("".concat(be,"/singup"),{newUser:t}).then(function(t){return t.data})}var $e={login:ke,signup:Ue},Pe={state:{currUser:null},getters:{getCurrUser:function(t){return t.currUser},isUserLogin:function(t){return!!t.currUser}},mutations:{setCurrUser:function(t,e){var s=e.currUser;console.log("setcurruser",s),t.currUser=s},logoutUser:function(t){localStorage.removeItem("currUser"),t.currUser=null}},actions:{login:function(t,e){var s=t.commit,o=e.user;return $e.login(o).then(function(t){return t&&(console.log(t),s({type:"setCurrUser",currUser:t}),localStorage.setItem("currUser",JSON.stringify(t))),t})},signup:function(t,e){t.commit;var s=e.newUser;return $e.signup(s)}}},Se=(s("96cf"),s("1da1")),xe="AIzaSyBM9QKJYLqPjzhah37qpOBwUaG5n_eCVj8&q",Oe=s("bc3a"),Re=5;function Te(t){return Le.apply(this,arguments)}function Le(){return Le=Object(Se["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Oe.get("https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=".concat(xe,"=").concat(e,"&maxResults=").concat(Re));case 2:return s=t.sent,t.abrupt("return",s.data.items.map(function(t){return{title:t.snippet.title,id:t.id.videoId,img:t.snippet.thumbnails.medium.url}}));case 4:case"end":return t.stop()}},t,this)})),Le.apply(this,arguments)}var Ne={loadVideos:Te},je={state:{songs:[]},actions:{searchSong:function(t,e){var s=t.commit;e?Ne.loadVideos(e).then(function(t){s({type:"setSongs",songs:t})}):s({type:"setSongs",songs:[]})}},mutations:{setSongs:function(t,e){var s=e.songs;t.songs=s}},getters:{searchRes:function(t){return t.songs}}};o["a"].use(we["a"]);var Ee=new we["a"].Store({modules:{searchMoudle:je,userModule:Pe},state:{genre:["Hip Hop","Rock","Disco","DubStep","Techno","Funk","Trap","World","Dance","Classic","Pop","Other"],currPrevPlaylist:!1},getters:{getGenre:function(t){return t.genre}},actions:{setPrevPlaylist:function(t){t.currPrevPlaylist}}}),Ie=s("9483");Object(Ie["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var Ge=s("e0ec"),Be=s.n(Ge),Ae=s("5132"),Me=s.n(Ae),qe=(s("a0d8"),"");o["a"].use(new Me.a({debug:!0,connection:qe,vuex:{store:Ee,actionPrefix:"SOCKET_",mutationPrefix:"SOCKET_"}})),o["a"].use(Be.a),o["a"].config.productionTip=!1,new o["a"]({router:Ce,store:Ee,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var o=s("5e27"),n=s.n(o);n.a},"5e27":function(t,e,s){},"5fbe":function(t,e,s){t.exports=s.p+"img/logo2.8f385ee7.png"},"79cc":function(t,e,s){"use strict";var o=s("d64a"),n=s.n(o);n.a},"7cf0":function(t,e,s){},"82ed":function(t,e,s){"use strict";var o=s("3598"),n=s.n(o);n.a},"8d1b":function(t,e,s){"use strict";var o=s("7cf0"),n=s.n(o);n.a},"95c2":function(t,e,s){"use strict";var o=s("db92"),n=s.n(o);n.a},"9a76":function(t,e,s){"use strict";var o=s("2658"),n=s.n(o);n.a},a0d8:function(t,e,s){},bf11:function(t,e,s){},c964:function(t,e,s){},d64a:function(t,e,s){},db92:function(t,e,s){},ee42:function(t,e,s){"use strict";var o=s("15f9"),n=s.n(o);n.a},f196:function(t,e,s){"use strict";var o=s("23e2"),n=s.n(o);n.a}});
//# sourceMappingURL=app.f517ec1d.js.map