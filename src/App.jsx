import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimalShelters from './AnimalShelters';

import LandingPage from './pages/landingPage';

import SearchResult from './pages/SearchResult';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">   
<Navbar/>
      <Map />
      <Search />      

      <Routes>
        <Route path="/" element={<AnimalShelters />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;