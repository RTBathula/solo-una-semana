var util  = require('../helpers/util')
var mongodb = require('mongodb')

module.exports = {

    //logoUrl
    //contentUrl
    //title
    //subTitle
    //description
    //
    createNew: function( req, res, next){ 	
    	var newcourseObj = req.body || null
        var response = {
        	status     : "error",
            statusCode : 400
        }

        //Validate
        if(!newcourseObj || Object.prototype.toString.call(newcourseObj)=="[object Null]"){
        	response.message = "Invalid course object"
            return res.status(400).json(response)
        }

        if(newcourseObj && (!newcourseObj.uniqueId || newcourseObj.uniqueId=="" || (newcourseObj.uniqueId && util.hasWhiteSpace(newcourseObj.uniqueId)))){  
            response.message = "Recipe unique id is required"
            return res.status(400).json(response)
        }

        if(newcourseObj.uniqueId && (newcourseObj.uniqueId.length<2)){       
            response.message = "Recipe unique id should contain atleast of 2 characters"
            return res.status(400).json(response)
        }

        if(newcourseObj && (!newcourseObj.name || newcourseObj.name=="" || (newcourseObj.name && util.hasWhiteSpace(newcourseObj.name)))){
            response.message = "Recipe name is required"
            return res.status(400).json(response)
        }

        if(newcourseObj.name && (newcourseObj.name.length<2)){
            response.message = "Recipe name should contain atleast of 2 varters"
            return res.status(400).json(response)
        }
        
        if(newcourseObj && (!newcourseObj.prepTime || newcourseObj.prepTime=="" || (newcourseObj.prepTime && util.hasWhiteSpace(newcourseObj.prepTime)))){
            response.message = "Recipe preparation time is required"
            return res.status(400).json(response)
        }

        var prepTime = parseInt(newcourseObj.prepTime)
        if(isNaN(prepTime)){
            response.message = "Recipe preparation time should be integer"
            return res.status(400).json(response)
        }

        if(prepTime<1){
            response.message = "Recipe preparation time should be greater than 0"
            return res.status(400).json(response)
        }
       
        if(newcourseObj && (!newcourseObj.difficulty || newcourseObj.difficulty=="" || (newcourseObj.difficulty && util.hasWhiteSpace(newcourseObj.difficulty)))){
            response.message = "Recipe difficulty is required"
            return res.status(400).json(response)
        }

        var difficulty = parseInt(newcourseObj.difficulty)
        if(isNaN(difficulty)){
            response.message = "Recipe difficulty should be integer"
            return res.status(400).json(response)
        }
        
        if(difficulty<1 || difficulty>3){
            response.message = "Recipe difficulty should be in between 1-3"
            return res.status(400).json(response)
        }    

        if(typeof newcourseObj.vegetarian != "boolean"){
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

    updateCourse: function( req, res, next){  
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

   deleteCourse: function( req, res, next){  
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

    rateCourse: function( req, res, next){  
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

    searchCourse: function( req, res, next){  
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