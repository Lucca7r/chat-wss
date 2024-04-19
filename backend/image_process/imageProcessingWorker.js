const { parentPort, workerData } = require("worker_threads");
const sharp = require("sharp");

sharp(workerData.fileData)
  .greyscale()
  .toFile(workerData.output, (err) => {
    parentPort.postMessage(err);
  });