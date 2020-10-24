/**
 * @file app.jsx
 * The application's top-level component.
 */

// Imports
import React from 'react';
import Header from './com/header';
import Slideshow from './com/slideshow';
import About from './com/about';

// App Component
const App = () => (
  <main className="main">
    <Header />
    <Slideshow />
    <About />
  </main>
);

// Export
export default App;
