var keys = require('../config/keys');

module.exports = {

  getEnvironment: function(){

    let envVariable = "development" // default
    let envSet      = process.env.NODE_ENV

    if(envSet && envSet!==""){
      envVariable = envSet
    }

    return envVariable
  },

  getPort: function(){

    let port    = 1446 // default
    let portSet = process.env.PORT

    if(portSet && portSet!=""){
      port = process.env.PORT
    }
     
    return port
  },

  getConfigKeys: function(){   
    return keys[this.getEnvironment()] 
  }
}
