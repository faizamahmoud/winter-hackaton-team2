import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      
      <React.StrictMode>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
      </React.StrictMode>
    </Routes>
  </Router>
);
