/*
Npm is the official node package manager
share code with developers
reuse our code in other project 
use code written by other in the project 
*/

const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("samuel effiong is bad on backend");
});

app.listen(port, () => {
  console.log("am her in your server am going to fuck u hard ${port}");
});
