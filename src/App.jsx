import AnimalShelters from './AnimalShelters';


function App() {
  return (
    <div className="App">
    
      <AnimalShelters />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/api_test"/>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

    </div>
  );
}

export default App;
