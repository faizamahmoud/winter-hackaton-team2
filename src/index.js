import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Rescue_Groups_test from './RescueGroupsTest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Rescue_Groups_test />
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/api_test"/>
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Router>
);
