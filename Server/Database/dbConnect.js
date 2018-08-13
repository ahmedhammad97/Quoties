const mongoose = require('mongoose');

function connect(){
  mongoose.connect("mongodb://localhost:27017/quotiesTest", { useNewUrlParser: true });

  mongoose.Promise = global.Promise;

  mongoose.connection.once('open', function(){
      console.log('Connection has been made, now make fireworks...');
  }).on('error', function(error){
      console.log('Connection error:', error.err);
  });
}

module.exports = connect;
