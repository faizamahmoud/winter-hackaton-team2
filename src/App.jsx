import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimalShelters from './AnimalShelters';
import Map from './apis/Map';
import LandingPage from './pages/landingPage';

function App() {
  return (
    <div className="App">   
      {/* <Map />       */}

      <Routes>
        <Route path="/" element={<AnimalShelters />} />
        <Route path="/Home" element={<LandingPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;