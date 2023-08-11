const express = require('express')

const meController = require('../controllers/me.controller');
const meRouter = express.Router();


// creating middle ware for ip adress

meRouter.use((req,res,next) => {
	console.log("ip address :" , req.ip);
	next();
})
// using routers
meRouter.post('/',meController.sendOneME);

// get all friends
meRouter.get('/', meController.Allme)

// finding data with id
meRouter.get('/:meId',meController.FinedOneME)

module.exports =  meRouter