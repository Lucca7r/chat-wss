const express = require('express');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const app = express();

app.post('process-image', (req, res) => {
  const file = req.files.image;
  const output = path.join(__dirname, 'output.jpg');

  sharp(file.data)
    .greyscale()
    .toFile(output, (err) => {
      if (err) {
        res.status(500).send('Image processing failed.');
      } else {
        res.sendFile(output);
      }
    });
});

app.listen(5500, () => {
  console.log('Server is running on port 5500');
});