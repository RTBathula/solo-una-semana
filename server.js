var app = require('./app')
var dbsetup = require('./dbsetup')

/*
  Bootup database and run express server
*/
dbsetup.bootupDB().then(function(){
  app.listen() //run express server
})