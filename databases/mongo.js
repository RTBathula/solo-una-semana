var q = require('q')
var mongodb = require('mongodb')
var mongoClient = mongodb.MongoClient
var mongoCon

module.exports = {

  /*
      Connect to mongodb by connection URI
  */
   connect: function(connectionURI,dbName){
     
      let deferred = q.defer()

      try{
          
          mongoClient.connect(connectionURI,function(err, db) {
            if(err) {
              deferred.reject(err)
            } else {
              mongoCon =  db.db(dbName)  
              deferred.resolve(db.db(dbName))
            }
          })       

      }catch(e){                
          deferred.reject(e)            
      }

      return deferred.promise
  },

  /*
      Close the  mongodb connection
  */
   connectionClose: function(){
     
      let deferred = q.defer()

      try{
          
        // Force close the connection
        mongoCon.close(true, function(err, result) {
          if(err) {
              deferred.reject(err)
          } else {    
              deferred.resolve(result)
          }
        });       

      }catch(e){                
          deferred.reject(e)            
      }

      return deferred.promise
  },

  /*
      Drop database 
  */
   dropDatabase: function(){
     
      let deferred = q.defer()

      try{
          
        // Force close the connection
        mongoCon.dropDatabase(function(err, result) {
          if(err) {
              deferred.reject(err)
          } else {    
              deferred.resolve(result)
          }
        })      

      }catch(e){                
          deferred.reject(e)            
      }

      return deferred.promise
  },


  /*
      Create indexes for fields
  */
   createIndex: function(collectionName,fieldName,indexName){
     
      let deferred = q.defer()

      try{ 

        let indexObj        = {}
        indexObj[fieldName] = indexName

        let collection = mongoCon.collection(collectionName)       
        collection.createIndex(indexObj,function(err, res) {
          if(err) {                        
            deferred.reject(err)
          } else {                 
            deferred.resolve(res)
          }
        })

      }catch(e){                
        deferred.reject(e)            
      }

      return deferred.promise
  },

  /*
      Drop collection 
  */
   dropCollection: function(collectionName){
     
      let deferred = q.defer()

      try{
          
        let collection = mongoCon.collection(collectionName)  
        collection.drop(function(err, reply) {
          if(err) {
              deferred.reject(err)
          } else {    
              deferred.resolve(reply)
          }
        })      

      }catch(e){                
          deferred.reject(e)            
      }

      return deferred.promise
  },

  /*
     Insert a new document 
  */
  insertOne: function(collectionName, object){
     
      let deferred = q.defer()  

      try{  

        let collection = mongoCon.collection(collectionName)       

        object._id       = new mongodb.ObjectId() 
        object.createdAt = new Date().getTime()
        object.updatedAt = new Date().getTime()

        collection.insertOne(object, function(err, doc) {
          if(err) {                        
            deferred.reject(err)
          } else {           
            deferred.resolve(object)
          }
        })

      }catch(err){                      
        deferred.reject(response) 
      }

      return deferred.promise
  },

  /*
     Find the document by query
  */
   findOneBy: function(collectionName,query){
     
      let deferred = q.defer()  

      try{  

        let collection = mongoCon.collection(collectionName)       

        collection.find(query).limit(1).next(function(err, respDoc) {
          if(err) {                         
              deferred.reject(err)
          }else{
              deferred.resolve(respDoc)  
          }                 
        })

      }catch(err){                      
        deferred.reject(response) 
      }

      return deferred.promise
  },

  /*
     Get documents list by query,skip,limit
  */
   getListBy: function(collectionName, query, skip, limit){
     
      let deferred = q.defer()  

      try{  

        var collection=mongoCon.collection(collectionName)       

        collection.find(query).skip(skip).limit(limit).toArray(function(err, docs) {
          if(err) {                       
              deferred.reject(err)
          }else{
              deferred.resolve(docs)     
          }         
        })

      }catch(err){                      
        deferred.reject(err) 
      }

      return deferred.promise
  },

  /*
     Find and update or push the documents by query
  */
   findOneAndUpdateBy: function(collectionName, query, newSetObj, newPushObj){
     
      let deferred = q.defer()  

      try{  

        let updateSet = {} 

        if(!newSetObj || Object.prototype.toString.call(newSetObj)=="[object Null]"){
          newSetObj = {}
        }
        newSetObj.updatedAt = new Date().getTime()                 
        updateSet["$set"] = newSetObj     
        
        if(newPushObj && Object.prototype.toString.call(newPushObj)!="[object Null]"){
          updateSet["$push"] = newPushObj
        }

        var collection=mongoCon.collection(collectionName)         
        collection.findOneAndUpdate(query,updateSet,{returnOriginal: false}, function(err, resp) {
          if(err) {                                 
              deferred.reject(err)
          }else{           
              deferred.resolve(resp.value) 
          }                  
        })

      }catch(err){                      
        deferred.reject(err) 
      }

      return deferred.promise
  },

  /*
     Delete a document by query
  */
   deleteOneBy: function(collectionName, query){
     
      let deferred = q.defer()  

      try{  

        var collection=mongoCon.collection(collectionName)       

        collection.deleteOne(query, function(err, resp) {
          if(err) {                         
              deferred.reject(err)
          }else{
              deferred.resolve(resp) 
          }                  
        })

      }catch(err){                      
        deferred.reject(err) 
      }

      return deferred.promise
  },

  /*
     Delete multiple documents by query
  */
   deleteManyBy: function(collectionName, query){
     
      let deferred = q.defer()  

      try{  

        var collection=mongoCon.collection(collectionName)       

        collection.deleteMany(query, function(err, resp) {
          if(err) {                         
              deferred.reject(err)
          }else{
              deferred.resolve(resp) 
          }                  
        })

      }catch(err){                      
        deferred.reject(err) 
      }

      return deferred.promise
  },


  /*
     Search documents
  */
   searchBy: function(collectionName, search, language, caseSensitive, diacriticSensitive){
     
      let deferred = q.defer()  

      try{  

        let searcQuery = {}

        //Set the fields
        searcQuery["$text"] = {}
        if(typeof search === "string") {
          searcQuery["$text"]["$search"] = search;
        }

        if((language !== null) &&(typeof language !== "undefined") &&(typeof language === "string")) {
          searcQuery["$text"]["$language"] = language;
        }

        if((caseSensitive !== null) &&(typeof caseSensitive !== "undefined") &&(typeof caseSensitive === "boolean")) {
          searcQuery["$text"]["$caseSensitive"] = caseSensitive;
        }

        if((diacriticSensitive !== null) &&(typeof diacriticSensitive !== "undefined") &&(typeof diacriticSensitive === "boolean")) {
          searcQuery["$text"]["$diacriticSensitive"] = diacriticSensitive;
        }

        let collection = mongoCon.collection(collectionName)       

        collection.find(searcQuery).toArray(function(err, docs) {
          if(err) {                       
              deferred.reject(err)
          }else{
              deferred.resolve(docs)     
          }         
        })

      }catch(err){                      
        deferred.reject(err) 
      }

      return deferred.promise
  }
}