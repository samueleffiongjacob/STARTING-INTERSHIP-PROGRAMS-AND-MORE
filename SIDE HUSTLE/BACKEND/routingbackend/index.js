const http = require("http");
const hostname = "127.0.0.1";
const port = 5000;
const server = http.createServer((req, res) => {
  const urlpath = req.url;

  if (urlpath === "/") {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("Hello samuel effiong");
  } else if (urlpath === "/about") {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("I want to fuck your pussy babe");
  } else if (urlpath === "/users") {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("I want to fuck your pussy babe and very hard");
  } else {
    res.statusCode = 200;
    res.setHeader("content-Type", "text/plain");
    res.end("Page not found");
  }
});
server.listen(port, hostname, () => {
  console.log("Server running...");
});
