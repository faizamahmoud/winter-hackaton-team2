import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Rescue_Groups_test from './Rescue_Groups_test';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <React.StrictMode>
        <Route path="/" element={<App />} />
        <Route path="/api_test"/>
        <Route path="*" element={<NotFound />} />
      </React.StrictMode>
    </Routes>
  </Router>
);
