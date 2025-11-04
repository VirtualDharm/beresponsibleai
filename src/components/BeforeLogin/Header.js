import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[1002] transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-100'}`}>
      <div className={`flex items-center justify-between md:py-4 md:px-6 max-md:py-2 max-md:px-4 ${scrolled ? 'backdrop-blur-sm' : ''}`}>
        <img src="https://assets.emergent.sh/assets/emergent-logo-new.svg" alt="Emergent Logo" className="h-5 md:h-6" />
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="hidden md:flex items-center gap-1" style={{ mixBlendMode: 'difference' }}>
            <button className="px-3 py-2 text-[16px] font-medium text-white transition-colors hover:text-gray-300">Features</button>
            <button className="px-3 py-2 text-[16px] font-medium text-white transition-colors hover:text-gray-300">Pricing</button>
            <button className="px-3 py-2 text-[16px] font-medium text-white transition-colors hover:text-gray-300">FAQs</button>
            <a href="https://emergent.sh/enterprise" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-[16px] font-medium text-white transition-colors hover:text-gray-300">Enterprise</a>
          </div>
        </div>
        <button className="relative flex items-center rounded-full bg-white px-5 py-[10px] text-[16px] font-semibold text-black transition-colors hover:bg-gray-100 max-md:px-3 max-md:py-2 max-md:text-[14px]" style={{ mixBlendMode: 'difference' }}>
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 25" fill="none" className="ml-3 h-6 w-6 object-contain max-md:hidden">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.6395 11.3816C20.1202 11.8622 20.1202 12.6416 19.6395 13.1222L14.1011 18.6606C13.6204 19.1412 12.8412 19.1412 12.3606 18.6606C11.8798 18.1799 11.8798 17.4007 12.3606 16.92L15.7979 13.4826L5.23081 13.4826C4.55106 13.4826 4 12.9316 4 12.2518C4 11.5722 4.55106 11.0211 5.23081 11.0211L15.7979 11.0211L12.3606 7.5837C11.8798 7.10307 11.8798 6.32381 12.3606 5.84318C12.8412 5.36249 13.6204 5.36249 14.1011 5.84318L19.6395 11.3816Z" fill="currentColor"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;