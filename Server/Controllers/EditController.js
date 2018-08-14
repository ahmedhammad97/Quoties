const Quote = require('../Database/models/Quote')
const User = require('../Database/models/User')

module.exports = {
  likeController(req, res){

    Quote.findById(req.body.quoteId).then(result=>{

      if(result){
        result.likes++;
        result.likedUsers.push(req.body.id);
        result.save();

        res.send({error : false});

      }else{res.send({error : true})}
    }).catch(err=>{console.log(err);})

  },

  deleteController(req, res){

  }

}
