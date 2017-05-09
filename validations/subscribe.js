var util  = require('../helpers/util')

module.exports = {

    subscribeUser: function(req, res, next){ 	
    	var subscribeObj = req.body || null
        var response   = {
        	status     : "error",
            statusCode : 400
        }   

        //Validate
        if(!subscribeObj || Object.prototype.toString.call(subscribeObj)=="[object Null]"){
        	response.message = "Invalid subscribe object"
            return res.status(400).json(response)
        }

        if(subscribeObj && (!subscribeObj.fullName || subscribeObj.fullName=="" || (subscribeObj.fullName && util.hasWhiteSpace(subscribeObj.fullName)))){
            response.message = "fullName is required"
            return res.status(400).json(response)
        }

        if(subscribeObj && (!subscribeObj.email || subscribeObj.email=="" || (subscribeObj.email && util.hasWhiteSpace(subscribeObj.email)))){  
            response.message = "email is required"
            return res.status(400).json(response)
        }   

        if(subscribeObj && !util.validarEmail(subscribeObj.email)){  
            response.message = "invalid email"
            return res.status(400).json(response)
        }

        if(subscribeObj && (!subscribeObj.phone || subscribeObj.phone=="" || (subscribeObj.phone && util.hasWhiteSpace(subscribeObj.phone)))){  
            response.message = "phone is required"
            return res.status(400).json(response)
        }
      
        if(subscribeObj && (subscribeObj.phone.length<9 || subscribeObj.phone.length>12)){
            response.message = "phone number should be in between 9 to 12 characters"
            return res.status(400).json(response)
        }

        if(subscribeObj && (!subscribeObj.interestedIn || subscribeObj.interestedIn=="" || (subscribeObj.interestedIn && util.hasWhiteSpace(subscribeObj.interestedIn)))){
            response.message = "interestedIn is required"
            return res.status(400).json(response)
        }

        if(subscribeObj && subscribeObj.interestedIn.length<2){
            response.message = "interestedIn is atleast of 2 characters"
            return res.status(400).json(response)
        }

        if(subscribeObj && (!subscribeObj.userType || subscribeObj.userType=="" || (subscribeObj.userType && util.hasWhiteSpace(subscribeObj.userType)))){
            response.message = "userType is required"
            return res.status(400).json(response)
        }

        if(subscribeObj && (subscribeObj.userType!="student" && subscribeObj.userType!="teacher")){
            response.message = "invalid userType"
            return res.status(400).json(response)
        }             

        return next()
    }

}