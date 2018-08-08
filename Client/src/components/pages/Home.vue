<template>
  <loggedInHome v-if="loggedIn"></loggedInHome>
  <loggedOutHome v-else></loggedOutHome>
</template>

<script>
import loggedInHome from './loggedInHome.vue'
import loggedOutHome from './loggedOutHome.vue'

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
      return false;
    }
  }
}
</script>

<style>

</style>
