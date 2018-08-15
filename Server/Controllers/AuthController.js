const User = require('../Database/models/User')
const bcrypt = require('bcrypt')
const keys = require('../Services/keys')


module.exports = {

  loginController(req, res){
    //Seach db for username.
    User.findOne({'username' : req.body.username}).then(result=>{
      if(result){ // User exists

        //Check if the hashed password matches the used one.
        bcrypt.compare(req.body.password, result.password, ((err, rep)=>{
          if(err){console.log(err);}
          if(rep){ //Password match

            //Info
            let info = {
              username : req.body.username,
              email : result.email,
              fullname : result.fullname,
              id : result._id
            }

            res.send({
              access : true,
              info : info
            })

          }else{ // Password didn't match
            res.send({access : false, message : "Incorrect Password"})
          }
        }))
      }else{ // Username not found
        res.send({access : false, message : "This user is not registered"})
      }
    }).catch(err=>{ console.log(err); })
  },


  registerController(req, res){
    //Check if any of username, email are available
    User.findOne({username : req.body.username}).then(result1=>{
      if(result1){res.send({valid : false, message : "Username taken"})}

      else{ //username is available for registeration
        User.findOne({email : req.body.email}).then(result2=>{
          if(result2){res.send({valid : false, message : "Email already registered"})}

          else{ //email is also available

            //Register User
            bcrypt.hash(req.body.password, keys.bcryptSalt, (err, hash)=>{
              if(err){console.log(err);}
              let tempUser = new User({
                username : req.body.username,
                fullname : req.body.fullname,
                email : req.body.email,
                password : hash,
                quotesId : []
              })
              tempUser.save()


              //Send valid response
              res.send({valid : true, id : tempUser._id})
            })

          }
        }).catch(err=>{console.log(err);})
      }
    }).catch(err=>{console.log(err);})
  },

  googleController(req, res){
    //Send userdata
  },

  facebookController(req, res){
    //send userdata
  }

}
