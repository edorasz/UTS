// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import Home
import PokemonDetail from './pages/PokemonDetail'; // Import PokemonDetail
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} /> {/* Dynamic route for detail page */}
      </Routes>
    </Router>
  );
}

export default App;
