var express = require('express');
var app = express();

module.exports = function() {
	
    //routes
	app.get('/deeplink', function(req, res) {
		var id = req.query.id || ""
	  	return res.send('todova drivers app'); 
	}); 	
   
    return app;
}
