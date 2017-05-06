var util  = require('../helpers/util')

module.exports = {

    loginAdmin: function(req, res, next){ 	
    	var adminObj = req.body || null
        var response = {
        	status     : "error",
            statusCode : 400
        }   

        //Validate
        if(!adminObj || Object.prototype.toString.call(adminObj)=="[object Null]"){
        	response.message = "Invalid login object"
            return res.status(400).json(response)
        }

        if(adminObj && (!adminObj.email || adminObj.email=="" || (adminObj.email && util.hasWhiteSpace(adminObj.email)))){  
            response.message = "email is required"
            return res.status(400).json(response)
        }   

        if(adminObj && (!adminObj.password || adminObj.password=="" || (adminObj.password && util.hasWhiteSpace(adminObj.password)))){
            response.message = "password is required"
            return res.status(400).json(response)
        }     

        return next()
    }

}