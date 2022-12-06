import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimalShelters from './AnimalShelters';
import Map from './apis/Map';


function App() {
  return (
    <div className="App">
    
      <Map />
      {/* <AnimalShelters />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/api_test"/> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Routes> */}

    </div>
  );
}

export default App;
