// express work

const express = require("express");
const app = express();
const port = 8080;

// Routing and HTTP Verbs methods
// app.get("/", (req, res) => {
//   res.send("Get me to the home page");
// });

// app.put("/", (req, res) => {
//   res.send("put me to the home page");
// });

// app.delete("/", (req, res) => {
//   res.send("delete the main page");
// });

// app.post("/", (req, res) => {
//   res.send("post me to the main page");
// });

// Express Middleware
// app.use((req, res, next) => {
//   console.log("Time", Date.now());
//   next();
// });

// app.get(
//   "/user/:id",
//   (req, res, next) => {
//     console.log("Request Type", req.method);
//     next();
//   },
//   (req, res, next) => {
//     console.log("res.paradimg.id");
//   }
// );

//  CONNECTING DATABASE MYSQL
app.get(
  "/",
  (req, res) => {
    const mysql = require("mysql");
    const connection = mysql.createConnection({
      host: "localhost",
      user: "samueleffiong",
      password: "FGCIcisco15$",
      database: "my_db",
    });

    connection.connect();

    connection.query("SELECT 1+1 AS solution", (err, row, fields) => {
      if (err) throw err;

      console.log("The Solution Is:", row[0].solution);
    });

    connection.end();

    next();
  },
  (req, res) => {
    res.send(" I am connected to the database");
  }
);

app.listen(port, () => {
  console.log(`console running on port ${port}`);
});
