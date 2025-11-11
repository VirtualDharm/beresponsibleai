import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1002] transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl shadow-sm' : ''
      }`}
      style={{ backgroundColor: '#E3E8E6' }}
    >
      <div className="flex items-center justify-between md:px-8 max-md:px-3 py-2">
        <img
          src="/logo2.png"
          alt="BeResponsibleAI Logo"
          className="h-8 md:h-12 w-auto ml-4"
        />

        {/* Center Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="items-center">
            <button onClick={() => scrollTo('features')} className="px-3 py-1 text-[14px] font-medium text-black transition-colors hover:text-gray-500">
              Features
            </button>
            <button onClick={() => scrollTo('about')} className="px-3 py-1 text-[14px] font-medium text-black transition-colors hover:text-gray-500">
              About
            </button>
            <button onClick={() => scrollTo('faq')} className="px-3 py-1 text-[14px] font-medium text-black transition-colors hover:text-gray-500">
              FAQs
            </button>
            <a
              href="https://www.linkedin.com/in/sharad-maheshwari-abdominal-imager/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-[14px] font-medium text-black transition-colors hover:text-gray-500"
            >
              Community
            </a>
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => scrollTo('auth')}
          className="relative flex items-center rounded-md bg-[#0DF9FF] px-3 py-[6px] text-[14px] font-semibold text-black transition-transform hover:scale-105 max-md:px-2 max-md:py-1 max-md:text-[12px]"
        >
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25" fill="none" className="ml-2 h-5 w-5 max-md:hidden">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.6395 11.3816C20.1202 11.8622 20.1202 12.6416 19.6395 13.1222L14.1011 18.6606C13.6204 19.1412 12.8412 19.1412 12.3606 18.6606C11.8798 18.1799 11.8798 17.4007 12.3606 16.92L15.7979 13.4826L5.23081 13.4826C4.55106 13.4826 4 12.9316 4 12.2518C4 11.5722 4.55106 11.0211 5.23081 11.0211L15.7979 11.0211L12.3606 7.5837C11.8798 7.10307 11.8798 6.32381 12.3606 5.84318C12.8412 5.36249 13.6204 5.36249 14.1011 5.84318L19.6395 11.3816Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
