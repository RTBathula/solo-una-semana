var q = require('q')
var mongo = require('./databases/mongo')
var util = require('./helpers/util')
var env = require('./helpers/environment')
var readline = require('./helpers/readline')

module.exports = {

  /*
    Connect DB,Create Index for recipe,Insert default admin
  */
  bootupDB: function(){

    let deferred = q.defer()

    var adminEmail  = null

    //Connect mongodb
    mongo.connect(env.getConfigKeys().mongodbConnectUri,env.getConfigKeys().dbName).then(function(mongoCon){	

      //Assign mongo connection to global
    	global.mongoCon = mongoCon 

      let promisesList = []
       
      //Find default admin exist    
      promisesList.push(mongo.getListBy(global.mongoCon,"admin",{},0,999))   
        
      return q.all(promisesList)

    }).then(function(respList){   

      let adminList = respList[0]//extract admin document response list     
      if(adminList && adminList.length>0){
        let subDeferred = q.defer()
        subDeferred.resolve("Already default admin is added")
        return subDeferred.promise
      }
       
      return readline.readline("Please enter default admin email:")  
    }).then(function(replyEmail){
      adminEmail = replyEmail
      return readline.readline("Please enter default admin password:") 
    }).then(function(adminPassword){

      //insert new admin  
      let {encryptedPass,salt} = util.encryptPassword(adminPassword)
      let adminObj = {email: adminEmail,encryptedPassword: encryptedPass, salt : salt}             
      return mongo.insertOne(global.mongoCon,"admin",adminObj)

    }).then(function(resp){
      deferred.resolve("Success")
    },function(error){      
    	deferred.reject(error)
    })

    return deferred.promise
  }

}