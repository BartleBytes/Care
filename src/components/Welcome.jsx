import React, { useState } from 'react';
import './Welcome.css';

const Welcome = () => {
  const [photos, ] = useState([
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300'
  ]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="welcome-container">
      <div className="photo-column">
        <div className="photo-flipper">
          <button onClick={handlePrevPhoto}>&#10094;</button>
          <img src={photos[currentPhotoIndex]} alt="Welcome" />
          <button onClick={handleNextPhoto}>&#10095;</button>
        </div>
      </div>
      <div className="text-column">
        <h1>Welcome to Our Website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt id eros vitae tincidunt. Donec sit amet turpis ac elit pulvinar ullamcorper.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
