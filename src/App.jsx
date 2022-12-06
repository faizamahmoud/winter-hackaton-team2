import AnimalShelters from './AnimalShelters';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<AnimalShelters />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

    </div>
  );
}

export default App;
