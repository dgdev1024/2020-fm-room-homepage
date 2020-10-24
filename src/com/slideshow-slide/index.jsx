/**
 * @file com/slideshow-slide.jsx
 * A slide component to be displayed by the slideshow component.
 */

// Imports
import React, { useState, useEffect } from 'react';
import Arrow from '../svg/icon-arrow';

// Slideshow Slide Component
const SlideshowSlide = ({ slide, newSlideQueried }) => {
  // Check to see if we are using a mobile screen.
  const mobileMediaQuery = window.matchMedia('(max-width: 799px)');
  const [mobile, setMobile] = useState(mobileMediaQuery.matches);

  // Effect hook to continually check screen size.
  useEffect(() => {
    const handler = (ev) => setMobile(ev.matches);

    try {
      mobileMediaQuery.addEventListener('change', handler);
      return () => mobileMediaQuery.removeEventListener('change', handler);
    } catch { // In case the above event listener methods are not supported.
      mobileMediaQuery.addListener(handler);
      return () => mobileMediaQuery.removeListener(handler);
    }
  });

  return (
    <>
      <div className="slideshow__slide-image-pane">
        <img 
          src={mobile ? slide.mobileImage : slide.desktopImage} 
          alt={slide.heading} 
          className="slideshow__slide-image"
        />
      </div>
      <div className="slideshow__slide-caption-pane">
        <h2 className="heading slideshow__slide-heading">
          {slide.heading}
        </h2>
        <p className="text slideshow__slide-body">
          {slide.body}
        </p>
        <a href="#" className="slideshow__slide-cta">
          Shop Now <Arrow />
        </a>
      </div>
    </>
  );
};

// Exports
export default SlideshowSlide;
