/**
 * @file com/header/index.jsx
 * Presents the header bar at the top of the page.
 */

// Imports
import React, { useState } from 'react';
import Logo from '../svg/logo';
import Hamburger from '../svg/icon-hamburger';
import Close from '../svg/icon-close';
import './index.scss';

// Header Component
const Header = () => {
  const [shown, setShown] = useState(false);

  const toggleShown = () => setShown(!shown);
  const resetShown = () => setShown(false);

  return (
    <header className={`header ${shown && 'header--shown'}`}>
      <button className="button header__toggle" aria-label="Toggle Navigation" onClick={toggleShown}>
        {
          shown ? <Close /> : <Hamburger />  
        }
      </button>
      <Logo className="header__logo" />
      <nav className="header__nav">
        <a href="#" className="header__nav-link" onClick={resetShown}>home</a>
        <a href="#" className="header__nav-link" onClick={resetShown}>shop</a>
        <a href="#" className="header__nav-link" onClick={resetShown}>about</a>
        <a href="#" className="header__nav-link" onClick={resetShown}>contact</a>
      </nav>
    </header>
  );
};

// Export
export default Header;
