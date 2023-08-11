const path = require('path');
function bigmessage(req,res) {
	// body...
	res.sendFile(path.join(__dirname, "..", 'public', "MILLENNIUM FELLOWSHIP.PNG"))
}

// function homepage(req,res) {
// 	// body...
// 	res.send("hello samuel")
// }

module.exports = {
	bigmessage,
	// homepage,
}