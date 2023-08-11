const http = require("http");

//todo: POST data
const data = JSON.stringify({
  name: "samueleffiong",
  track: "Nodejs",
  community: "Techathon ",
  ext: "json",
  date: new Date().toISOString(),
});

// ("/files/samueleffiong.json");

const options = {
  hostname: "localhost",
  host: "localhost:8000",
  port: "8000",
  pathname: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = http.request(options, (res) => {
  let data = "";
  console.log(`Status Code: ${res.statusCode}`);
  console.log(`Status Message: ${res.statusMessage}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  res.setEncoding("utf-8");
  res.on("data", (chunk) => {
    data += chunk;
  });

  // req.on("error", (error) => {
  //   console.log(error);
  // });
  res.on("end", () => {
    console.log(`\n---------Data Start-------------\n`);
    // req.write(data);
    console.log(data);
    console.log(`\n---------Data End---------------\n\n`);
    // req.end("DATA SAVE TO MY DB");
  });
});

req.write(data);
req.end();
