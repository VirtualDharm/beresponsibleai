import React, { useState, useEffect } from 'react';

// Text content for animations
const animatedWords = ["Responsibly.", "Ethically.", "Resiliently.", "Compliantly."];
const placeholderTexts = [
  "An idea for a clinical decision support tool...",
  "A generative model for marketing content...",
  "A system for automated hiring and resume screening...",
  "An app that provides personalized financial advice...",
];

// Reusable Tailwind classes for the tech stack icons to keep the JSX clean
const commonIconClasses = "w-6 h-6 bg-no-repeat opacity-50 hover:opacity-100 transition-opacity cursor-pointer bg-[url('https://assets.rocket.new/rocket/tech-stack.webp')] bg-[length:712px]";

const MeetEmergentSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Effect for the animated word flipping
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(wordInterval);
  }, []);

  // Effect for the typing placeholder animation
  useEffect(() => {
    if (subIndex === placeholderTexts[placeholderIndex].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000); // Pause before deleting
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, placeholderIndex, reverse]);

  useEffect(() => {
    setPlaceholder(placeholderTexts[placeholderIndex].substring(0, subIndex));
  }, [subIndex, placeholderIndex]);

  return (
    <section className="bg-white text-black py-20 px-4 md:px-8">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-12">

        {/* Top Banner & Headlines */}
        <div className="flex flex-col items-center gap-8 text-center">
          <a target="_blank" rel="noopener noreferrer" className="mx-auto flex w-max items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-black transition-transform hover:scale-105 border border-gray-200" href="https://www.linkedin.com/posts/sharad-maheshwari-abdominal-imager_a-new-movement-called-beresonsibleai-activity-7380531219584782336-h2qD/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="text-gray-600"><path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path></svg>
            <p className="text-[12px] font-medium uppercase leading-[150%] text-gray-700">A NEW MOVEMENT: BERESPONSIBLEAI</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" className="text-black"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
          </a>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">Don't Just Code. Code Responsibly.</h2>
          <div className="flex flex-wrap justify-center items-center">
            <p className="text-lg md:text-xl text-gray-600">Build AI that is</p>
            <div className="relative ml-2 h-[28px] w-40 text-left"> {/* Increased width for longer words */}
              {animatedWords.map((word, index) => (
                <span key={word} className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentWordIndex ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                  <p className="text-lg md:text-xl font-medium text-[#0DF9FF] underline underline-offset-4">
                    {word}
                  </p>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column: Textarea */}
          <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 p-4 shadow-sm">
            <textarea
              name="prompt"
              rows="4"
              className="min-h-[120px] w-full resize-none bg-transparent p-2 text-base text-black placeholder:text-gray-400 focus:outline-none"
              placeholder={placeholder ? `${placeholder}|` : 'An idea for a clinical decision support tool...'}
            />
            <div className="flex items-center justify-between">
              <button type="button" className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256"><path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"></path></svg>
                Import
              </button>
              <button type="submit" className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200" aria-label="Submit prompt">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"></path></svg>
              </button>
            </div>
          </div>

          {/* Right Column: Descriptive Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-900">Generative AI</h3>
            <p className="mt-2 text-lg font-medium text-gray-700">Powering the next generation of AI</p>
            <p className="mt-4 text-base text-gray-500">
              Our advanced AI engine powers many of the most sophisticated LLMs and generative models in the world through world-class RLHF, data generation, model evaluation, safety, and alignment.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <button className="rounded-lg bg-[#0DF9FF] px-5 py-2.5 font-semibold text-black transition-transform hover:scale-105">
                Book Demo →
              </button>
              <a href="#" className="font-semibold text-gray-700 hover:text-black">
                Build AI >
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-12 flex w-full flex-col gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:flex-row md:items-center">
          <div className="flex flex-1 flex-col items-center gap-3 md:items-start">
            <p className="text-sm font-medium text-gray-500">Frameworks</p>
            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
              <div className={`${commonIconClasses} bg-[position:0_0]`}></div>
              <div className={`${commonIconClasses} bg-[position:-44px_0]`}></div>
              <div className={`${commonIconClasses} bg-[position:-85px_0]`}></div>
              <div className={`${commonIconClasses} bg-[position:-119px_0] bg-[length:660px]`}></div>
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 md:h-12 md:w-px"></div>
          <div className="flex flex-[3] flex-col items-center gap-3 md:items-start">
            <p className="text-sm font-medium text-gray-500">Integrations</p>
            <div className="flex flex-wrap gap-[18px] justify-center md:justify-start">
              <div className={`${commonIconClasses} bg-[position:-177px_0]`}></div>
              <div className={`${commonIconClasses} bg-[position:-219px_0]`}></div>
              <div className={`${commonIconClasses} bg-[position:-260px_0]`}></div>
              <div className={`${commonIconClasses} bg-[position:-295px_0]`}></div>
              <div className={`${commonIconClasses} bg-[position:-340px_0]`}></div>
              <div className={`${commonIconClasses} bg-[position:-382px_0]`}></div>
              <div className="h-5 w-6 mt-1 bg-no-repeat opacity-50 hover:opacity-100 transition-opacity cursor-pointer bg-[url('https://assets.rocket.new/rocket/tech-stack.webp')] bg-[length:500px] bg-[position:-298px_0]"></div>
              <div className={`${commonIconClasses} bg-[position:-476px_0]`}></div>
              <div className={`${commonIconClasses} bg-[position:-520px_0]`}></div>
              <div className={`${commonIconClasses} bg-[position:-560px_0]`}></div>
              <div className={`${commonIconClasses} bg-[position:-600px_0]`}></div>
              <div className={`${commonIconClasses} bg-[position:-642px_0]`}></div>
              <div className={`${commonIconClasses} bg-[position:-688px_0]`}></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeetEmergentSection;