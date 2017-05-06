global.keys  = require('../config/keys.js')();
var _        = require('underscore');


module.exports = function () {
    
  var obj = {
    
    isProduction: function() {

      if(process.env.PORT){
        return true
      }  
      return false      
    },

    getPort: function() {

      var _self = obj;

      if(_self.isProduction()){
        return process.env.PORT
      }
       
      return 1446      
    },

    getConfigKeys: function() {
      
      var _self = obj;

      if(_self.isProduction()){
        return global.keys["production"]
      }
         
      return global.keys["development"]      
    },

    _isJSON: function(json) {
      
      var _self = obj;

      //String
      if(json && typeof(json)==="string"){
        try{
          JSON.parse(json);
          return true;
        }catch(e){
          return false;
        }

      }else{
        return _.isObject(json);
      }
        
      return false;     
    }

  };

  return obj;
};
