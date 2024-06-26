const express = require("express");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const app = express();

const fileUpload = require("express-fileupload");
app.use(fileUpload());

__dirname = path.resolve();

app.use(express.static("https://chat-wss-kutn.onrender.com/."));
app.use("/output", express.static(path.join(__dirname, "output")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("https://chat-wss-kutn.onrender.com/login.html"));
});

const now = require("performance-now");

app.post("/home-pag", (req, res) => {
  console.log("Request received");
  const outputDir = path.join(__dirname, "output");

  // Obter os arquivos enviados
  let files = req.files.images;

  // Contar o tempo de processamento
  let start = now();

  // Se apenas um arquivo foi enviado, transforme-o em um array
  if (!Array.isArray(files)) {
    files = [files];
  }

  // Processar cada arquivo
  Promise.all(
    files.map((file, index) => {
      // Caminho de saída para o arquivo processado
      const output = path.join(outputDir, `output${index}.jpg`);
      return sharp(file.data).greyscale().toFile(output);
    })
  ) // Enviar uma resposta após todos os arquivos serem processados
    .then(() => {
      let end = now();
      console.log(`Processing time: ${(end - start).toFixed(3)} ms`);

      // Definir o cabeçalho de cache para evitar o armazenamento em cache
      res.set({
        "Cache-Control":
          "no-store, no-cache, must-revalidate, private, Pragma: no-cache, Expires: 0, Cache-Control: max-age=0",
      });

      // Enviar um array de URLs para as imagens processadas
      res.json(
        files.map(
          (_, index) => `http://localhost:5502/output/output${index}.jpg`
        )
      );

      // Excluir arquivos após 5 minutos
      setTimeout(() => {
        fs.readdir(outputDir, (err, files) => {
          if (err) throw err;

          // Excluir todos os arquivos na pasta de saída
          let deletePromises = files.map((file) => {
            return new Promise((resolve, reject) => {
              fs.unlink(path.join(outputDir, file), (err) => {
                if (err) reject(err);
                resolve();
              });
            });
          });

          Promise.all(deletePromises)
            .then(() => {
              console.log("Files deleted");
            })
            .catch((err) => {
              // Tratar qualquer erro que possa ter ocorrido durante a exclusão
              console.error(err);
            });
        });
      }, 60000); // Tempo de exclusão
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Image processing failed.");
    });
});

app.listen(5502, () => {
  console.log("Server is running on port 5502");
});
