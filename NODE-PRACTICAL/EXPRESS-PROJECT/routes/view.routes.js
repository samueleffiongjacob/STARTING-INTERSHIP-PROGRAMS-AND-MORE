const express = require('express')

const viewController = require('../controllers/view.controller');
const viewRouter = express.Router();


// creating middle ware for ip adress

viewRouter.use((req,res,next) => {
	console.log("ip address :" , req.ip);
	next();
})
// // Routing for contact home
viewRouter.get('/',viewController.home);

// // Routing for login page
viewRouter.get('/', viewController.Login)

// Routing for contact page
viewRouter.get('/',viewController.Contact)
// Routing for register page
viewRouter.get('/',viewController.Register)

module.exports =  viewRouter
