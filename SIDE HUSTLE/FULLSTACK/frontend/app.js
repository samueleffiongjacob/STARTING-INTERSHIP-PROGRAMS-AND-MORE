// STARTING OUR SERVER WITH EXPRESS

const express = require("express");

// specifing path

const path = require("path");

// assigning express to app
const app = express();

// creating our static file ROUTE.
app.use(express.static(path.join(__dirname, "public/")));

// CREATTING OUR DYNAMIC ROUTE
app.set("views", path.join(__dirname, "src/views"));

// defining the engine

app.set("view engine", "ejs");

// express route difault

app.get("/", (req, res) => {
  res.render("index", {
    title: "SAMUEL EFFIONG",
  });
});

// port defining
app.listen(8080, () => {
  console.log("app running on port");
});
