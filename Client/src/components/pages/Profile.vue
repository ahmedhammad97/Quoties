<template>
  <div class="profile">
    <div class="info">
      <center>
        <h2>{{this.$store.state.fullname}}</h2>
        <div id="noResults" v-if="empty">
          <br /><br /><br />
          <h4>You didn't post any quotes yet.</h4>
        </div>
      </center>
    </div>
    <br /><br />

    <ul>
      <li v-for="quote in quotes">
        <quote v-bind="quote"></quote><br />
      </li>
    </ul>
  </div>
</template>

<script>
import profileApi from "../../services/grapQuotes"
import quote from "../plugins/quote.vue"

export default {
  name: 'profile',
  components: {
    quote
  },
  data(){
    return{
      quotes : [],
      empty : false
    }
  },
  methods : {
    getQuotes(){
      profileApi.profile(this.$store.state.id, this.$route.params.username).then(response=>{
        this.quotes = response.data;
        if(response.data.length === 0){this.empty = true;}
      }).catch(err=>{ console.log(err); })
    }
  },
  created(){
    this.getQuotes()
  }

}
</script>

<style scoped>
  .profile{
    margin-top: 100px;
    color: white;
    margin-bottom: 100px;
  }
  ul{
    list-style-type: none;
    padding: 0;
  }
  li{
    margin: 0 auto;
  }
</style>
