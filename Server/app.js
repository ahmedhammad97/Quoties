const express = require('express')
const cors = require('cors')
const passport = require('passport')
//const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
const passportSetup = require('./Services/OAuth')
const routes = require('./Routes/REST')
const dbConnection = require(__dirname + '/Database/dbConnect')
const keys = require('./Services/keys')

//const fillDatabase = require('./Services/fillDatabase') //Only once

//Main app
const app = express()


//Cors Api allows front-end port to hit this server
app.use(cors({
  origin : "http://localhost:8080",
  credentials : true
}))


//Setting server port
app.listen(process.env.PORT || 8081, ()=>{
  console.log("Listening to port 8081 .. Watch your mouth there.");
});


//Databse Connection
dbConnection();


//Parse cookies in req
app.use(cookieParser());


//Cookies
/*app.use(cookieSession({
  name: 'session',
  keys: [keys.cookies.encryptionKey],

  // Cookie Options
  maxAge: 60 * 60 * 1000 // 1 hour
}))*/


// initialize passport
app.use(passport.initialize());
app.use(passport.session());


//REST Apis
app.use(routes)
