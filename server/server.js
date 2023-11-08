const express = require('express');
const path = require('path');
const fs = require('fs');
const { withIronSession } = require('iron-session');
const { newCaptchaImages } = require('./captchaImage');
const apiRouteHandlers = require('./apiRouteHandlers');

const app = express();

app.use(express.json());

app.use(withIronSession({
  cookieName: 'session',
  password: process.env.SESSION_SECRET,
}));

app.get('/captchaImage/:index', apiRouteHandlers.getCaptchaImage);
app.post('/validateCaptcha', apiRouteHandlers.validateCaptcha);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
