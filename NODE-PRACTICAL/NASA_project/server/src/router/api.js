const express = require("express");

// IMPORTING RELEVANT ROUTERS FROM ROUTES FOLDERS
const planetsRouter = require("./planets/planets.routes");
const launchesRouter = require("./launches/launches.routes");

const api = express.Router();

// SETING ROUTERS FOR EXPRESS TO USE IN RESPONSE
api.use("/planets", planetsRouter);
api.use("/launches", launchesRouter);

module.exports = api;
