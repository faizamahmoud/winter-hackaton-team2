import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from './apis/Map';
import LandingPage from './pages/landingPage';
import SearchResult from './pages/SearchResult';
import Search from './components/Search';


function App() {
  return (


        

    <div className="App">   
      {/* <Map />       */}
      <Routes>
        <Route path="/Home" element={<LandingPage />} />
      <Search />      
      <Routes>
        <Route path="/" element={<AnimalShelters />} />
        <Route path="/searchResults" element={<SearchResult />} />  

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;