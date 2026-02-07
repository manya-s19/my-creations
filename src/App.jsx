
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import PortfolioPages from './components/PortfolioPages';

function App() {
  return (
    <Router basename="/my-creations">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioPages />} />
      </Routes>
    </Router>
  );
}

export default App;
