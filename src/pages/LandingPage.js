import React from 'react';
import Header from '../components/BeforeLogin/Header';
import AuthSection from '../components/BeforeLogin/AuthSection';
import MeetEmergentSection from '../components/BeforeLogin/MeetEmergentSection';
import FeaturesSection from '../components/BeforeLogin/FeaturesSection';
import PricingSection from '../components/BeforeLogin/PricingSection';
import ProductVideoSection from '../components/BeforeLogin/ProductVideoSection';
import FAQSection from '../components/BeforeLogin/FAQSection';
import FillerSection from '../components/BeforeLogin/FillerSection';
import Footer from '../components/BeforeLogin/Footer';

const LandingPage = () => {
  return (
    <main className="relative">
      <img src="https://assets.emergent.sh/assets/landing-light.png" alt="Overlay" className="fixed inset-0 w-full h-full pointer-events-none" style={{ mixBlendMode: 'screen', opacity: 0.5 }} />
      <Header />
      {/* Note: We no longer need to pass onLogin here */}
      <AuthSection />
      <div className="relative bg-black">
        <MeetEmergentSection />
        <FeaturesSection />
        <PricingSection />
        {/* <ProductVideoSection /> */}
        <FAQSection />
        <FillerSection />
        <Footer />
      </div>
    </main>
  );
};

export default LandingPage;