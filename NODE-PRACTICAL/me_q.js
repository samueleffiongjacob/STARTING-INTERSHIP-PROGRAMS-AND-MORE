const newfriend = "host sex tonight";
const http = require("http");
const https = require("https");

const beware = 20000;
// FIRST ASYN PRACTICE
setTimeout(() => {
  console.log(newfriend);
}, 001);
console.log(beware);

// Using google sight

const req1 = http.request("http://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chuck :${chunk}`);
  });

  // end the callback function

  res.on("end", () => {
    console.log("no more data");
  });
});

// This what enables the program to work
req1.end();

// using another site.
const req = http.request("http://www.futminna.edu.ng", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chuck :${chunk}`);
  });

  // end the callback function

  res.on("end", () => {
    console.log("no more data");
  });
});

// This what enables the program to work
req.end();

// using  a secure protocal

const reqs = https.request("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chuck :${chunk}`);
  });

  // end the callback function

  res.on("end", () => {
    console.log("no more data");
  });
});

const reqs1 = https.request("https://www.futminna.edu.ng", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chuck :${chunk}`);
  });

  // end the callback function

  res.on("end", () => {
    console.log("no more data");
  });
});

// This what enables the program to work
reqs.end();
reqs1.end();
