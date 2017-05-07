var express  = require('express')
var validate  = require('../validations/course')
var jwt = require('../helpers/jwt')

//Services
var courseServices = require('../services/course')

let app = express()

module.exports = function() {
   
    /*
        Create course
    */
    app.post('/course', jwt.jwtVerify, validate.createNew, function(req,res) {	

    	let newcourseObj = req.body 

        courseServices.createNew(newcourseObj).then(function(result){
        	return res.status(result.statusCode).json(result)
        },function(error){           
            return res.status(error.statusCode).json(error)        	
        })   
    }) 

    /*
        Get course details by id
    */
    app.get('/course/:id', validate.getDetails, function(req,res) {   

        let courseId = req.params.id

        courseServices.getDetails(courseId).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){
            return res.status(error.statusCode).json(error)
        })        
    })

    /*
        Get course list(optional skip,limit)
    */
    app.get('/course', function(req,res) {   

        let skip  = 0 // default
        let limit = 999 // default

        if(req.query.skip && req.query.skip!=""){
            skip = parseInt(req.query.skip)
        }
        if(req.query.limit && req.query.limit!=""){
            limit = parseInt(req.query.limit)
        }

        courseServices.getList(skip,limit).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){
            return res.status(error.statusCode).json(error)
        })        
    })

    /*
        Update course by id
    */
    app.put('/course/:id', jwt.jwtVerify, validate.updateCourse, function(req,res) {   

        let courseId         = req.params.id
        let updatecourseObj  = req.body

        courseServices.updateCourse(courseId,updatecourseObj).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){
            return res.status(error.statusCode).json(error)
        })        
    })

    /*
        Delete course by id
    */
    app.delete('/course/:id', jwt.jwtVerify, validate.deleteCourse, function(req,res) {   

        let courseId = req.params.id

        courseServices.deleteCourse(courseId).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){
            return res.status(error.statusCode).json(error)
        })        
    })

    /*
        Rate course by id
    */
    app.put('/course/:id/rate', validate.rateCourse, function(req,res) {   

        let courseId         = req.params.id
        let ratecourseObj    = req.body

        courseServices.rateCourse(courseId,ratecourseObj.rate).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){
            return res.status(error.statusCode).json(error)
        })        
    })

    /*
        Search course
    */
    app.post('/course/search', validate.searchCourse, function(req,res) {   
        
        let searchcourseObj = req.body

        courseServices.searchCourse(searchcourseObj).then(function(result){
            return res.status(result.statusCode).json(result)
        },function(error){
            return res.status(error.statusCode).json(error)
        })        
    })

    return app
}
