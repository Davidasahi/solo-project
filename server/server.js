const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/captcha/:index', (req, res) => {
  console.log('can you see me?');
  const index = req.params.index;
  const imagePath = path.resolve(__dirname, `../src/photos/dog${index}.png`);
  res.sendFile(imagePath, (err) => {
    if (err) {
      // Handle file sending error
      res.status(404).send('File not found');
    }
  });

  // res.setHeader('Content-Type', 'image/png');
  // res.sendFile(imageBuffer);
});

app.all('*', (req, res) => {
  console.log('Error senpnd the message');
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
