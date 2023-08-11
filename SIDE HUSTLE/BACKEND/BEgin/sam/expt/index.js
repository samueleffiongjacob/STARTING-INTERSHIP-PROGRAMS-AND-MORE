const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/plain");
  res.end("hello from samuel effiong");
});

server.listen(port, hostname, () => {
  console.log("server running at http://${hostname};${port/'}");
});

// server.listen(PORT, HOST, function() {
//   console.log("I'm listening at %s, on port %s", HOST, PORT);
// });
