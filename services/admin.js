'use strict';

var q = require('q')
var  db = require('../databases/mongo')
var util  = require('../helpers/util')
var jwt  = require('../helpers/jwt')

module.exports = {
    
    /*Desc   : Login Admin
      Params : {email,password}
      Returns: Promise
               Resolve->jwt token
               Reject->Error on findOneBy() or admin not found or invalid password
    */
    loginAdmin: function(email,password){      
       
      var deferred = q.defer()
      var response = {}

        try{    
         
          email = email.trim()
          db.findOneBy("admin",{email: email}).then(function(doc){

            if(doc){

              var isValid = util.validatePassword(password,doc.salt,doc.encryptedPassword)
              if(isValid){
                response.status      = "success"
                response.statusCode  = 200
                response.message     = "Successfully logged in" 
                response.token       = jwt.jwtSign(doc._id)
                deferred.resolve(response) 
              }else{
                response.status      = "error"
                response.statusCode  = 400
                response.message     = "Invalid admin password" 
                deferred.reject(response) 
              }

            }else{
              response.status      = "error"
              response.statusCode  = 400
              response.message     = "Admin with given email doesn't exist" 
              deferred.reject(response) 
            }

          },function(err){
            response.status      = "error"
            response.statusCode  = 500
            response.message     = "Unable to login admin. Please try after sometime"               
            deferred.reject(response) 
          })                                  

        }catch(err){ 
          response.status      = "error"
          response.statusCode  = 500
          response.message     = "something went wrong.please try again or contact api admin"               
          deferred.reject(response)            
        }

        return deferred.promise
    }
}
