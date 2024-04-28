const { parentPort, workerData } = require("worker_threads");
const sharp = require("sharp");

console.log('passei aqui')
sharp(workerData.fileData)
  .greyscale()
  .toFile(workerData.output)
  .then(() => {
    parentPort.postMessage({ success: true });
  })
  .catch((err) => {
    parentPort.postMessage({ success: false, error: err });
  });
