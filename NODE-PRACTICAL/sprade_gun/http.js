const {send , read} = require('./me')
 function makeRequest(url, data) {
 	// body...
 	send(url, data);
 	return read();
 }

 const respondME = makeRequest('https://google.com', "hello")

 console.log(respondME)