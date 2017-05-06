var jwt = require('jsonwebtoken');
var env = require('./environment');

module.exports = {

	jwtSign: function(userId){  	
		return jwt.sign({userId: userId}, env.getConfigKeys().jwtSecret,{ expiresIn: '1h' })
	},

	jwtVerify: function(req, res, next){  	
	
		let response = {}
		let token    = req.headers['authorization']		

		if(!token || token==""){
			response.status     = "error"
			response.statusCode = 401
			response.message    = "Unauthorized. No token provided"
	        return res.status(401).json(response)
		}

		//Extract jwt token except "Bearer"
		token = token.split(' ')[1]

		jwt.verify(token, env.getConfigKeys().jwtSecret, function(err, decoded) {      
	      	if (err) {      		
	            response.status     = "error"
				response.statusCode = 401
				response.message    = "Unauthorized"
		        return res.status(401).json(response)
	      	}    
	      	next()      
	    })
	}

}
