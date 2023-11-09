import React from 'react';

const imageLocations = new Array(9).fill(null).map((value, index) => {
  return `/src/photos/dog${index}.png`;
});

const captcha = ({ key }) => {
  //Shulle the images
  const shuffledImages = imageLocations.sort(() => Math.random() - 0.5);

  //Render the image on 9 boxes on index.html
  const imageElements = shuffledImages.map((imageUrl, index) => {
    return (
      <div key={index}>
        <img src={imageUrl} alt="" />
      </div>
    );
  });

  //return on index.html
  return (
    <div>
      <h2>Select the dogs</h2>
      <div className="Captcha-image">{imageElements}</div>
    </div>
  );
};

export default captcha;
