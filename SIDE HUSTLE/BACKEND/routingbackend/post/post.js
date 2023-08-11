const { response } = require("express");
const http = require("http");
const data = JSON.stringify({
  username: "desire",
});

const options = {
  hostname: "",
  port: "",
  method: "",
  path: "",
  Headers: {
    "content-Type": "application/json",
  },
};

const request = http.request(options, (response) => {
  console.log(`Status code: ${response.statusCode}`);
  console.log(`Headers: ${response.headers}`);

  response.on("data", (chunk) => console.log(`chunk received: ${chunk} `));
});

request.on("error", (err) => console, error(err));
request.write(data);
request.end();
