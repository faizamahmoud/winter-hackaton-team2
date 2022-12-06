import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css'
import App from './App';
import { ShelterProvider } from './context/shelterContext';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ShelterProvider>
    <Router>
      <App />
    </Router>
    </ShelterProvider>
  </React.StrictMode>
);
