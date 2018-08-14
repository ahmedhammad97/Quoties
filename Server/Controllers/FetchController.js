const Quote = require('../Database/models/Quote')
const User = require('../Database/models/User')


module.exports = {

  fetchSearch(req, res){

  },

  fetchProfile(req, res){
    Quote.find({username : req.body.username}).then(response=>{

      let resultArray = []
      response.forEach((record)=>{
        resultArray.push({
          body : record.body,
          likes : record.likes,
          author : record.author,
          username : record.username,
          isLiked : isLiked(req.body.id, record)
        })
      })

      //response
      res.send(resultArray);

    }).catch(err=>{console.log(err);})
  },

  fetchTrending(req, res){

  }

}

var isLiked = function(id, record){
  let tempArr = record.likedUsers.filter(val=>{
    return val === id;
  })
  return tempArr.length !== 0;
}
