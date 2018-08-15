<template>

  <b-navbar toggleable="md" type="light" variant="light" fixed="top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <router-link to="/"><b-navbar-brand title="Home"><i class="fas fa-quote-left"></i> Quoties <i class="fas fa-quote-right"></i></b-navbar-brand></router-link>

    <b-collapse is-nav id="nav_collapse">


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form v-if="this.$store.state.loggedIn" v-on:submit="search">
          <b-form-input size="sm" class="mr-sm-2" type="text" v-model="searchTerm" placeholder="Search for quotes.."/>
        </b-nav-form>

        <b-navbar-nav>
          <b-nav-item><router-link to="/trending">Trending</router-link></b-nav-item>
        </b-navbar-nav>

        <div v-if="this.$store.state.loggedIn">
          <b-navbar-nav>
            <b-nav-item><router-link :to="dynamicProfile">Profile</router-link></b-nav-item>
            <b-nav-item v-on:click="logout">Logout</b-nav-item>
          </b-navbar-nav>
        </div>

        <div v-else>
          <b-navbar-nav>
            <b-nav-item><router-link to="/login">Login</router-link></b-nav-item>
            <b-nav-item><router-link to="/register">Register</router-link></b-nav-item>
          </b-navbar-nav>
        </div>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

</template>

<script>
import authApi from '../../services/Auth'

export default {
  name: 'appHeader',
  data(){
    return{
      searchTerm : ""
    }
  },
  computed : {
    dynamicProfile(){
      return "/profile/" + this.$store.state.username;
    }
  },
  methods : {
    search(){
      if(this.searchTerm.trim() == ""){alert("Empty search!"); return;}
      this.$router.push({ path: `/search/${this.searchTerm}` });
      this.searchTerm = "";
    },
    logout(){
      document.cookie = 'state=' + this.$store.state.id + ';' + 'expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      this.$store.commit('checkLoginState');
      this.$router.push({path: '/'});
    }
  }
}
</script>

<style scoped>
  a{
    color: #757575;
  }
  a:hover{
    text-decoration: none;
    color: #424242;
    transition: color 0.3s ease;
  }
  .form-control-sm{
    border-radius: 15px;
  }
  .svg-inline--fa.fa-w-16{
    width: 12px;
  }
  .navbar-light .navbar-brand{
    color: #757575;
  }
  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover{
    color: #424242;
    transition: color 0.3s ease;
  }

  .navbar{
    box-shadow: 0 1px 20px 1px black;
  }

</style>
