/**
 * @file index.jsx
 * The application's entry point.
 */

// Imports
import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './index.scss';

// Mount Application
const mountNode = document.getElementById('app-root');
render(<App />, mountNode);
