var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));

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

//Default link
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');  
});

//Ending
app.set('port', process.env.PORT || 1446);
var server = app.listen(app.get('port'), function() {	
	console.log("Solo 3 dias frontend-web is up and running on port:"+app.get('port'));
  console.log("Man cannot survive except through his mind-Aynrand");
});
