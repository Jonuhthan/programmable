import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* root page directs to landing page */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
