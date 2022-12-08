
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route } from 'react-router-dom';
import AnimalShelters from './AnimalShelters';
import Map from './apis/Map';
import Search from './components/Search';




function App() {
  return (
    <div className="App">  
    <Navbar /> 
    <Map />
    <Search />      

    <Routes>
      <Route path="/" element={<AnimalShelters />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    <Footer />
  </div>
  );
}

export default App;