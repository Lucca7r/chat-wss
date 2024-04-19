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

app.get("/", (req, res) => {
  res.sendFile(path.resolve("C:/Users/adm/Documents/chat-wss/login.html"));
});

const now = require("performance-now");

app.post("/home-pag", (req, res) => {
  console.log("Request received");
  const file = req.files.image;
  const output = path.join(__dirname, "output.jpg");

  let start = now();

  sharp(file.data)
    .greyscale()
    .toFile(output, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Image processing failed.");
      } else {
        let end = now();
        console.log(`Processing time: ${(end - start).toFixed(3)} ms`);
        res.sendFile(output);
      }
    });
});
app.listen(5502, () => {
  console.log("Server is running on port 5502");
});
