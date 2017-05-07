var q = require('q')
const readline = require('readline');
const rl = readline.createInterface({
  input  : process.stdin,
  output : process.stdout
})


module.exports = {
	
	readline: function(question){ 	

		let deferred = q.defer()
		
		rl.question(question, (answer) => {		 
		  console.log(`Reacorded your answer ${answer}`)
		  deferred.resolve(answer)
		  rl.close()
		})

		return deferred.promise
	}	
}
