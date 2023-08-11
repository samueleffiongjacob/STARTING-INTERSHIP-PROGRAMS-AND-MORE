// IMPORTING SYSTEM DEPENDENCIES AND THIRD PARTY MIDDLEWARES
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const api = require("./router/api");

// USING EXPRESS THE THIRD PARTY MODULE
const app = express();

// USING CORS THE THIRD PARTY MODULE FOR ACCEPTING FRONTEND ORIGIN
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// USING THIRD PARTY MODULE THAT WOULD SET ALL LOGGER FOR US TO KNOW WHAT IS GOING ON SERVER
app.use(morgan("combined"));

// CONVERTING NORMAL TEXT/HTML TO JSON USING EXPRESS
app.use(express.json());

// PRODUCTION FETCH FOR CLIENT DISPLAY
app.use(express.static(path.join(__dirname, "..", "public")));

// api routes handler

app.use("/v1", api);

// GIVING CLIENT POWER TO ROUTES ITSELF WHEN SERVER DOES NOT NOT HAVE ROUTES
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// SENDING OUT RESPONSE TO SERVER JS
module.exports = app;
