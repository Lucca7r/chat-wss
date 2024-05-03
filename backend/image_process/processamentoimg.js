const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");
const now = require("performance-now");
const { Worker } = require("worker_threads");

const app = express();
app.use(fileUpload());

app.use(express.static("C:/Users/adm/Documents/chat-wss"));
app.use("/output", express.static(path.join(__dirname, "../output")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("C:/Users/adm/Documents/chat-wss/login.html"));
});

app.post("/home-pag", (req, res) => {
  console.log("Request received");
  const outputDir = path.join(__dirname, "..", "output");

  // Obter os arquivos enviados
  let files = req.files.images;

  // Contar o tempo de processamento
  let start = now();

  // Se apenas um arquivo foi enviado, transforme-o em um array
  if (!Array.isArray(files)) {
    files = [files];
  }

  // Processar cada arquivo
  let workers = files.map((file, index) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker("./image_process/imageWorker.js", {
        workerData: {
          fileData: file.data,
          output: path.join(outputDir, `output${index}.jpg`),
        },
      });

      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code != 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  });

  Promise.all(workers)
    .then(() => {
      let end = now();
      console.log(`Processing time: ${(end - start).toFixed(3)} ms`);

      // Definir o cabeçalho de cache para evitar o armazenamento em cache
      res.set({
        "Cache-Control":
          "no-store, no-cache, must-revalidate, private, Pragma: no-cache, Expires: 0, Cache-Control: max-age=0",
      });

      // Enviar uma resposta após todos os arquivos serem processados
      res.json(files.map((_, index) => `/output/output${index}.jpg`));

      // Limpar a pasta de saída após um certo período de tempo (por exemplo, 5 minutos)
      setTimeout(() => {
        fs.readdir(outputDir, (err, files) => {
          if (err) throw err;

          // Excluir todos os arquivos na pasta de saída
          for (const file of files) {
            fs.unlink(path.join(outputDir, file), (err) => {
              if (err) throw err;
            });
          }
        });
      }, 5 * 60 * 1000);
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).send("An error occurred while processing the images.");
    });
});

// Iniciar o servidor
app.listen(5502, () => {
  console.log("Server started on port 5502");
});
