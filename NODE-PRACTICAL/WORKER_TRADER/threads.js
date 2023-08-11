/**
 * worker tread create instance of working process but are not the process
 * online clusters that can run on differnt port and multiple process worker_tread can't rather the are multiply on they same 1 processs
 */

const { isMainThread, workerData, Worker } = require("worker_threads");

if (isMainThread) {
  console.log(`main thread! process Id: ${process.pid}`);
  new Worker(__filename, {
    workerData: [7, 6, 2, 3],
  });
  new Worker(__filename, {
    workerData: [1, 3, 4, 3],
  });
} else {
  console.log(`worker id : ${process.pid}`);
  // [7, 6, 2, 3].sort()
  console.log(`${workerData} sorted is ${workerData.sort()}`);
}
