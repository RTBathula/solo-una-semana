'use strict';		
var q = require('q')
var env = require('../helpers/environment') 		
var _ = require('underscore');		
var nodemailer = require('nodemailer');		
		
// create reusable transporter object using the default SMTP transport		
var transporter = nodemailer.createTransport({		
   service: env.getConfigKeys().nodeMailer.service,		
   auth: {		
     user: env.getConfigKeys().nodeMailer.auth_user,		
     pass: env.getConfigKeys().nodeMailer.auth_pass		
   }		
});		
		
 		
module.exports = {		  		
 		
  sendMail: function(sendObj) {		
		
     var _self = this		
     var deferred = q.defer()
     var response = {}	
		
     try{		        

       // setup email data with unicode symbols		
       var mailOptions = {		
         from     : sendObj.from, // sender address		
         to       : sendObj.to, // list of receivers		
         subject  : sendObj.subject, // Subject line		
         text     : sendObj.text, // plain text body		
         html     : sendObj.html // html body		
       };		
		
       // send mail with defined transport object		
       transporter.sendMail(mailOptions, function(error, info){		
         if (error) {	
          response.status      = "success"
          response.statusCode  = 400
          response.message     = "Unable to send email"
          console.log(error)
          deferred.reject(response);		
         } else {		
            response.status      = "success"
            response.statusCode  = 200
            response.message     = info.response     
           console.log('Message %s sent: %s', info.messageId, info.response);		
           deferred.resolve(response);		
         }         		
       });		
		
     }catch(e){                		
       deferred.reject(e);             		
     }		
		
     return deferred.promise;           		
  }			
}