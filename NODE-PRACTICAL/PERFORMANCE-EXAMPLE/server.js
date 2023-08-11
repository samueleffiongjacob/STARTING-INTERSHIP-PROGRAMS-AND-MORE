const express = require("express");
const cluster = require("cluster");
const os = require("os"); // os helps autamate or auto create a cluster

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    // event loop is blocked ....
  }
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

// cluster helps us to split our server for faster permormace
if (cluster.isMaster) {
  console.log("Master has been Started ...");
  /**
   * but this cluster . forked as limitations
   * by using os we want to limit the number of cluster.fork() created
   *
   * only use the below if the process u want to create is not much
   *  cluster.fork();
   *  cluster.fork();
   *
   * the below code should be use for automatic creation of cluster.fork()
   */

  const NUM_WORKERS = os.cpus().length;
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
} else {
  console.log("Worker process started.");
  app.listen(3000);
}
// note befor starting to send request from broswer u need to disable cache
/**
 * for production we use pm2
 * which under the hood uses node.js cluster modules
 *
 * pm2 stand for 'PROCESS MANNERGER 2
 */
