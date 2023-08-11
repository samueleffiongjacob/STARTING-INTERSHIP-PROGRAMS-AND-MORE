// server work

const http = require("http");
// specifing host
const host = "127.0.0.1";
// specifing port
const port = 5000;

// creating the get another server
const request = http.get("http://www.sfm.com", (response) => {
  console.log(`Status code: ${response.statusCode}`);
  console.log(`Headers : ${response.headers}`);

  response.on("data", (chunk) => console.log(`chunk recived: ${chunk}`));
});

request.on("error", (err) => console.error(err));
