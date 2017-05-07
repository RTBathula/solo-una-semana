var q = require('q')
var mongo = require('./databases/mongo')
var util = require('./helpers/util')
var env = require('./helpers/environment')
var readline = require('./helpers/readline')

var mongoCon

module.exports = {

  /*
    Get DB Instance
  */
  getDBInstance: function(){

  },

  /*
    Connect DB,Create Index for recipe,Insert default admin
  */
  bootupDB: function(){

    var _self = this

    let deferred = q.defer()

    var adminEmail  = null

    //Connect mongodb
    mongo.connect(env.getConfigKeys().mongodbConnectUri,env.getConfigKeys().dbName).then(function(mongoCon){	

      //Assign mongo connection to global
    	mongoCon = mongoCon 

      return _self.addDefaultAdmin()       

    }).then(function(resp){    
      deferred.resolve("Success")
    },function(error){      
    	deferred.reject(error)
    })

    return deferred.promise
  },

  addDefaultAdmin: function(){

    let deferred = q.defer()   

    let promisesList = []

    //Find default admin exist    
    promisesList.push(mongo.getListBy(mongoCon,"admin",{},0,999))  

    q.all(promisesList).then(function(respList){

      let subDeferred = q.defer()

      let adminList = respList[0]//extract admin document response list     
      if(adminList && adminList.length>0){ 
        subDeferred.resolve("Already default admin is added")                                               
      }else{  

        var adminEmail  = null

        readline.readline("Please enter default admin email:").then(function(replyEmail){
          adminEmail = replyEmail
          return readline.readline("Please enter default admin password:") 
        }).then(function(adminPassword){
          //insert new admin  
          let {encryptedPass,salt} = util.encryptPassword(adminPassword)
          let adminObj = {email: adminEmail,encryptedPassword: encryptedPass, salt : salt}                     
          return mongo.insertOne(mongoCon,"admin",adminObj)
        }).then(function(resp){
          subDeferred.resolve("Default admin is successfully added.")
        },function(error){
          deferred.reject(error)
        })
      }

      return subDeferred.promise 

    }).then(function(resp){
      console.log(resp)      
      deferred.resolve("Success")
    },function(error){
      deferred.reject(error)
    })

    return deferred.promise  
  }
}