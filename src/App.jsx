import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimalShelters from './components/AnimalShelters';
import SearchResult from './pages/SearchResult';
import Search from './components/Search';

function App() {
  return (
    <div className="container">     
      <Routes>
        <Route path="/" element={<AnimalShelters />} />
        <Route path="/searchResults" element={<SearchResult className="row"/>} />
        
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;