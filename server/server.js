const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next) => {

  return res.status(200).sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(3030); //listens on port 3030 -> http://localhost:3030/
