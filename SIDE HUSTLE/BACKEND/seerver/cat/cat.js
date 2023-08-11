// server work

const http = require("http");
// specifing host
const host = "127.0.0.1";
// specifing port
const port = 5000;

// creating the server
const server = http.createServer((req, res) => {
  // if you want to see what is inside the head
  //console.log(req);
  //to see method,url, hearders
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("content-type", "text/plain");
  res.end("hello from samuel effiong. HE fucks hard hard");
  // do everthing at onece
  //  res.writeHead(200, {'Content-Type': 'text/plain'});
});

server.listen(port, host, () => {
  console.log("server runnig at $(host):$(port)");
});
