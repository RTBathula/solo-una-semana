module.exports = function (){
	
    return  {
	   "development": {
	   		"mongodbConnectUri":"mongodb://localhost:27017"
	   },
	   "production": {
	   		"mongodbConnectUri":"mongodb://rtbathula:clearhaustest@ds153730.mlab.com:53730/clearhausdb"
	   }
	}
};

//Local MongoDB string
//mongodb://localhost:27017