<template>

  <b-navbar toggleable="md" type="light" variant="light">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">Quoties</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-nav-form v-if="loggedIn">
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search for quotes.."/>
      </b-nav-form>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
          <router-link to="/trending"><b-nav-item>Trending</b-nav-item></router-link>
        </b-navbar-nav>

        <div v-if="loggedIn">
          <b-navbar-nav>
            <router-link to="/profile"><b-nav-item>Profile</b-nav-item></router-link>
            <router-link to="/logout"><b-nav-item>Logout</b-nav-item></router-link>
          </b-navbar-nav>
        </div>

        <div v-else>
          <b-navbar-nav>
            <router-link to="/login"><b-nav-item>Login</b-nav-item></router-link>
            <router-link to="/register"><b-nav-item>Register</b-nav-item></router-link>
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
      return true;
    }
  }
}
</script>

<style>

</style>
