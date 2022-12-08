import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import SearchResult from './pages/SearchResult';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ShowPage from './components/ShowPage';

function App() {
  return (    
    <div className="App">   
      <Navbar />       
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/searchResults" element={<SearchResult />} /> 
        <Route path="/show/:id" element={<ShowPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;