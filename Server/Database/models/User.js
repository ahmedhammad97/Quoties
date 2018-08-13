const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username : String,
  fullname : String,
  email : String,
  password : String,
  quotesId : [String]
});

const User = mongoose.model('user', userSchema);

module.exports = User;
