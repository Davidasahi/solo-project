const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('../captcha/:index', (req, res) => {
  // const index = req.params.index;
  // console.log('What is this: ', { index });

  res.sendFile(path.resolve(__dirname, `../src/photos/dog${index}.png`));

  // const imageBuffer = fs.readFileSync(
  //   path.resolve(__dirname, `../src/photos/dog${index}.png`)
  // );

  // const imageBuffer = fs.readFileSync(`../src/photos/dog${index}.png`);
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
