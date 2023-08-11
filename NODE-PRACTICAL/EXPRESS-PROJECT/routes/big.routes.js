const express = require('express')


const bigController = require('../controllers/big.controller')
// using routers


const bigRouter = express.Router();
bigRouter.use((req,res,next) => {
	console.log("ip address :" , req.ip);
	next();
})
// first routes
bigRouter.get('/',bigController.bigmessage);
// bigRouter.get('/',bigController.homepage);

module.exports =  bigRouter