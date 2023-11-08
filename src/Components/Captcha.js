import React from 'react';

const imageLocations = new Array(9).fill(null).map((value, index) => {
  return `/src/photos/image01.jpeg`;
});

// src/photos/image01.jpeg
// ${index}
console.log('This is testing: ', imageLocations);
// const imageLocation = (new Array(arrayLength: 9)).fill(value:null).map((value, index: number) => {

const captcha = () => {
  const imageElements = imageLocations.map((imageUrl) => {
    return (
      <div>
        <img src={imageUrl} alt="" />
      </div>
    );
  });

  console.log();
  return (
    <div className="Captcha">
      <h2>Select the dogs</h2>
      <div className="Captcha-image">{imageElements}</div>
    </div>
  );
};

export default captcha;

// .map((imageUrls) => {
//     <div>
//       <img src="imageUrls" alt="" />
//     </div>
