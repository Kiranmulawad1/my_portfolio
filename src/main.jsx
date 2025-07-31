// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Make sure the path to App.jsx is correct
import './index.css'; // Make sure your CSS is imported

const rootElement = document.getElementById('root');

// Check if the root element exists before trying to create a root
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error("Root element with ID 'root' not found in the DOM.");
}