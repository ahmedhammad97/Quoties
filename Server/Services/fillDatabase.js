const fs = require('fs');
const Quote = require('../Database/models/Quote')



var obj = JSON.parse(fs.readFileSync(__dirname + '/../Database/quotes.json', 'utf8'));

var num = 0
var lastQuote = ""
obj.forEach(record=>{

  if(record.Quote == lastQuote){return;}
  if(record.Author.length > 40){return;}
  let tempRecord = new Quote({
    body : record.Quote,
    likes : Math.floor(Math.random()*100),
    author : record.Author,
    username : record.Author,
    likedUsers : []
  })

  tempRecord.save();
  num++;
  lastQuote = record.Quote;
})

console.log(num + " records written");
