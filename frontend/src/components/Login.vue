<template>
  <section class="login-user">
    <form class="login-form" @submit.prevent="loginUser">
      <input placeholder="User Name" v-model="user.name" type="text">
      <input placeholder="Password" v-model="user.password" type="password">
      <button>Login</button>
    </form>
    <!-- <h2 v-if="currUser">hello {{currUSer.name}}</h2> -->
    <router-link to="/Signup">Signup</router-link>
    <h2 v-if="isWorng">Worng!</h2>
  </section>
</template>

<script>
export default {
    data(){
        return{
            user: {
                name:'',
                password:''
            },
            isWorng : false,
            currUser: {}
        }
    },
    methods:{
        loginUser(){
            this.$store.dispatch({type: 'login',user: this.user})
            .then(user => {
                if(!user){
                    this.isWorng = true
                } else {
                    console.log(user)
                    this.isWorng = false
                    this.user = {name:'', password:''}
                }
            })
        }
    }

}
</script>

<style>

</style>
