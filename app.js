var q = require('q')
var express = require('express')
var bodyParser = require('body-parser')
var env = require('./helpers/environment')
var util = require('./helpers/util')

const app = express()
var server

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname))

//Middleware body parser 
app.use(function(req, res, next) {
  //if req body is a string, convert it to JSON.
  if(req.text && isJsonParsable(req.text)){
    req.body = JSON.parse(req.text)
  }

  if(req.body && typeof(req.body)==="string" && isJsonParsable(req.body)){
    eq.body = JSON.parse(req.body)
  }
  next()
})

//Middleware CORS 
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', "*")
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DEvarE')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
  next()
})

//Routes
app.use('/', require('./routes/course')()) 
app.use('/', require('./routes/admin')())
app.use('/', require('./routes/subscribe')())

if (process.env.NODE_ENV !== 'production') {
  var webpack = require('webpack')
  var webpackDevMiddleware = require('webpack-dev-middleware')
  var webpackHotMiddleware = require('webpack-hot-middleware')
  var config = require('./webpack.config.js')
  var compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

//Default route
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');  
})  

module.exports = {

  //Listen express server
  listen: function(){  

    var deferred = q.defer()

    app.set('port', env.getPort())
    server = app.listen(app.get('port'), function() {
      var status = "Solo una semana is up and running on port:"+app.get('port')
      console.log(status)
      deferred.resolve(server)
    })

    return deferred.promise
  },

  //Close express server
  close: function(){

    var deferred = q.defer()

    server.close(function(){  
      var status =  "Solo una semana ("+env.getEnvironment()+") server successfully closed"
      console.log(status)
      deferred.resolve(status) 
    })

    return deferred.promise
  }

}
