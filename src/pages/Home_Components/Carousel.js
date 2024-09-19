import React, { useState, useEffect } from 'react';
import Carousel1 from '../assets/b.jpg'; // Ensure this path is correct
import Carousel2 from '../assets/b1.png';
import Carousel3 from '../assets/b2.jpg';
import Carousel4 from '../assets/b3.jpg';
import '../assets/style.css';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { imgSrc: Carousel1 },
    { imgSrc: Carousel2 },
    { imgSrc: Carousel3 },
    { imgSrc: Carousel4 },
  ];

  // Change slides automatically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div id="carouselExample" className="carousel slide carousel-fade">
      {/* Carousel Inner */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img
              src={slide.imgSrc}
              className="d-block w-100"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Carousel;
