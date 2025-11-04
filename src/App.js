import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your new page components
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for the dashboard after logging in */}
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* You can add more routes here, for example:
        <Route path="/home" element={<DashboardPage />} /> 
        */}
      </Routes>
    </Router>
  );
}

export default App;