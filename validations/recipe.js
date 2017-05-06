var util  = require('../helpers/util')
var mongodb = require('mongodb')

module.exports = {

    createNew: function( req, res, next){ 	
    	var newRecipeObj = req.body || null
        var response = {
        	status     : "error",
            statusCode : 400
        }   

        //Validate
        if(!newRecipeObj || Object.prototype.toString.call(newRecipeObj)=="[object Null]"){
        	response.message = "Invalid recipe object"
            return res.status(400).json(response)
        }

        if(newRecipeObj && (!newRecipeObj.uniqueId || newRecipeObj.uniqueId=="" || (newRecipeObj.uniqueId && util.hasWhiteSpace(newRecipeObj.uniqueId)))){  
            response.message = "Recipe unique id is required"
            return res.status(400).json(response)
        }

        if(newRecipeObj.uniqueId && (newRecipeObj.uniqueId.length<2)){       
            response.message = "Recipe unique id should contain atleast of 2 characters"
            return res.status(400).json(response)
        }

        if(newRecipeObj && (!newRecipeObj.name || newRecipeObj.name=="" || (newRecipeObj.name && util.hasWhiteSpace(newRecipeObj.name)))){
            response.message = "Recipe name is required"
            return res.status(400).json(response)
        }

        if(newRecipeObj.name && (newRecipeObj.name.length<2)){
            response.message = "Recipe name should contain atleast of 2 varters"
            return res.status(400).json(response)
        }
        
        if(newRecipeObj && (!newRecipeObj.prepTime || newRecipeObj.prepTime=="" || (newRecipeObj.prepTime && util.hasWhiteSpace(newRecipeObj.prepTime)))){
            response.message = "Recipe preparation time is required"
            return res.status(400).json(response)
        }

        var prepTime = parseInt(newRecipeObj.prepTime)
        if(isNaN(prepTime)){
            response.message = "Recipe preparation time should be integer"
            return res.status(400).json(response)
        }

        if(prepTime<1){
            response.message = "Recipe preparation time should be greater than 0"
            return res.status(400).json(response)
        }
       
        if(newRecipeObj && (!newRecipeObj.difficulty || newRecipeObj.difficulty=="" || (newRecipeObj.difficulty && util.hasWhiteSpace(newRecipeObj.difficulty)))){
            response.message = "Recipe difficulty is required"
            return res.status(400).json(response)
        }

        var difficulty = parseInt(newRecipeObj.difficulty)
        if(isNaN(difficulty)){
            response.message = "Recipe difficulty should be integer"
            return res.status(400).json(response)
        }
        
        if(difficulty<1 || difficulty>3){
            response.message = "Recipe difficulty should be in between 1-3"
            return res.status(400).json(response)
        }    

        if(typeof newRecipeObj.vegetarian != "boolean"){
            response.message = "Recipe vegetarian param is required and should be boolean(true/false)"
            return res.status(400).json(response)
        }

        return next()
    },

    getDetails: function( req, res, next){  
        var recipeId = req.params.id || null
        var response = {
            status     : "error",
            statusCode : 400
        }

        if(!recipeId || recipeId==""){
            response.message = "RecipeId id is required"
            return res.status(400).json(response)
        }   

        var objectID = mongodb.ObjectID
        if(!objectID.isValid(recipeId)){
            response.message = "Invalid RecipeId"
            return res.status(400).json(response)
        }

        return next()
    },

    updateRecipe: function( req, res, next){  
        var recipeId        = req.params.id || null
        var updateRecipeObj = req.body || null

        var response = {
            status: "error",
            statusCode : 400
        }

        if(!recipeId || recipeId==""){
            response.message = "RecipeId id is required"
            return res.status(400).json(response)
        }   

        var objectID = mongodb.ObjectID
        if(!objectID.isValid(recipeId)){
            response.message = "Invalid RecipeId"
            return res.status(400).json(response)
        }  

        //Validate
        if(!updateRecipeObj || Object.prototype.toString.call(updateRecipeObj)=="[object Null]"){
            response.message = "Invalid update recipe object"
            return res.status(400).json(response)
        }

        var allowedColumns                 = ["name","prepTime","difficulty","vegetarian"]
        var foundAtleastOneColumnForUpdate = false
        var requestedColumns               = []

        for (var column in updateRecipeObj) {
            if(allowedColumns.indexOf(column)>-1){
                foundAtleastOneColumnForUpdate = true
            }
            if (updateRecipeObj.hasOwnProperty(column)) {
                requestedColumns.push(column)                        
            }
        } 

        if(!foundAtleastOneColumnForUpdate){
            response.message = "should not found any field to update in recipe object"
            return res.status(400).json(response)
        }   

        if(requestedColumns.indexOf("name")>-1 && updateRecipeObj.name.length<2){
            response.message = "Recipe name should contain atleast of 2 varters"
            return res.status(400).json(response)
        }
        
        if(requestedColumns.indexOf("prepTime")>-1){
            var prepTime = parseInt(updateRecipeObj.prepTime)
            if(isNaN(prepTime)){
                response.message = "Recipe preparation time should be integer"
                return res.status(400).json(response)
            }
            if(prepTime<1){
                response.message = "Recipe preparation time should be greater than 0"
                return res.status(400).json(response)
            }
        }

        if(requestedColumns.indexOf("difficulty")>-1){
            var difficulty = parseInt(updateRecipeObj.difficulty)
            if(isNaN(difficulty)){
                response.message = "Recipe difficulty should be integer"
                return res.status(400).json(response)
            }
            
            if(difficulty<1 || difficulty>3){
                response.message = "Recipe difficulty should be in between 1-3"
                return res.status(400).json(response)
            }
        } 

        if(requestedColumns.indexOf("vegetarian")>-1 && typeof updateRecipeObj.vegetarian != "boolean"){      
            response.message = "Recipe vegetarian param is required and should be boolean(true/false)"
            return res.status(400).json(response)         
        }       

        return next()
    },

   deleteRecipe: function( req, res, next){  
        var recipeId = req.params.id || null
        var response = {
            status     : "error",
            statusCode : 400
        }

        if(!recipeId || recipeId==""){
            response.message = "RecipeId id is required"
            return res.status(400).json(response)
        }   

        var objectID = mongodb.ObjectID
        if(!objectID.isValid(recipeId)){
            response.message = "Invalid RecipeId"
            return res.status(400).json(response)
        }

        return next()
    },

    rateRecipe: function( req, res, next){  
        var recipeId        = req.params.id || null
        var rateRecipeObj   = req.body || null

        var response = {
            status: "error",
            statusCode : 400
        }

        if(!recipeId || recipeId==""){
            response.message = "RecipeId id is required"
            return res.status(400).json(response)
        }   

        var objectID = mongodb.ObjectID
        if(!objectID.isValid(recipeId)){
            response.message = "Invalid RecipeId"
            return res.status(400).json(response)
        }  

        //Validate
        if(!rateRecipeObj || Object.prototype.toString.call(rateRecipeObj)=="[object Null]"){
            response.message = "Invalid rate recipe object"
            return res.status(400).json(response)
        } 

        if(rateRecipeObj && (!rateRecipeObj.rate || rateRecipeObj.rate=="" || (rateRecipeObj.rate && util.hasWhiteSpace(rateRecipeObj.rate)))){
            response.message = "Rate param is required"
            return res.status(400).json(response)
        }

        var rate = parseInt(rateRecipeObj.rate)
        if(isNaN(rate)){
            response.message = "Rate should be integer"
            return res.status(400).json(response)
        }
        
        if(rate<1 || rate>5){
            response.message = "Rate should be in between 1-5"
            return res.status(400).json(response)
        }       

        return next()
    },

    searchRecipes: function( req, res, next){  
        var searchRecipeObj   = req.body || null

        var response = {
            status: "error",
            statusCode : 400
        }   

        //Validate
        if(!searchRecipeObj || Object.prototype.toString.call(searchRecipeObj)=="[object Null]"){
            response.message = "Invalid search recipe object"
            return res.status(400).json(response)
        } 

        if(searchRecipeObj && (!searchRecipeObj.search || searchRecipeObj.search=="" || (searchRecipeObj.search && util.hasWhiteSpace(searchRecipeObj.search)))){
            response.message = "Search param is required"
            return res.status(400).json(response)
        }

        if (typeof searchRecipeObj.search !== "string") {
            response.message = "Search param should be a string"
            return res.status(400).json(response)
        }    

        if ((searchRecipeObj.language !== null) && (typeof searchRecipeObj.language !== "undefined") && (typeof searchRecipeObj.language !== "string")) {    
            response.message = "Language param should be a string"
            return res.status(400).json(response)
        }

        if ((searchRecipeObj.caseSensitive !== null) && (typeof searchRecipeObj.caseSensitive !== "undefined") && (typeof searchRecipeObj.caseSensitive !== "boolean")) {    
            response.message = "CaseSensitive param should be a boolean"
            return res.status(400).json(response)
        }

        if ((searchRecipeObj.diacriticSensitive !== null) && (typeof searchRecipeObj.diacriticSensitive !== "undefined") && (typeof searchRecipeObj.diacriticSensitive !== "boolean")) {      
            response.message = "DiacriticSensitive param should be a boolean"
            return res.status(400).json(response)
        }       

        return next()
    }

}