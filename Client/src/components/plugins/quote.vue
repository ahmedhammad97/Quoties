<template>
  <div class="quote">
      <i class="fas fa-quote-left"></i>&nbsp&nbsp
          <span>{{body}}</span>
       &nbsp&nbsp<i class="fas fa-quote-right"></i><br /><br />

       <span class="toolbar">
         {{likes}} <i class="fas fa-heart" title="like"></i> &nbsp&nbsp
         <i class="fas fa-trash" title="delete" ></i> &nbsp&nbsp
         <i class="fas fa-copy" title="copy"></i>
       </span>

       <em>{{author}}</em><br />
  </div>
</template>

<script>

export default {
  name: 'quote',
  props : {
    body : String,
    likes : Number,
    author : String
  },
  methods: {

  }
}
</script>

<style scoped>
  .quote{
    width: 80%;
    margin-left: 10%;
    background-color: #272727;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px 1px black;
    position: relative;
    opacity: 0.99;
  }
  .fa-quote-right{
    text-align: right;
  }
  span{
    font-size: 20px;
  }
  em{
    float: right;
    padding-right: 20px;
    font-size: 15px;
  }
  i{
    cursor: pointer;
  }
  .toolbar{
    font-size: 18px;
  }
</style>
