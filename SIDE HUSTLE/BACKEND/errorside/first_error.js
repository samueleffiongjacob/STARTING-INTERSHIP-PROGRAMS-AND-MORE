// server work

const http = require("http");
// specifing host
const host = "127.0.0.1";
// specifing port
const port = 5000;

// creating the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  req.on("error", (err) => {
    console.log("An error occured!");
  });

  res.on("error", (err) => {
    console.log("An error occured!");
  });
});

server.listen(port, host, () => {
  console.log("server runnig at $(host):$(port)");
});
