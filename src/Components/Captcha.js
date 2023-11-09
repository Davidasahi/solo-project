import React from 'react';

const imageLocations = new Array(9).fill(null).map((value, index) => {
  return `/src/photos/dog${index}.png`;
});

const captcha = () => {
  const imageElements = imageLocations.map((imageUrl, index) => {
    return (
      <div key={index}>
        <img src={imageUrl} alt="" />
      </div>
    );
  });

  return (
    <div>
      <h2>Select the dogs</h2>
      <div className="Captcha-image">{imageElements}</div>
    </div>
  );
};

export default captcha;
