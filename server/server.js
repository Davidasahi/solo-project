const path = require('path');
const express = require('express');
const app = express();
const PORT = 3030;

import * as fs from 'fs';
import { withIronSessionApiRoute } from 'iron-session/next';

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next) => {
  return res.status(200).sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(3030); //listens on port 3030 -> http://localhost:3030/
