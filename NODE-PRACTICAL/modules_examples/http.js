const { send } = require('./request')
const { read } = require('./response')
 
 function makeRequest(url, data) {
 	// body...
 	send(url, data);
 	return read();
 }

 const respondME = makeRequest('https://google.com', "hello")

 console.log(respondME)