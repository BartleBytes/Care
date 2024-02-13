import React from 'react';
import './Hero.css'

const HeroSection = () => {
  return (
    <div className="hero">
      <div class="container">
                <h1>Genesis Care</h1>
                <h2>Newborn & Family Services</h2>
                <a href="#about" class="btn">Learn More</a>
                <div className="social-media-icons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
                </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
              </a>
          {/* Add more social media icons or links as needed */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
