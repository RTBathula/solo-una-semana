var crypto = require('crypto');

module.exports = {
	
	getEncryptPasswordAndSalt: function(password){ 	
		let salt       = crypto.randomBytes(16).toString('base64')
		let saltBase64 = new Buffer(salt, 'base64')
		return {
			encryptedPass : crypto.pbkdf2Sync(password, saltBase64, 10000, 64).toString('base64'),
			salt          : salt
		}
	},

	validatePassword: function(password, salt, encryptedPass){ 	
		let saltBase64 = new Buffer(salt, 'base64')
		return encryptedPass === crypto.pbkdf2Sync(password, saltBase64, 10000, 64).toString('base64')
	},

	hasWhiteSpace: function(txt){
	  return /^ *$/.test(txt)
	},

	validarEmail: function(email){
	  let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  return expr.test(email)
	},

	isJsonParsable: function(json){ 

	  try{
	    JSON.parse(json)  
	  }catch(e){
	    return false
	  }      
	  
	  return true
	}
}
