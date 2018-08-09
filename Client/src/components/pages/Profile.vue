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
import quote from "../plugins/quote.vue"

export default {
  name: 'profile',
  components: {
    quote
  },
  data(){
    return{
      quotes : [
        {
          body : "Nothing is random .. it's just some calculations we don't understand",
          author : "Ahmed Hammad",
          likes : 15,
          username : "ahmedhammad97",
          isLiked : true
        },
        {
          body : "Failures, are the steps of success's stairs",
          author : "Fathy Lantern",
          likes : 21,
          username : "ahmedhammad97",
          isLiked : false
        },
        {
          body : "I think, therfore I am",
          author : "Rene Decerte",
          likes : 17,
          username : "Decarte",
          isLiked : true
        },
        {
          body : "Say good or keep silent",
          author : "Prophet Mohammed",
          likes : 5,
          username : "Mohamed",
          isLiked : false
        }
      ]
    }
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
