var express  = require('express')
var validate  = require('../validations/subscribe')
var nodeMail  = require('../thirdparty/nodeMail')

//Services
var subscribeServices = require('../services/subscribe')

let app = express()

module.exports = function() {
   
   	/*
        Subscribe user
    */
    app.post('/subscribe', validate.subscribeUser, function(req,res) {	

    	let subscribeObj = req.body 

        subscribeServices.subscribeUser(subscribeObj).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){           
            return res.status(error.statusCode).json(error)         
        })      
   
    }) 
   
    return app
}

