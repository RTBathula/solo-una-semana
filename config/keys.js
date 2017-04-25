module.exports = function (){
	
    return  {
	   "development": {
	   		"mongodbConnectUri":"mongodb://localhost:27017",
	   		"nodeMailer":{
	   			"service"   : "gmail",
	   			"auth_user" : "gmail.user@gmail.com",
	   			"auth_pass" : "yourpass"
	   		}
	   },
	   "production": {
	   		"mongodbConnectUri":"mongodb://rtbathula:clearhaustest@ds153730.mlab.com:53730/clearhausdb",
	   		"mailer":{
	   			"service"   : "gmail",
	   			"auth_user" : "gmail.user@gmail.com",
	   			"auth_pass" : "yourpass"
	   		}
	   }
	}
};

//Local MongoDB string
//mongodb://localhost:27017