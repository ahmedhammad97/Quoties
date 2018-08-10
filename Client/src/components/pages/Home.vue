<template>
  <div id="home">
    <loggedInHome v-if="this.$store.state.loggedIn"></loggedInHome>
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
}
</script>

<style scoped>
  #home{
    margin-top: 50px;
    width: 100%;
    color: white;
  }

</style>
