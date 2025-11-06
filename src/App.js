import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Page Components
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';

// Import Protector Component
import AuthProtector from './components/AuthProtector';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <AuthProtector>
              <DashboardPage />
            </AuthProtector>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
