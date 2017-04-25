'use strict';

var _ = require('underscore');
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: global.configKeys.nodeMailer.service,
    auth: {
      user: global.configKeys.nodeMailer.auth_user,
      pass: global.configKeys.nodeMailer.auth_pass
    }
});


module.exports = function (sendObj) {
    
  var obj = {   

    sendMail: function() {

      var _self = obj;
      var deferred = global.q.defer();

      try{

        // setup email data with unicode symbols
        let mailOptions = {
            from     : sendObj.from, // sender address
            to       : sendObj.to, // list of receivers
            subject  : sendObj.subject, // Subject line
            text     : sendObj.text, // plain text body
            html     : sendObj.html // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            deferred.reject(error);
          } else {
            console.log('Message %s sent: %s', info.messageId, info.response);
            deferred.resolve(info.response);
          }         
        });

      }catch(e){                
        deferred.reject(e);             
      }

      return deferred.promise;           
    }

  };

  return obj;
};
