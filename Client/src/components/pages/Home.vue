<template>
  <div id="home">
    <loggedInHome v-if="loggedIn"></loggedInHome>
    <loggedOutHome v-else></loggedOutHome>
  </div>
</template>

<script>
import loggedInHome from '../plugins/loggedInHome.vue'
import loggedOutHome from '../plugins/loggedOutHome.vue'

export default {
  name: 'Home',
  components : {
    loggedInHome,
    loggedOutHome
  },
  data () {
    return {

    }
  },
  computed : {
    loggedIn(){
      return this.$store.state.loggedIn;
    }
  }
}
</script>

<style>
  #home{
    margin-top: 50px;
    width: 100%;
    color: white;
  }

</style>
