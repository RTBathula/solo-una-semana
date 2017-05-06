module.exports = function () {
    
    var obj = {
      
        connect: function() {
            
            var _self = obj;
            var deferred = global.q.defer();
            try{
                var mongoClient = require('mongodb').MongoClient;
                mongoClient.connect(global.configKeys.mongodbConnectUri,function (err, db) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(db.db("solounasemanadb"));
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