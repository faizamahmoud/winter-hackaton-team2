import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import SearchResult from './pages/SearchResult';
import Search from './components/Search';
import ShowPage from './components/ShowPage';


function App() {
  return (


        

    <div className="App">   

      {/* <Map />       */}
      <Search />      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/searchResults" element={<SearchResult />} /> 
        <Route path="/show/:id" element={<ShowPage />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;