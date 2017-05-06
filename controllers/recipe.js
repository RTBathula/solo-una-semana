'use strict';

var q = require('q')
var mongodb = require('mongodb')
var db = require('../databases/mongo')

module.exports = {
  
    /*Desc   : Create new recipe
      Params : {uniqueId,name,prepTime,diificulty,vegetarian}
      Returns: Promise
               Resolve->saved success
               Reject->Error on findOneBy() or uniqueId already exist or insertOne()
    */
    createNew: function(newRecipeObj){      
       
        var deferred = q.defer()
        var response = {}

        try{    

          //Find recipe uniqueId if already exists
          newRecipeObj.uniqueId = newRecipeObj.uniqueId.trim()
          db.findOneBy(global.mongoCon,"recipe",{uniqueId: newRecipeObj.uniqueId}).then(function(doc){

            if(doc){
              response.status      = "error"
              response.statusCode  = 400
              response.message     = "Recipe with given uniqueId is already exist" 
              deferred.reject(response) 
            }else{
              var recipe = {               
                uniqueId   : newRecipeObj.uniqueId,
                name       : newRecipeObj.name.trim(),
                prepTime   : newRecipeObj.prepTime,
                difficulty : newRecipeObj.difficulty,
                vegetarian : newRecipeObj.vegetarian,
                rating     : []               
              }
              //insert new recipe
              return db.insertOne(global.mongoCon,"recipe",recipe)
            }

          }).then(function(newDoc){

            response.status      = "success"
            response.statusCode  = 200
            response.message     = "Successfully created a recipe" 
            response.data        = newDoc
            deferred.resolve(response)

          },function(err){
            response.status      = "error"
            response.statusCode  = 500
            response.message     = "Unable to create new recipe. Please try after sometime"               
            deferred.reject(response) 
          })                                  

        }catch(err){ 
          response.status      = "error"
          response.statusCode  = 500
          response.message     = "something went wrong.please try again or contact api admin"               
          deferred.reject(response)            
        }

        return deferred.promise
    },

    /*Desc   : Get recipe details
      Params : recipe id
      Returns: Promise
               Resolve->recipe details
               Reject->Error on findOneBy() or document not found
    */
    getDetails: function(recipeId){      
       
        var deferred = q.defer()
        var response = {}

        try{  

          db.findOneBy(global.mongoCon,"recipe",{_id: new mongodb.ObjectId(recipeId)}).then(function(doc){
            if(!doc){
              response.status      = "error"
              response.statusCode  = 400
              response.message     = "Unable to find recipe with given recipe id. Please check recipe id!"               
              deferred.reject(response)

            }else{
              response.status      = "success"
              response.statusCode  = 200
              response.message     = "Successfully fetched the recipe details"   
              response.data        = doc            
              deferred.resolve(response)
            }

          },function(err){
            response.status      = "error"
            response.statusCode  = 500
            response.message     = "Unable to find recipe. Please try after sometime"               
            deferred.reject(response) 
          })         

        }catch(err){        
          response.status      = "error"
          response.statusCode  = 500
          response.message     = "something went wrong.please try again or contact api admin"               
          deferred.reject(response)
        }

        return deferred.promise
    },

    /*Desc   : Get recipe list
      Params : skip,limit
      Returns: Promise
               Resolve->recipe list
               Reject->Error on getListBy()
    */
    getList: function(skip,limit){      
       
        var deferred = q.defer()
        var response = {}

        try{  

          db.getListBy(global.mongoCon,"recipe",{},skip,limit).then(function(list){

            response.status      = "success"
            response.statusCode  = 200
            response.message     = "Successfully fetched the recipe list"   
            response.data        = list            
            deferred.resolve(response) 

          },function(err){
            response.status      = "error"
            response.statusCode  = 500
            response.message     = "Something went wrong.Unable to get the recipe list."               
            deferred.reject(response) 
          })     

        }catch(err){        
          response.status      = "error"
          response.statusCode  = 500
          response.message     = "something went wrong.please try again or contact api admin"               
          deferred.reject(response) 
        }

        return deferred.promise
    },

    /*Desc   : Update recipe info
      Params : recipeId, {name,prepTime,difficulty,vegetarian}
      Returns: Promise
               Resolve->success message on update
               Reject->Error on findOneAndUpdateBy()
    */
    updateRecipe: function(recipeId,updateRecipeObj){  
        
        var deferred = q.defer()
        var response = {}

        try{  

          var query   = {_id: new mongodb.ObjectId(recipeId)}
          var newSet  = {}
          var newPush = null          

          if(updateRecipeObj.name){
            newSet.name = updateRecipeObj.name
          }
          if(updateRecipeObj.prepTime){
            newSet.prepTime = updateRecipeObj.prepTime
          }
          if(updateRecipeObj.difficulty){
            newSet.difficulty = updateRecipeObj.difficulty
          }
          if(typeof updateRecipeObj.vegetarian == "boolean"){
            newSet.vegetarian = updateRecipeObj.vegetarian
          }

          db.findOneAndUpdateBy(global.mongoCon,"recipe",query,newSet,newPush).then(function(doc){            
            response.status      = "success"
            response.statusCode  = 200
            response.message     = "Successfully updated the recipe"                                
            deferred.resolve(response)           

          },function(err){
            response.status      = "error"
            response.statusCode  = 500
            response.message     = "Unable find and update recipe. Please check recipe id"               
            deferred.reject(response) 
          })         

        }catch(err){        
          response.status      = "error"
          response.statusCode  = 500
          response.message     = "something went wrong.please try again or contact api admin"               
          deferred.reject(response)
        }

        return deferred.promise
   
    },

    /*Desc   : Devare recipe
      Params : recipe id
      Returns: Promise
               Resolve->recipe details
               Reject->Error on devareOneBy() or document not found
    */
    devareRecipe: function(recipeId){      
       
        var deferred = q.defer()
        var response = {}

        try{  

          db.devareOneBy(global.mongoCon,"recipe",{_id: new mongodb.ObjectId(recipeId)}).then(function(doc){            
            response.status      = "success"
            response.statusCode  = 200
            response.message     = "Successfully devared the recipe"                                
            deferred.resolve(response)           

          },function(err){
            response.status      = "error"
            response.statusCode  = 500
            response.message     = "Unable to devare recipe. Please try after sometime"               
            deferred.reject(response) 
          })         

        }catch(err){        
          response.status      = "error"
          response.statusCode  = 500
          response.message     = "something went wrong.please try again or contact api admin"               
          deferred.reject(response)
        }

        return deferred.promise
    },

    /*Desc   : Rate recipe 
      Params : recipeId, rate
      Returns: Promise
               Resolve->success message on update
               Reject->Error on findOneAndUpdateBy()
    */
    rateRecipe: function(recipeId,rate){  
        
        var deferred = q.defer()
        var response = {}

        try{  

          var query   = {_id: new mongodb.ObjectId(recipeId)}
          var newSet  = null
          var newPush = {rating: rate}        

          db.findOneAndUpdateBy(global.mongoCon,"recipe",query,newSet,newPush).then(function(doc){            
            response.status      = "success"
            response.statusCode  = 200
            response.message     = "Successfully rated the recipe"                                
            deferred.resolve(response)           

          },function(err){
            response.status      = "error"
            response.statusCode  = 500
            response.message     = "Unable find and rate recipe. Please re-check recipe id"               
            deferred.reject(response) 
          })         

        }catch(err){        
          response.status      = "error"
          response.statusCode  = 500
          response.message     = "something went wrong.please try again or contact api admin"               
          deferred.reject(response)
        }

        return deferred.promise
   
    },

    /*Desc   : Search recipe 
      Params : {search,language,caseSensitive,diacriticSensitive}
      Returns: Promise
               Resolve->search results
               Reject->Error on searchBy()
    */
    searchRecipes: function(searchRecipeObj){  
        
        var deferred = q.defer()
        var response = {}

        try{        

          db.searchBy(global.mongoCon,"recipe",searchRecipeObj.search,searchRecipeObj.language,searchRecipeObj.caseSensitive,searchRecipeObj.diacriticSensitive)
          .then(function(docs){            
            response.status      = "success"
            response.statusCode  = 200
            response.message     = "Successfully searched the recipes"
            response.data        = docs                                
            deferred.resolve(response)           

          },function(err){
            response.status      = "error"
            response.statusCode  = 500
            response.message     = "Unable search recipes. Please retry"               
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

