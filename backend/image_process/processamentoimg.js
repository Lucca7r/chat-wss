const express = require("express");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();

const fileUpload = require("express-fileupload");
app.use(fileUpload());

__dirname = path.resolve();

app.use(express.static("C:/Users/adm/Documents/chat-wss"));
app.use('/output', express.static(path.join(__dirname, 'output')));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("C:/Users/adm/Documents/chat-wss/login.html"));
});

const now = require("performance-now");

app.post("/home-pag", (req, res) => {
  console.log("Request received");
  let files = req.files.images;
  const outputDir = path.join(__dirname, "output");

  let start = now();

  // Se apenas um arquivo foi enviado, transforme-o em um array
  if (!Array.isArray(files)) {
    files = [files];
  }

  Promise.all(
    files.map((file, index) => {
      const output = path.join(outputDir, `output${index}.jpg`);
      return sharp(file.data).greyscale().toFile(output);
    })
  )
    .then(() => {
      let end = now();
      console.log(`Processing time: ${(end - start).toFixed(3)} ms`);
      // Enviar um array de URLs para as imagens processadas
      res.json(files.map((_, index) => `http://localhost:5502/output/output${index}.jpg`));
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Image processing failed.");
    });
});
app.listen(5502, () => {
  console.log("Server is running on port 5502");
});
