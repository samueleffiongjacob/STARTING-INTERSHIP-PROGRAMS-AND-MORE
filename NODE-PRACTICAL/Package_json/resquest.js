const axios = require('axios');

axios.get("https://www.google.com")
//using promises
.then((response) => {
	console.log(response)
})