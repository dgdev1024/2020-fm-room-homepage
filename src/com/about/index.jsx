/**
 * @file com/about.jsx
 * Displays the 'About Our Furniture' section at the bottom of the page.
 */

// Imports
import React from 'react';
import AboutDark from '../../img/image-about-dark.jpg';
import AboutLight from '../../img/image-about-light.jpg';
import './index.scss';

// About Section
const About = () => (
  <div className="about">
    <img 
      src={AboutDark} 
      alt="About our Furniture" 
      className="about__image-dark"
    />
    <div className="about__caption">
      <h3 className="heading heading--small about__heading">
        About Our Furniture
      </h3>
      <p className="text about__body">
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best expresses your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything
        in between. product specialists are available to help you create your
        dream space.
      </p>
    </div>
    <img 
      src={AboutLight} 
      alt="About our Furniture" 
      className="about__image-light"
    />
  </div>
);

// Export
export default About;
