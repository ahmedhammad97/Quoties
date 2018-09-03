<template>
  <div class="login">
    <form v-on:submit="login">
      <center>
        <input type="text" name="username" placeholder="Username" v-model="username" required><br /><br />
        <input type="password" name="password" placeholder="Password" v-model="password" required><br /><br /><br />
        <button type="submit" name="button">Login</button>
      </center>
    </form>

    <socialAuth></socialAuth>
    <cookiesAlert></cookiesAlert>
  </div>
</template>

<script>
import authApi from '../../services/Auth'
import cookiesAlert from '../plugins/cookies.vue'
import socialAuth from '../plugins/socials.vue'

export default {
  name: 'login',
  components : {
    cookiesAlert,
    socialAuth
  },
  data () {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login(evn){
      evn.preventDefault()
      authApi.login(this.username, this.password).then(response=>{
        if(response.data.access){
          document.cookie = `state=${response.data.info.id}; path=/`;
          this.$store.commit('checkLoginState');
          this.$store.commit('userdata',response.data.info);
          this.$router.push({path: '/'});
        }else{
          alert(response.data.message);
        }
      }).catch(err=>{ console.log(err); })
    }
  }
}
</script>

<style scoped>

  form{
    margin-top: 150px;
    width: 50%;
    padding: 30px;
    position: absolute;
    border-right: 3px outset #757575;
  }
  input{
    text-align: center;
    border-radius: 25px;
    border: 0;
    width: 70%;
    font-size: 20px;
    height: 50px;
  }
  button{
    width : 70%;
    height: 50px;
    border-radius: 25px;
    border: 0;
    cursor: pointer;
    font-size: 18px;
    background-color: #4CAF50;
    font-weight: bold;
  }
  button:hover{
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }
</style>
