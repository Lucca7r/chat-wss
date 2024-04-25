const { parentPort, workerData } = require('worker_threads');
const Jimp = require('jimp');

// Cria uma nova imagem a partir dos dados recebidos
const image = new Jimp(workerData);

// Converte a imagem para cinza
image.greyscale();

// Envia os dados da imagem de volta para a thread principal
parentPort.postMessage(image.bitmap);