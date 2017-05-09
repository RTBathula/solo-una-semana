'use strict';

var q = require('q')
var mongodb = require('mongodb')
var db = require('../databases/mongo')

module.exports = {
  
    /*Desc   : Subscribe new user
      Params : {email,fullName,phone,interestedIn,userType}
      Returns: Promise
               Resolve->saved success
               Reject->Error on findOneBy() or subscription already found insertOne()
    */
    subscribeUser: function(subscribeObj){      
       
        var deferred = q.defer()
        var response = {}

        try{    

          //Find subscription  already exists
          subscribeObj.email        = subscribeObj.email.trim()
          subscribeObj.interestedIn = subscribeObj.interestedIn.trim()
          db.findOneBy("subscribe",{email: subscribeObj.email,interestedIn:subscribeObj.interestedIn})
          .then(function(doc){

            if(doc){
              response.status      = "error"
              response.statusCode  = 400
              response.message     = "This email is already subscribed to this interestedIn topic" 
              deferred.reject(response) 
            }else{
              var student = {                
                email         : subscribeObj.email,
                interestedIn  : subscribeObj.interestedIn,
                phone         : subscribeObj.phone,
                fullName      : subscribeObj.fullName,
                userType      : subscribeObj.userType.trim()                             
              }              
              //insert new recipe
              return db.insertOne("subscribe",student)
            }

          }).then(function(newDoc){

            response.status      = "success"
            response.statusCode  = 200
            response.message     = "Successfully created a student subscription" 
            response.data        = newDoc
            deferred.resolve(response)

          },function(err){
            response.status      = "error"
            response.statusCode  = 500
            response.message     = "Unable to create new subscribe. Please try after sometime"               
            deferred.reject(response) 
          })                                  

        }catch(err){ 
          response.status      = "error"
          response.statusCode  = 500
          response.message     = "something went wrong.please try again or contact sus admin"               
          deferred.reject(response)            
        }

        return deferred.promise
    }
}

