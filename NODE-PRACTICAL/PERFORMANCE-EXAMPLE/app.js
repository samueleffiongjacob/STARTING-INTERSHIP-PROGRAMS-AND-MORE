/**
 * for production we use pm2
 *  which under the hood uses node.js cluster modules
 * pm2 stand for 'PROCESS MANNERGER 2
 *
 */

/**
 * pm2 usuage to use it
 * 1. yarn add or npm i pm2
 *
 * 2. just run pm2 to on your terminal to be sure it there by typing  pm2
 * just keep pressing enter to terminate
 *
 * to start pm2
 * pm2 start app.js
 *
 * LIST PROCESSES MANAGE BY PM 2
 * pm2 list || pm status || pm2 ls
 *
 * to stop pm
 * pm2 stop app.js(or any name)
 * pm2 stop app.js(id for sefic usesage) this one way to manage server
 *
 * or u could stop specific process by calling by id
 *
 * removing any server from pm2
 * pm2 delete app.js(or any name)
 * or u could delete specific process by calling by id
 *
 *
 * to create a advance pm2
 * pm2 start app.js  -i (i for instance)
 * wher e u cna specify the number of instance required eg 1 or 2 or 3
 * but for safty of your machine use max to know how instance u have on your machince
 *
 * or u use the max key to specy for max cpu for ,machine u are useing
 *
 * to view logs
 * pm2 logs
 *
 * to view advance logs
 * pm2 logs --lines 200 to see the last 200 lines that was preserve
 * pm2 logs app [--lines 1000]` to display logs
 *
 * TO SEND LOGS TO A SPECIFIC DATABASE OR FILE
 * pm2 start app.js -l logs.txt -i (max or any number
 *
 * WE CAN IDENTIFY MORE DETAILS ABOUT PM2 SERVICES
 * pm2 show (id number)
 * `pm2 env 3` to display environment variables
 * `pm2 monit` to monitor CPU and Memory usage app
 *
 * to restart pm2
 * pm2 restart app.js
 *
 * FOR EMEGENGCY U COULD DO 0 DOWNTIME CHANGE IF WANT TO CORRECT SOMETHING ON SERVER
 * pm2 reload app.js
 */
const express = require("express");

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}

app.get("/", (req, res) => {
  // things that makes code sycronous
  // JSON.stringify({}) => "{}"
  // JSON.stringify("{}") =>  {}
  //[5,1,2,3,4].sort()
  res.send("performance example");
});

app.get("/timer", (req, res) => {
  //delay the response
  delay(9000);
  res.send("Ding ding ding!");
});

console.log("Master has been Started ...");
console.log("Worker process started.");
app.listen(3000);
