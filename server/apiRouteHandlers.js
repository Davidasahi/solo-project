const fs = require('fs');
const { newCaptchaImages } = require('./captchaImage');

async function getCaptchaImage(req, res) {
  const index = req.params.index;
  if (!req.session.captchaImages) {
    req.session.captchaImages = newCaptchaImages();
    await req.session.save();
  }

  res.setHeader('Content-Type', 'image/png');
  const imageBuffer = fs.readFileSync(req.session.captchaImages[index]);
  res.send(imageBuffer);
}

async function validateCaptcha(req, res) {
  const { message, selectedIndexes } = req.body;
  const dogsIndexes = req.session.captchaImages
    .map((path, index) => {
      return path.includes('/dogs-and-muffins/dog') ? index : -1;
    })
    .filter((index) => index !== -1);

  const captchaIsOk =
    JSON.stringify(dogsIndexes) === JSON.stringify(selectedIndexes.sort());

  req.session.captchaImages = newCaptchaImages();
  await req.session.save();

  const sent = captchaIsOk;
  res.json({ captchaIsOk, sent });
}

module.exports = {
  getCaptchaImage,
  validateCaptcha,
};
