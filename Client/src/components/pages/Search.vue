<template>
  <div class="searchPage">
      <center><h2>Search results for <i>{{this.$route.params.term}}</i></h2></center><br /><br />
    <ul>
      <li v-for="quote in quotes">
        <quote v-bind:body="quote.body" v-bind:author="quote.author" v-bind:likes="quote.likes"></quote><br />
      </li>
    </ul>
  </div>
</template>

<script>
import quote from "../plugins/quote.vue"

export default {
  name: 'search',
  components: {
    quote
  },
  data(){
    return{
      quotes : [
        {
          body : "Nothing is random .. it's just some calculations we don't understand",
          author : "Ahmed Hammad",
          likes : 15
        },
        {
          body : "Failures, are the steps of success's stairs",
          author : "Fathy Lantern",
          likes : 21
        },
        {
          body : "I think, therfore I am",
          author : "Rene Decerte",
          likes : 17
        },
        {
          body : "Say good or keep silent",
          author : "Prophet Mohammed",
          likes : 5
        }
      ]
    }
  }

}
</script>

<style scoped>
  .searchPage{
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
