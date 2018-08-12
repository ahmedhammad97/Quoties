<template>
  <div class="profile">
    <div class="info">
      <center>
        <h2>{{this.$store.state.fullname}}</h2>
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
      quotes : []
    }
  },
  methods : {
    getQuotes(){
      profileApi.profile(this.$store.state.username).then(response=>{
        this.quote = response.data;
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
