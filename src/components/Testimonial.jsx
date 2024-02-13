import React, { useState, useEffect } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et turpis quis ante tristique suscipit.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi congue.',
  },
];

const Testimonial = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial">
      <h2>Testimonials</h2>
      <div className="testimonial-content">
        <p>{testimonials[currentTestimonialIndex].text}</p>
        <p className="testimonial-name">- {testimonials[currentTestimonialIndex].name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
