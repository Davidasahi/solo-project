import React from 'react';

const imageLocation = new Array(9).fill(null).map((value, index) => {
  return `/src/photos/image.jpeg`;
});

console.log('This is testing: ', imageLocation);
// const imageLocation = (new Array(arrayLength: 9)).fill(value:null).map((value, index: number) => {

const captcha = () => {
  return (
    <div className="Captcha">
      <h2>Select the dogs</h2>
      <div className="Captcha-image">
        {imageLocation.map((imageUrls) => {
          <div>
            <img src="imageUrls" alt="" />;
          </div>;
        })}
      </div>
    </div>
  );
};

export default captcha;
