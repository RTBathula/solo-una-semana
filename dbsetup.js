var q = require('q')
var mongo = require('./databases/mongo')
var util = require('./helpers/util')
var env = require('./helpers/environment')

module.exports = {

  /*
    Connect DB,Create Index for recipe,Insert default admin
  */
  bootupDB: function(){

    let deferred = q.defer()

    //Connect mongodb
    mongo.connect(env.getConfigKeys().mongodbConnectUri,env.getConfigKeys().dbName).then(function(mongoCon){	

      //Assign mongo connection to global
    	global.mongoCon = mongoCon 

      let promisesList = []
      //Creating test index for recipe collection for name field 
      promisesList.push(mongo.createIndex(global.mongoCon,"recipe","name","text"))    
      //Find and create default admin if didn't exist     
      promisesList.push(mongo.findOneBy(global.mongoCon,"admin",{email: "admin@admin.com"}))   
        
      return q.all(promisesList)

    }).then(function(respList){   

      let adminDocument = respList[1] //extract admin document = require(response list     
      if(adminDocument){
        let subDeferred = q.defer()
        subDeferred.resolve("Already default admin is added")
        return subDeferred.promise
      }
              
      //insert new admin  
      let {encryptedPass,salt} = util.encryptPassword("admin")
      let adminObj = {email:"admin@admin.com",encryptedPassword: encryptedPass, salt : salt}             
      return mongo.insertOne(global.mongoCon,"admin",adminObj)  
     
    }).then(function(resp){
      deferred.resolve("Success")
    },function(error){
      console.log(error)
    	deferred.reject(error)
    })

    return deferred.promise
  }

}