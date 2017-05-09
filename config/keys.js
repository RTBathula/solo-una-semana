module.exports = {
   "development": {
		"mongodbConnectUri" : "mongodb://localhost:27017",
		"dbName"            : "hellofresh",
		"jwtSecret"         : "hellofresh",
      "nodeMailer"        : {
         "service" : "Gmail",
         "auth_user" : "battu.network@gmail.com",
         "auth_pass" : ""
      }
   },
   "test": {
      "mongodbConnectUri" : "mongodb://mongodb:27017",
      "dbName"            : "test",
      "jwtSecret"         : "hellofresh"
   },
   "production": {
		"mongodbConnectUri" : "mongodb://mongodb:27017",
		"dbName"            : "hellofresh",
		"jwtSecret"         : "hellofresh"
   }
}
