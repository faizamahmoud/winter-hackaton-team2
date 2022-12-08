import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/landingPage';
import AnimalShelters from './components/AnimalShelters';
import SearchResult from './pages/SearchResult';
import Search from './components/Search';


function App() {
  return (     

    <div className="App">   
      {/* <Map />       */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/searchResults" element={<SearchResult />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;