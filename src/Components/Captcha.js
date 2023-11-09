import React, { useState, useEffect } from 'react';

// Array containing paths to 9 images
const imageLocations = new Array(9).fill(null).map((value, index) => {
  return `/src/photos/dog${index}.png`;
});

const Captcha = ({ key }) => {
  // State to hold the shuffled images
  const [shuffledImages, setShuffledImages] = useState([]);

  // Effect to shuffle images when the key changes
  useEffect(() => {
    // Shuffle the images when the key changes
    setShuffledImages(() => imageLocations.sort(() => Math.random() - 0.5));
  }, [key]);

  // State to keep track of selected images
  const [selectedImages, setSelectedImages] = useState(new Set());

  // Function to handle image click
  const handleImageClick = (index) => {
    const updatedSet = new Set(selectedImages);
    // Toggle selection: add if not selected, delete if already selected
    if (updatedSet.has(index)) {
      updatedSet.delete(index);
    } else {
      updatedSet.add(index);
    }
    setSelectedImages(updatedSet);
  };

  // Map through shuffled images to create elements
  const imageElements = shuffledImages.map((imageUrl, index) => {
    const isSelected = selectedImages.has(index);
    return (
      <div key={index} onClick={() => handleImageClick(index)}>
        {/* Render images with opacity based on selection */}
        <img src={imageUrl} alt="" style={{ opacity: isSelected ? 0.5 : 1 }} />
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

export default Captcha;
