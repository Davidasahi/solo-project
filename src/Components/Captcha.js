import React from 'react';
// import dog1 from '../src/photos/dog1.png';
// import dog2 from '../src/photos/dog2.png';
// import dog3 from '../src/photos/dog3.png';
// import dog4 from '../src/photos/dog4.png';
// import dog5 from '../src/photos/dog5.png';
// import dog6 from '../src/photos/dog6.png';
// import dog7 from '../src/photos/dog7.png';
// import dog8 from '../src/photos/dog8.png';
// import dog9 from '../src/photos/dog9.png';
// import muffin1 from '../src/photos/muffin1.png';
// import muffin2 from '../src/photos/muffin2.png';
// import muffin3 from '../src/photos/muffin3.png';
// import muffin4 from '../src/photos/muffin4.png';
// import muffin5 from '../src/photos/muffin5.png';
// import muffin6 from '../src/photos/muffin6.png';
// import muffin7 from '../src/photos/muffin7.png';
// import muffin8 from '../src/photos/muffin8.png';
// import muffin9 from '../src/photos/muffin9.png';

// const dogImages = [dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8, dog9];
// const muffinImages = [
//   muffin1,
//   muffin2,
//   muffin3,
//   muffin4,
//   muffin5,
//   muffin6,
//   muffin7,
//   muffin8,
//   muffin9,
// ];

// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

// const shuffledDogs = shuffleArray(dogImages).slice(0, 4);
// const shuffledMuffins = shuffleArray(muffinImages).slice(0, 5);
// const imageLocations = shuffleArray([...shuffledDogs, ...shuffledMuffins]);
// .fill(null)
// .map((value, index) => {
//   return `/src/photos/dog${index}.png`;
// });

console.log('What is it ', imageLocations);

const imageLocations = new Array(9).fill(null).map((value, index) => {
  // return `/src/photos?=index${index}.png`;
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
    <div className="Captcha">
      <h2>Select the dogs</h2>
      <div className="Captcha-image">{imageElements}</div>
    </div>
  );
};

export default captcha;
