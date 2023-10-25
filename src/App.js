import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HirePage from './routes/HirePage';
import HomePage from './routes/HomePage'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/React-Portfolio" element={<HomePage />} />
        <Route exact path="/React-Portfolio/hire-me" element={<HirePage />} />
      </Routes>
    </Router>
  );
};

export default App;
