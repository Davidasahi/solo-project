import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.scss';

// require routers
const apiRouter = require('./routes/api.js');

//handle requests for static files
// app.use(express.static('client'));

//define router handler
// app.use('/api', apiRouter);

// route handler to respond with main app
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'));
});

// catch-all route handler for any requests to an unknown route
app.all('*', (req, res) => {
  console.log('Error send the message');
  res.sendStatus(404);
});

// const el = document.getElementById('app');
// ReactDOM.render(<App />, el);

module.exports = app;
