'use strict';

var ObjectId=require('mongodb').ObjectId;

module.exports = function(){

  return {
  
    /*Desc   : Create new Event
      Params : Event object containing all fields
      Returns: Promise
               Resolve->saved Event Object
               Reject->Error on save()
    */
    createEvent: function (eventObject) {      

        var _self = this;
        var deferred = global.q.defer();

        try{
            
          eventObject.timestamp= new Date().getTime();
          
          var collection=global.mongoDB.collection("event");
          collection.save(eventObject, function(err, doc) {
              if (err) {                
                deferred.reject(err.errmsg);
              } else { 
                deferred.resolve(eventObject);
              }
          });

        }catch(err){        
          deferred.reject(err);
        }

        return deferred.promise;
    }, 

    

  }

};
