// server work

const http = require("http");
// specifing host
const host = "127.0.0.1";
// specifing port
const port = 5000;

// creating the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "application/json");
  const samuel = JSON.stringify({
    name: "SAMUEL EFFIONG",
    age: 23,
    country: "Nigeria",
  });
  res.write(samuel);
  res.end("hello from samuel effiong");
  // do everthing at onece
  //  res.writeHead(200, {'Content-Type': 'text/plain'});
});

server.listen(port, host, () => {
  console.log("server runnig at $(host):$(port)");
});
