import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link

// You would typically import these images or use URLs
const showcaseImages = [
  "https://assets.emergent.sh/assets/showcase/1.png",
  "https://assets.emergent.sh/assets/showcase/2.png",
  "https://assets.emergent.sh/assets/showcase/3.png",
  "https://assets.emergent.sh/assets/showcase/4.png",
  "https://assets.emergent.sh/assets/showcase/6.png",
];

const AuthSection = () => { // Removed onLogin from props
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseImages.length);
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const getStyle = (index) => {
    const offset = index - currentIndex;
    const isCenter = offset === 0;
    const isAdjacent = Math.abs(offset) === 1;
    const isVisible = isCenter || isAdjacent;

    return {
      transform: `translateX(${offset * 520}px) scale(${isCenter ? 1 : 0.9})`,
      opacity: isVisible ? (isCenter ? 1 : 0.7) : 0,
      zIndex: isCenter ? 20 : (isAdjacent ? 10 : 0),
      width: isCenter ? '624px' : '420px',
      height: isCenter ? '356px' : '300px',
      transition: 'all 0.5s ease-out',
    };
  };

  return (
    <section className="authentication-section flex h-screen">
      {/* Left side */}
      <div className="relative hidden flex-1 items-center justify-center p-5 md:flex" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover scale-[1.22]">
          <source src="https://assets.emergent.sh/assets/videos/clouds.mp4" type="video/mp4" />
        </video>
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {showcaseImages.map((src, index) => (
            <div key={index} className="absolute flex items-center justify-center" style={getStyle(index)}>
              <div className="h-full w-full rounded-[20px] bg-gradient-to-b from-white/60 to-white/40 p-2 backdrop-blur-xl">
                 <img src={src} alt={`Showcase ${index + 1}`} className="h-full w-full rounded-[16px] object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right side Carousel */}
      <div className="relative flex flex-1 flex-col items-center justify-center p-4">
        <img src="https://assets.emergent.sh/assets/Landing-Auth-Star.gif" className="h-12 w-auto cursor-pointer md:h-[64px] mb-4 z-10" alt="Emergent Logo" />
        <div className="text-center font-sans font-medium">
          <span className="text-center font-brockmann text-[32px] font-medium leading-9 tracking-[-0.72px] text-white md:text-[36px]" style={{ textShadow: '0 0 40px rgba(232, 232, 230, 0.20)' }}>
            The fastest path from <br />
            <span className="bg-gradient-to-r from-white to-[#81FF89] bg-clip-text text-transparent">idea to product</span>
          </span>
          <div className="mt-4 flex items-center justify-center">
            <p className="text-center text-[14px] font-medium leading-5 tracking-[-0.15px] text-white md:text-[16px]">Already have an account?</p>
            
            {/* Replace the <p> tag with a <Link> component */}
            <Link 
              to="/dashboard"
              className="cursor-pointer ml-2 text-center font-brockmann text-[14px] font-medium leading-5 tracking-[-0.15px] text-[#80FFF9] underline md:text-[16px]"
            >
              Sign in
            </Link>
          </div>
        </div>
        {/* Form controls */}
        <div className="w-full max-w-[414px] pt-4">
            {/* Buttons here, add functionality as needed */}
        </div>
      </div>
    </section>
  );
};

export default AuthSection;