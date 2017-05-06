var express    = require('express');
var app        = express();
var path       = require('path');
var bodyParser = require('body-parser');
global.q       = require("q");

var helpers       = require('./helpers/util.js')();
global.configKeys = helpers.getConfigKeys()

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.use(function(req, res, next) {
  //if req body is a string, convert it to JSON.
  if(req.text && helpers._isJSON(req.text)){
    req.body = JSON.parse(req.text)
  }

  if(req.body && typeof(req.body)==="string" && helpers._isJSON(req.body)){
    req.body = JSON.parse(req.body)
  }

  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', "*")
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
  next()

})

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

//Connect MongoDB
_connectMongoDB();

//Routes
_routes();

//Default link
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');  
});

//Ending
app.set('port', helpers.getPort());
var server = app.listen(app.get('port'), function() {	
	console.log("Solo una semana frontend-web is up and running on port:"+app.get('port'));
  console.log("Man cannot survive except through his mind-Aynrand");
});

//Private Fuctions
function _connectMongoDB(){
  require('./databases/mongo.js')().connect()
  .then(function(mongoCon){
    global.mongoDB = mongoCon;     
  },function(error){
    console.log(error)     
  });
}

function _routes(){
  app.use('/', require('./routes/user')());
}

