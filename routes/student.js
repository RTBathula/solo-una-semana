var express  = require('express')
var validate  = require('../validations/student')
var nodeMail  = require('../thirdparty/nodeMail')

//Services
//var adminServices = require('../services/admin')

let app = express()

module.exports = function() {
   
   	/*
        Subscribe student
    */
    app.post('/student/subscribe', validate.subscribeStudent, function(req,res) {	

    	let studentObj = req.body 

        let mailObj={
            from: "battu.network@gmail.com",
            to: "battu.network@gmail.com",
            subject : "Hello from sus",
            text    : "hello from world",
            html : '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
        '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>'
        }
        nodeMail.sendMail(mailObj).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){
            return res.status(error.statusCode).json(error) 
        })       
   
    }) 
   
    return app
}

