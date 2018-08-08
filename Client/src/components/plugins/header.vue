<template>

  <b-navbar toggleable="md" type="light" variant="light">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <router-link to="/"><b-navbar-brand title="Home">Quoties</b-navbar-brand></router-link>

    <b-collapse is-nav id="nav_collapse">

      <b-nav-form v-if="loggedIn">
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search for quotes.."/>
      </b-nav-form>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
          <b-nav-item><router-link to="/trending">Trending</router-link></b-nav-item>
        </b-navbar-nav>

        <div v-if="loggedIn">
          <b-navbar-nav>
            <b-nav-item><router-link to="/profile">Profile</router-link></b-nav-item>
            <b-nav-item><router-link to="/logoutu">Logout</router-link></b-nav-item>
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

export default {
  name: 'header',
  computed : {
    loggedIn(){
      return this.$store.state.loggedIn;
    }
  }
}
</script>

<style>

</style>
