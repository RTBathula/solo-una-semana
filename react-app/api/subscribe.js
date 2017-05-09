import baseURL from 'config/keys'
import request from 'superagent'
import axios from "axios"
import * as util from 'helpers/util'

export const subscribeUser = (dataJson,successCB,errorCB) => {        

  var payload = {
    method         : "post",
    url            : baseURL+'/subscribe',
    data           : dataJson,    
    validateStatus :   function (status) {
      return status >= 200 && status < 500; //customized to catch 400 erros
    }    
  };

  axios(payload)
  .then(function(response) {    
    if(response.data.status == "error" || response.status!=200){     
      errorCB(response.data.message)
    }
    if(response.data.status == "success" || response.status==200){     
      successCB(response.data.message)
    }      
  }).catch((err)=>{
    let errMsg = err || "Unable to make the request";
    errorCB(errMsg)
  })
   
};

