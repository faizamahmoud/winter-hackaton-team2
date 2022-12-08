import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimalShelters from './components/AnimalShelters';
import SearchResult from './pages/SearchResult';
import Search from './components/Search';
import ShowPage from './components/ShowPage';

function App() {
  return (
    <div className="App">   
      <Routes>
        <Route path="/" element={<AnimalShelters />} />
        <Route path="/searchResults" element={<SearchResult />} />
        <Route path="/show/:id" element={<ShowPage />} />
        
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;