var express  = require('express')
var validate  = require('../validations/recipe')
var jwt = require('../helpers/jwt')

//Controllers
var recipeController = require('../controllers/recipe')

let app = express()

module.exports = function() {
   
    /*
        Create recipe
    */
    app.post('/recipes', jwt.jwtVerify, validate.createNew, function(req,res,next) {	

    	let newRecipeObj = req.body 

        recipeController.createNew(newRecipeObj).then(function(result){
        	return res.status(result.statusCode).json(result)
        },function(error){           
            return res.status(error.statusCode).json(error)        	
        })   
    }) 

    /*
        Get recipe details by id
    */
    app.get('/recipes/:id', validate.getDetails, function(req,res,next) {   

        let recipeId = req.params.id

        recipeController.getDetails(recipeId).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){
            return res.status(error.statusCode).json(error)
        })        
    })

    /*
        Get recipe list(optional skip,limit)
    */
    app.get('/recipes', function(req,res,next) {   

        let skip  = 0 // default
        let limit = 999 // default

        if(req.query.skip && req.query.skip!=""){
            skip = parseInt(req.query.skip)
        }
        if(req.query.limit && req.query.limit!=""){
            limit = parseInt(req.query.limit)
        }

        recipeController.getList(skip,limit).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){
            return res.status(error.statusCode).json(error)
        })        
    })

    /*
        Update recipe by id
    */
    app.put('/recipes/:id', jwt.jwtVerify, validate.updateRecipe, function(req,res,next) {   

        let recipeId         = req.params.id
        let updateRecipeObj  = req.body

        recipeController.updateRecipe(recipeId,updateRecipeObj).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){
            return res.status(error.statusCode).json(error)
        })        
    })

    /*
        Delete recipe by id
    */
    app.delete('/recipes/:id', jwt.jwtVerify, validate.deleteRecipe, function(req,res,next) {   

        let recipeId = req.params.id

        recipeController.deleteRecipe(recipeId).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){
            return res.status(error.statusCode).json(error)
        })        
    })

    /*
        Rate recipe by id
    */
    app.put('/recipes/:id/rate', validate.rateRecipe, function(req,res,next) {   

        let recipeId         = req.params.id
        let rateRecipeObj    = req.body

        recipeController.rateRecipe(recipeId,rateRecipeObj.rate).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){
            return res.status(error.statusCode).json(error)
        })        
    })

    /*
        Search recipe
    */
    app.post('/recipes/search', validate.searchRecipes, function(req,res,next) {   
        
        let searchRecipeObj = req.body

        recipeController.searchRecipes(searchRecipeObj).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){
            return res.status(error.statusCode).json(error)
        })        
    })

    return app
}
