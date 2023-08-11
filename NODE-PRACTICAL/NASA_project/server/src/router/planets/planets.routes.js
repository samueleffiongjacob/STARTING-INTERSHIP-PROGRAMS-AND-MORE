const express = require("express");

const { httpGetAllplanets } = require("./planets.controller");

const planetsRouter = express.Router();

//setting for knowing the endpoints/ip requsting
planetsRouter.use((req, res, next) => {
  console.log("ip address :", req.ip);
  next();
});

// endpoint to follow
planetsRouter.get("/", httpGetAllplanets);

module.exports = planetsRouter;
