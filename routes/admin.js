var express  = require('express')
var validate  = require('../validations/admin')

//Services
var adminServices = require('../services/admin')

let app = express()

module.exports = function() {
   
   	/*
        Login admin
    */
    app.post('/admin/login', validate.loginAdmin, function(req,res) {	

    	let loginObj = req.body 

        adminServices.loginAdmin(loginObj.email,loginObj.password).then(function(result){
        	return res.status(result.statusCode).json(result)
        },function(error){           
            return res.status(error.statusCode).json(error)        	
        })   
    }) 
   
    return app
}

