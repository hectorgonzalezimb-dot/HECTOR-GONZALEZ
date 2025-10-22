import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { seedInitialData } from './data/api';

// Initialize localStorage with mock data if it's empty.
seedInitialData();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);