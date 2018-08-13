const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  body : String,
  likes : Number,
  author : String,
  username : String,
  likedUsers : [String]
});

const Quote = mongoose.model('quote', quoteSchema);

module.exports = Quote;
