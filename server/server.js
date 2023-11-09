const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(
  '/src/photos',
  express.static(path.resolve(__dirname, '../src/photos'))
);

app.get('/captcha/:index', (req, res) => {
  const index = req.params.index;
  res.setHeader('Content-Type', 'image/png');
  const imagePath = path.resolve(__dirname, `../src/photos/dog${index}.png`);
  res.sendFile(imagePath, (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

app.all('*', (req, res) => {
  console.log('Error senpnd the message');
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
