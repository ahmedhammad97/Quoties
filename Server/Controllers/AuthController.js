//imports

module.exports = {
  
  loginController(req, res){
    //Seach db for username.
    //Check if the hashed password matches the used one.
    //if so, return access granted , else return error
  },

  registerController(req, res){
    //Check if any of username, email are available
    //if so, return already used message
    //store data into db, return valid res
  },

  googleController(req, res){
    //Send userdata
  },

  facebookController(req, res){
    //send userdata
  }

}
