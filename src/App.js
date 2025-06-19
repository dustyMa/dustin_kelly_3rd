import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Letter from './Letter';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/letter" element={<Letter />} />
    </Routes>
  );
}

export default App;