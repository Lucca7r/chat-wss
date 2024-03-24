const sharp = require('sharp');

function processImage(input, output) {
  console.log('Processing image...');

  sharp(input)
    .resize(300, 200)
    .greyscale() // transforma a imagem em preto e branco
    .toFile(output, (err) => {
      if (err) {
        console.error('Image processing failed:', err);
      } else {
        console.log('Image processed successfully!');
      }
    });
}

processImage('input.webp', 'output3.png');