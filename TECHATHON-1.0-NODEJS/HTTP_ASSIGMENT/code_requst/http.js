const http = require("http");
const path = require("path");
const fs = require("fs");

//todo: reading Data

const PORT = 8000;
const HOST = "127.0.0.1" || "localhost";

const server = http.createServer((req, res) => {
  let data = "";
  console.log(req.method);
  console.log(req.url);
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    console.log(`\n---------Data Start-------------`);
    const parseData = JSON.parse(data);
    const Lock_path = path.resolve(
      "..",
      "files",
      `${parseData.name}.${parseData.ext}`
    );
    fs.appendFile(Lock_path, data, (err) => {
      if (err) {
        res.end("error saving data");
        console.log(err.message);
      } else {
        res.write(" WELCOME TO Techathon Server");
        res.write("\n we serve u google Content-Type");
        res.write("\n \t\t need not remine u to verify Yourself");
        res.end("\nfile Saved successfully");
      }
    });
    console.log(data);
    console.log(`\n---------Data End---------------\n`);
    // res.end("Data Saved");
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Serving Running on ${HOST}:${PORT}`);
});
