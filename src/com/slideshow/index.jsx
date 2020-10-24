/**
 * @file com/slideshow.jsx
 * Displays a slideshow in the main part of the page.
 */

// Imports
import React, { useState, useEffect, useRef } from 'react';
import SlideshowSlide from '../slideshow-slide';
import Slides from '../../lib/slides';
import AngleLeft from '../svg/icon-angle-left';
import AngleRight from '../svg/icon-angle-right';
import './index.scss';

// Slideshow Component
const Slideshow = () => {
  const slideShowRef = useRef(null);
  const [queriedIndex, setQueriedIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  // Effect hook to trigger CSS animations upon slide change.
  useEffect(() => {
    if (queriedIndex === slideIndex) { return; }

    slideShowRef.current.classList.add('slideshow--fading');

    slideShowRef.current.addEventListener('animationend', (ev) => {
      slideShowRef.current.classList.remove('slideshow--fading');
      setSlideIndex(queriedIndex);
      slideShowRef.current.classList.add('slideshow--fading-in');
    })
  }, [queriedIndex]);

  // Effect hook to query the next slide on a 15-second timer.
  useEffect(() => {
    const timeoutId = setTimeout(() => gotoNextSlide(), 15000);
    return () => clearTimeout(timeoutId);
  }, [queriedIndex])

  const gotoPreviousSlide = () => {
    setQueriedIndex((prev) => prev === 0 ? Slides.length - 1 : prev - 1);
  };

  const gotoNextSlide = () => {
    setQueriedIndex((prev) => prev === Slides.length - 1 ? 0 : prev + 1);
  };

  return (
    <div ref={slideShowRef} className={`slideshow ${slideIndex !== queriedIndex && 'slideshow--fading-out'}`}>
      <SlideshowSlide slide={Slides[slideIndex]} />
      <div className="slideshow__controls">
        <button 
          className="slideshow__control-button"
          onClick={gotoPreviousSlide}
          aria-label="Previous Slide"
          title="Previous Slide"
        >
          <AngleLeft />
        </button>
        <button 
          className="slideshow__control-button"
          onClick={gotoNextSlide}
          aria-label="Next Slide"
          title="Next Slide"
        >
          <AngleRight />
        </button>
      </div>
    </div>
  );
};

// Export
export default Slideshow;
