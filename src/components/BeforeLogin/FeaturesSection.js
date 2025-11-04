import React, { useState } from 'react';

const features = [
  {
    id: 'apps',
    title: 'Build websites and mobile apps',
    description: 'Transform your ideas into fully functional websites and mobile apps with instant deployment, seamless data connections, and powerful scalability.',
    image: 'https://assets.emergent.sh/assets/landing-page/mobile.png',
    icon: (isActive) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20.75 10.75C21.0815 10.75 21.3994 10.8818 21.6338 11.1162C21.8682 11.3506 22 11.6685 22 12V20.75C22 21.0815 21.8682 21.3994 21.6338 21.6338C21.3994 21.8682 21.0815 22 20.75 22H14.5C14.1685 22 13.8506 21.8682 13.6162 21.6338C13.3818 21.3994 13.25 21.0815 13.25 20.75V12C13.25 11.6685 13.3818 11.3506 13.6162 11.1162C13.8506 10.8818 14.1685 10.75 14.5 10.75H20.75ZM18.25 2C18.5815 2 18.8994 2.13179 19.1338 2.36621C19.3682 2.60063 19.5 2.91848 19.5 3.25V9.5H17V4.5H4.5V13.25H12V19.5H4.5V17H9.5V15.75H3.25C2.91848 15.75 2.60063 15.6182 2.36621 15.3838C2.13179 15.1494 2 14.8315 2 14.5V3.25C2 2.91848 2.13179 2.60063 2.36621 2.36621C2.60063 2.13179 2.91848 2 3.25 2H18.25ZM15.75 13.25V19.5H19.5V13.25H15.75Z" fill={isActive ? "url(#paint0_linear_features)" : "currentColor"}></path>
        <defs><linearGradient id="paint0_linear_features" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse"><stop stopColor="#80FFF9"></stop><stop offset="1" stopColor="white"></stop></linearGradient></defs>
      </svg>
    ),
  },
  // Add other features here...
];

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <section className="features-section py-[150px] px-6">
      <p className="text-center font-brockmann text-[32px] font-medium leading-9 text-white md:text-[36px]" style={{ textShadow: '0 0 40px rgba(232, 232, 230, 0.2)' }}>
        What can Emergent <br /> do for you?
      </p>
      <p className="mx-auto mt-4 max-w-[575px] text-center font-inter text-[15px] font-medium leading-6 text-[#666] md:text-[16px]">
        From concept to deployment, Emergent handles every aspect of software development so you can focus on what matters most - your vision!
      </p>
      <div className="mx-auto mt-8 max-w-7xl md:mt-20 md:px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            {features.map((feature, index) => (
              <div key={feature.id} onClick={() => setSelectedFeature(index)} className="cursor-pointer border-b border-white/10 py-6 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="min-h-6 min-w-6 text-white">{feature.icon(selectedFeature === index)}</div>
                      <h3 className={`text-[18px] font-medium leading-6 transition-all duration-300 md:text-[22px] ${selectedFeature === index ? 'text-[#80FFF9]' : 'text-white'}`}>
                        {feature.title}
                      </h3>
                    </div>
                    {selectedFeature === index && (
                      <p className="!mt-4 font-inter text-[15px] font-medium leading-6 text-[#666] md:text-[16px]">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative hidden h-[480px] overflow-hidden rounded-lg bg-[#222] lg:block">
            <img src={features[selectedFeature].image} alt={features[selectedFeature].title} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;