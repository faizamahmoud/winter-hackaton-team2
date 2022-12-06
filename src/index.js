import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import AnimalShelters from './AnimalShelters';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AnimalShelters />
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/api_test"/>
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Router>
);
