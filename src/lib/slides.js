/**
 * @file lib/slides.js
 * Contains the slides to be displayed by the slideshow component.
 */

// Import Images
import DesktopImages from '../img/desktop-image-hero-*.jpg';
import MobileImages from '../img/mobile-image-hero-*.jpg';

// Export Slide Data
export default [
  {
    desktopImage: DesktopImages[1],
    mobileImage: MobileImages[1],
    heading: 'Discover Innovative Ways to Decorate',
    body:
      `We provide unmatched quality, comfort, and style for property owners
      across the country. Our experts combine form and function in bringing
      your vision to life. Create a room in your own style with our collection
      and make your property a reflection of you and what you love.`
  },
  {
    desktopImage: DesktopImages[2],
    mobileImage: MobileImages[2],
    heading: 'We Are Available All Across the Globe',
    body:
      `With stores all over the world, it's easy for you to find furniture for
      your home or place of business. Locally, we're in most major cities
      throughout the country. Find the brance nearest you using our store
      locator. Any questions? Don't hesitate to contact us today!`
  },
  {
    desktopImage: DesktopImages[3],
    mobileImage: MobileImages[3],
    heading: 'Manufactured With the Best Materials',
    body:
      `Our modern furniture stores provide a high level of quality. Our company
      has invested in advanced technology to ensure that every product is made
      as perfect and as consistent as possible. With three decades of experience
      in this industry, we understand what customers want for their home and
      office.`
  }
];
