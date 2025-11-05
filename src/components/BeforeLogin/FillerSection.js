import React from 'react';

const logos = [
  {
    name: 'Novo Nordisk',
    src: 'https://framerusercontent.com/images/tN0DE98R6QTSXvDWCOncdYpR5M.png',
    alt: 'Novo Nordisk Logo'
  },
  {
    name: 'Johnson & Johnson',
    src: 'https://framerusercontent.com/images/tN0DE98R6QTSXvDWCOncdYpR5M.png',
    alt: 'Johnson & Johnson Logo'
  },
  {
    name: 'Corteva Catalyst',
    src: 'https://framerusercontent.com/images/tN0DE98R6QTSXvDWCOncdYpR5M.png',
    alt: 'Corteva Catalyst Logo'
  },
  {
    name: 'IFF',
    src: 'https://framerusercontent.com/images/tN0DE98R6QTSXvDWCOncdYpR5M.png',
    alt: 'IFF Logo'
  },
  {
    name: 'Novonesis',
    src: 'https://framerusercontent.com/images/tN0DE98R6QTSXvDWCOncdYpR5M.png',
    alt: 'Novonesis Logo'
  },
  {
    name: 'Argenx',
    src: 'https://framerusercontent.com/images/tN0DE98R6QTSXvDWCOncdYpR5M.png',
    alt: 'Argenx Logo'
  },
];

const Testimonial = {
  quote: "Cradle’s AI-based protein design platform provides easy access and acceleration to protein optimization for the discovery pipeline.",
  author: "Eswar Narayanan",
  title: "Director, Corteva Catalyst",
  authorImage: "https://framerusercontent.com/images/xoFIG6wSMMQfs7gvcNlR9GVaLck.jpg",
  companyLogo: "https://framerusercontent.com/images/15Ld3p6d773yFp3y2w3cMb0.svg"
};

const FillerSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <div className="h-2 w-2 bg-blue-600 rounded-sm"></div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Trusted by the best
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto lg:mx-0">
            Scientific teams at Novo Nordisk, Johnson & Johnson, and IFF all use Cradle to engineer proteins faster.
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Logos Grid */}
          <div className="grid grid-cols-2 gap-4">
            {logos.map((logo, index) => (
              <div key={index} className="flex h-32 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Testimonial Card */}
          <div className="relative rounded-2xl border border-gray-200 p-8">
            <h3 className="mb-8 text-2xl font-medium text-gray-800">
              "{Testimonial.quote}"
            </h3>
            <div className="flex items-center gap-4">
              <img
                src={Testimonial.companyLogo}
                alt="Corteva Logo"
                className="h-10 w-10"
              />
              <div>
                <p className="font-semibold text-gray-900">{Testimonial.author}</p>
                <p className="text-sm text-gray-600">{Testimonial.title}</p>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 h-48 w-48 lg:h-64 lg:w-64">
              <img
                src={Testimonial.authorImage}
                alt={Testimonial.author}
                className="h-full w-full object-cover object-left-top"
                style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FillerSection;