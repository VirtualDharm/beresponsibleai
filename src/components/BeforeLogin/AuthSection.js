import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import SignInForm from '../auth/SignInForm';
import SignUpForm from '../auth/SignUpForm';

// Data for the carousel
const showcaseImages = [
  "./image6.jpg",
  "./image7.jpg",
  "./image8.jpg",
  "./image6.jpg",
  "./image7.jpg",
  "./image8.jpg",
  "./image6.jpg",
  "./image7.jpg",
  "./image8.jpg",
  // "./image4.jpg",
  // "./image5.jpg",
  // "https://assets.emergent.sh/assets/showcase/1.png",
  // "https://assets.emergent.sh/assets/showcase/2.png",
  // "https://assets.emergent.sh/assets/showcase/3.png",
  // "https://assets.emergent.sh/assets/showcase/4.png",
  // "https://assets.emergent.sh/assets/showcase/6.png",
];

const AuthSection = () => {
  // State for the authentication view ('default', 'signin', or 'signup')
  const [authMode, setAuthMode] = useState('default');

  // State for the carousel
  const [currentIndex, setCurrentIndex] = useState(2); // Start with the 3rd image in center
  const [isHovered, setIsHovered] = useState(false);

  // Carousel auto-advance logic
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseImages.length);
      }
    }, 2000); // Change slide every 2 seconds
    return () => clearInterval(timer);
  }, [isHovered]);

  // Function to calculate styles for each carousel card
  const getCarouselCardStyle = (index) => {
    const offset = index - currentIndex;
    const isCenter = offset === 0;
    const isAdjacent = Math.abs(offset) === 1;
    const isVisible = isCenter || isAdjacent;

    // These values control the carousel animation
    const spacing = 520;
    const sideCardScale = 0.9;
    const sideCardOpacity = 0.7;

    return {
      transform: `translateX(${offset * spacing}px) scale(${isCenter ? 1 : sideCardScale})`,
      opacity: isVisible ? (isCenter ? 1 : sideCardOpacity) : 0,
      zIndex: isCenter ? 20 : (isAdjacent ? 10 : 0),
      width: isCenter ? '624px' : '420px',
      height: isCenter ? '356px' : '300px',
      transition: 'all 0.5s ease-out',
    };
  };

  // Google Sign-In Handler
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) {
      console.error("Google Sign-In Error:", error.message);
      // It's a good idea to show a user-facing error here, e.g., using a toast notification.
    }
  };

  // Renders the correct view on the right side: default, sign-in, or sign-up
  const renderAuthContent = () => {
    switch (authMode) {
      case 'signin':
        return <SignInForm onSwitchToSignUp={() => setAuthMode('signup')} onGoBack={() => setAuthMode('default')} />;
      case 'signup':
        return <SignUpForm onSwitchToSignIn={() => setAuthMode('signin')} onGoBack={() => setAuthMode('default')} />;
      default:
        return (
          <div className="w-full max-w-[414px] flex flex-col items-center">
            <img src="https://assets.emergent.sh/assets/Landing-Auth-Star.gif" className="h-12 w-auto cursor-pointer md:h-[64px] mb-4 z-10" alt="BeResponsibleAI gif" />
            <div className="text-center font-sans font-medium mb-8">
              <span className="text-center font-brockmann text-[32px] font-medium leading-9 tracking-[-0.72px] text-black md:text-[36px]" style={{ textShadow: '0 0 40px rgba(232, 232, 230, 0.20)' }}>
                The fastest path from <br />
                <span className="bg-[linear-gradient(to_right,#047FB3_0%,#047FB3_70%,#0DF9FF_85%)] bg-clip-text text-transparent">
                  idea to product
                </span>
              </span>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-3 w-full bg-white text-black font-semibold py-3 px-4 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google logo" className="w-5 h-5" />
              Continue with Google
            </button>

            <div className="relative flex items-center justify-center w-full my-4">
              <div className="w-full border-t border-white/20"></div>
              <span className="px-3 text-sm text-black/30 whitespace-nowrap">Or</span>
              <div className="w-full border-t border-white/20"></div>
            </div>

            <button
              onClick={() => setAuthMode('signup')}
              className="w-full rounded-full bg-[#E3E8E6] py-3 font-brockmann font-medium text-black transition-colors hover:bg-[#0DF9FF]"
            >
              Sign up with Email
            </button>

            <div className="mt-6 flex items-center justify-center">
              <p className="text-center text-sm text-black">Already have an account?</p>
              <button onClick={() => setAuthMode('signin')} className="cursor-pointer ml-2 text-center text-sm text-[#0ED8E3] underline font-medium">
                Sign in
              </button>
            </div>
          </div>
        );
    }
  };

  return (
   <section className="authentication-section flex h-screen" id="auth">
    {/* LEFT SIDE CAROUSEL */}
    <div
      className="relative hidden md:flex flex-[0.6] items-center justify-center p-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="./bgvideo1.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        {showcaseImages.map((src, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center"
            style={getCarouselCardStyle(index)}
          >
            <div className="h-full w-full rounded-[20px] bg-gradient-to-b from-white/60 to-white/40 p-2 backdrop-blur-xl">
              <img
                src={src}
                alt={`Showcase ${index + 1}`}
                className="h-full w-full rounded-[16px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE CONTENT */}
    <div
      className="relative flex flex-[0.4] flex-col items-center justify-center p-8"
      style={{
        backgroundImage: "url('/bgimage.jpg')",
        backgroundSize: 'cover',
      }}
    >
      {renderAuthContent()}
    </div>
  </section>
  );
};

export default AuthSection;