import React, { useState, useEffect } from 'react';

// Arrays containing paths to 9 images
const imageLocations01 = new Array(9).fill(null).map((value, index) => {
  return `/src/photos/dog${index}.png`;
});
const imageLocations02 = new Array(9).fill(null).map((value, index) => {
  return `/src/photos/Chihuahua${index}.png`;
});
const imageLocations03 = new Array(9).fill(null).map((value, index) => {
  return `/src/photos/Poodle${index}.png`;
});

const initialimageLocations = [
  imageLocations01,
  imageLocations02,
  imageLocations03,
  // Add more arrays as needed
];

const Captcha = ({ key }) => {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [imageLocationsIndex, setImageLocationsIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState(new Set());

  // Effect to shuffle images when the key changes or when imageLocationsIndex changes
  useEffect(() => {
    setShuffledImages(
      initialimageLocations[imageLocationsIndex].sort(() => Math.random() - 0.6)
    );
  }, [key, imageLocationsIndex]);

  const handleImageClick = (index) => {
    const updatedSet = new Set(selectedImages);
    if (updatedSet.has(index)) {
      updatedSet.delete(index);
    } else {
      updatedSet.add(index);
    }
    setSelectedImages(updatedSet);
  };

  const handleChangeImageSets = () => {
    // Increment the index to display the next set of images
    setImageLocationsIndex(
      (prevIndex) => (prevIndex + 1) % initialimageLocations.length
    );
    setSelectedImages(new Set()); // Reset selected images when changing sets
  };

  const imageElements = shuffledImages.map((imageUrl, index) => {
    const isSelected = selectedImages.has(index);
    return (
      <div key={index} onClick={() => handleImageClick(index)}>
        <img src={imageUrl} alt="" style={{ opacity: isSelected ? 0.5 : 1 }} />
      </div>
    );
  });

  return (
    <div>
      <h2>Select the dogs</h2>
      <div className="Captcha-image">{imageElements}</div>
      <button id="changebutton" onClick={handleChangeImageSets}>
        More challenge!
      </button>
    </div>
  );
};

export default Captcha;

// Explanation of Changes:
// 1. Added imageLocationsIndex state
//to keep track of the current index of initialimageLocations.
// 2. Updated the useEffect to shuffle images based
//on the index from initialimageLocations.
// 3. handleChangeImageSets function now changes the imageLocationsIndex
// state to cycle through different sets of images and resets the selected images.
// 4. Updated the button in the return statement to trigger the handleChangeImageSets function on click.
// 5. This modified code allows you to iterate through the arrays in initialimageLocations one by one each time the "More challenge!" button is clicked.
