import React, { useState } from 'react';

import Header from './components/Header';
import AuthSection from './components/AuthSection';
import MeetEmergentSection from './components/MeetEmergentSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import ProductVideoSection from './components/ProductVideoSection';
import FAQSection from './components/FAQSection';
import FillerSection from './components/FillerSection';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard'; // Import the new Dashboard component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <main className="relative" style={{ backgroundImage: "url('https://assets.emergent.sh/assets/landing-page/landing-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <img src="https://assets.emergent.sh/assets/landing-light.png" alt="Overlay" className="fixed inset-0 w-full h-full pointer-events-none" style={{ mixBlendMode: 'screen', opacity: 0.5 }} />
      <Header />
      <AuthSection onLogin={handleLogin} /> {/* Pass the login handler */}
      <div className="relative pt-[150px]">
        <MeetEmergentSection />
        <FeaturesSection />
        <PricingSection />
        <ProductVideoSection />
        <FAQSection />
        <FillerSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
