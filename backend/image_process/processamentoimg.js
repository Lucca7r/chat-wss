const express = require('express');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const cors = require('cors');  

const app = express();

app.use(cors());  

__dirname = path.resolve();

app.post('/frontend/screen/Home/home-pag.html', (req, res) => {
  console.log('Request received');
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

app.listen(5502, () => {
  console.log('Server is running on port 5502');
});

app.use(cors({
  origin: '/process'  
})); 