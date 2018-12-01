<template>
  <section class="login-user">
    <form class="login-form" @submit.prevent="loginUser">
      <input class="login-input" placeholder="User Name" v-model="user.name" type="text">
      <input class="login-input" placeholder="Password" v-model="user.password" type="password">
      <button class="login-btn">Login</button>
    </form>
    <!-- <h2 v-if="currUser">hello {{currUSer.name}}</h2> -->
    <h2 class="go-signup-btn" @click="goToSignup">Signup</h2>
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
        },
        goToSignup(){
            this.$emit('closeLogin')
            this.$router.push('/Signup')
        }
    }

}
</script>

<style>

</style>
