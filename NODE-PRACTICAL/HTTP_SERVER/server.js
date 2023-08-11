const express = require('express')
const app = express()
const port = 9000;

// creating an arrays to hold names
const me = [
	
	{
		id:1,
		name: 'samuel effiong'
	},

	{
		id:2,
		name: 'samuel effiong'
	},

	{
		id:3,
		name: 'samuel effiong'
	}
];
// middle ware

app.use ((req,res,next) => {
	const start = Date.now();
	next();
	// action of midleware
	// finding how long time it took
	const delta = Date.now() - start;
	console.log(`${req.method} ${req.url} ${delta}ms`);
})

// first routes
app.get('/', (req,res) => {
	res.send("hello samuel")
})

// sending data from front end to backend
app.use(express.json());

app.post('/me', (req,res) => {
	if (!req.body.name){
		return res.status(400).json({
			error: "missing ME name"
		})
	}

	const newME ={
		name: req.body.name,
		id: me.length
	};

	me.push(newME)
	res.json(newME)
});

// get all friends
app.get('/me', (req,res) => {
	res.send(me)
})

// finding data with id
app.get('/me/:meId' ,(req,res) => {
	const meId = Number(req.params.meId);
	const mes = me[meId];
	if (mes) {
		res.status(200).json(mes);
	} else {
		res.status(404).json ({
			error:"Me does not exist"
		})
	}
})

app.get('/big', (req,res) => {
	res.send("hello samuel")
});

//server spingup
app.listen(port, () => {
	console.log(`server listening on port ${port}.... welcome`)
})