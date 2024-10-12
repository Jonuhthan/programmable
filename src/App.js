import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    // context is a way to manage states globally across all components
    // saves the hassle of passing states down through props
    <AuthContextProvider>
      <div className="App">
        <Router>
          <Routes>
            {/* root page directs to landing page */}
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
