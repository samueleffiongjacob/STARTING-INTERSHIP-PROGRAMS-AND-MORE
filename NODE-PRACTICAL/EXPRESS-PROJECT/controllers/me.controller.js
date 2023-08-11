const model = require('../models/me.model')

// get all friends
function Allme(req,res) {
	// body...
	res.send(model)
}	

// finding data with id

function FinedOneME(req,res) {
	const meId = Number(req.params.meId);
	const mes = model[meId];
	if (mes) {
		res.status(200).json(mes);
	} else {
		res.status(404).json ({
			error:"Me does not exist"
		})
	}
}

// post data with id

function sendOneME(req,res) {
	if (!req.body.name){
		return res.status(400).json({
			error: "missing ME name"
		})
	}

	const newME ={
		name: req.body.name,
		id: model.length
	};

	model.push(newME)
	res.json(newME)
}

module.exports = {
	sendOneME,
	FinedOneME,
	Allme,
}