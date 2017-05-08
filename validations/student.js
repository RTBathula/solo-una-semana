var util  = require('../helpers/util')

module.exports = {

    subscribeStudent: function(req, res, next){ 	
    	var studentObj = req.body || null
        var response   = {
        	status     : "error",
            statusCode : 400
        }   

        //Validate
        if(!studentObj || Object.prototype.toString.call(studentObj)=="[object Null]"){
        	response.message = "Invalid subscribe object"
            return res.status(400).json(response)
        }

        if(studentObj && (!studentObj.fullName || studentObj.fullName=="" || (studentObj.fullName && util.hasWhiteSpace(studentObj.fullName)))){
            response.message = "fullName is required"
            return res.status(400).json(response)
        }

        if(studentObj && (!studentObj.email || studentObj.email=="" || (studentObj.email && util.hasWhiteSpace(studentObj.email)))){  
            response.message = "email is required"
            return res.status(400).json(response)
        }   

        if(studentObj && !util.validarEmail(studentObj.email)){  
            response.message = "invalid email"
            return res.status(400).json(response)
        }

        if(studentObj && (!studentObj.phone || studentObj.phone=="" || (studentObj.phone && util.hasWhiteSpace(studentObj.phone)))){  
            response.message = "phone is required"
            return res.status(400).json(response)
        }
      
        if(studentObj && (studentObj.phone.length<9 || studentObj.phone.length>12)){
            response.message = "phone number should be in between 9 to 12 characters"
            return res.status(400).json(response)
        }

        if(studentObj && (!studentObj.interestedIn || studentObj.interestedIn=="" || (studentObj.interestedIn && util.hasWhiteSpace(studentObj.interestedIn)))){
            response.message = "interestedIn is required"
            return res.status(400).json(response)
        }

        if(studentObj && studentObj.interestedIn.length<2){
            response.message = "interestedIn is atleast of 2 characters"
            return res.status(400).json(response)
        }             

        return next()
    }

}