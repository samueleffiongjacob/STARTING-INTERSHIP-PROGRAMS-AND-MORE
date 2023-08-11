
import { send } from './request.mjs'
import { read } from'./response.mjs'
 
 function makeRequest(url, data) {
 	// body...
 	send(url, data);
 	return read();
 }

 const respondME = makeRequest('https://google.com', "hello")

 console.log(respondME)
