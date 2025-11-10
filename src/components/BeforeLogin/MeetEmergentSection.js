import React, { useState, useEffect } from 'react';
import '../../App.css';

const animatedWords = ["internal tool.", "web app.", "mobile app.", "chrome extension."];
const placeholderTexts = [
  "A dashboard for my business that shows key metrics...",
  "An app for tracking my daily habits and progress...",
  "A game where players can build and trade virtual items...",
  "A portfolio website to showcase my design work...",
];

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
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-20 md:py-0 backdrop-blur-sm bg-white/5">
      <div className="my-auto flex flex-col gap-[40px] container items-center">
        {/* Top Banner Link */}
        <a target="_blank" rel="noopener noreferrer" className="mx-auto flex w-max items-center gap-2 rounded-lg bg-[#E3E8E6] px-5 py-2 text-black transition-transform hover:scale-105" href="https://vsc.is/seed-funding-yc-dalton-caldwell-and-soma-capital-led-by-gokul-rajaram">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="text-black"><path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path></svg>
          <p className="text-[12px] font-medium uppercase leading-[150%] text-black">ROCKET RAISES $15M SEED FUNDING</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" className="text-black"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
        </a>

        {/* Headlines */}
        <div className="flex w-full flex-col gap-2 overflow-hidden text-center">
          <p className="mx-auto w-7/12 text-[48px] font-semibold leading-[120%] text-white max-sm:w-full max-sm:text-[32px]">
            Think It. Type It. Launch It.
          </p>
          <div className="mx-auto flex w-[620px] flex-col items-center justify-center gap-1 overflow-hidden max-sm:w-full">
            <div className="flex flex-wrap justify-center">
              <p className="text-[20px] leading-[140%] text-white max-sm:text-[18px]">
                Build production-ready
              </p>
              <div className="relative ml-1 h-[28px] w-[150px] text-left">
                {animatedWords.map((word, index) => (
                  <span key={word} className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentWordIndex ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                      <p className="text-[20px] font-medium leading-[140%] text-[#0DF9FF] underline underline-offset-2 max-sm:text-[18px]">
                      {word}
                    </p>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Textarea Form */}
        <form className="h-full w-full max-w-[766px] overflow-hidden">
          <div className="relative mx-auto flex w-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)]">
            <textarea
              name="prompt"
              rows="4"
              className="placeholder:text-black/50 block min-h-[80px] w-full resize-none overflow-auto bg-transparent px-5 py-5 pb-0 text-[14px] leading-[150%] text-black placeholder:text-[14px] focus:outline-none"
              placeholder={placeholder ? `${placeholder}|` : 'What can I build for you today?'}
            />
            <div className="flex w-full items-center justify-between px-5 pb-3 pt-3">
              <div className="flex gap-2">
                {/* Attach Button */}
                <button type="button" className="group relative flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-md bg-black/10 text-black transition-colors hover:bg-black/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="h-4 w-4"><path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"></path></svg>
                </button>
                {/* Import Button */}
                <button type="button" className="hidden items-center gap-1 rounded-md bg-black/10 px-3 py-1 text-xs text-black transition-colors hover:bg-black/20 sm:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="14" height="14"><path fill="#0acf83" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"></path><path fill="#a259ff" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"></path><path fill="#f24e1e" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"></path><path fill="#ff7262" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"></path><path fill="#1abcfe" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"></path></svg>
                    Import
                </button>
              </div>
              <button type="submit" className="flex h-[26px] w-[26px] items-center justify-center rounded-md bg-black/10 text-black transition-colors hover:bg-black/20" aria-label="Submit prompt">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="h-4 w-4"><path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"></path></svg>
              </button>
            </div>
          </div>
        </form>

        {/* Tech Stack Icons */}
        <div className="tech-stack-container mx-auto mt-4 flex flex-col rounded-[20px] max-sm:w-full md:flex-row">
            <div className="tech-stack-group border-r border-white/20">
                <p className="tech-stack-title">Frameworks</p>
                <div className="tech-stack-icons">
                    <div className="tech-icon flutter"></div>
                    <div className="tech-icon html"></div>
                    <div className="tech-icon nextjs"></div>
                    <div className="tech-icon react"></div>
                </div>
            </div>
            <div className="tech-stack-group">
                <p className="tech-stack-title">Integrations</p>
                <div className="tech-stack-icons integrations">
                    <div className="tech-icon github"></div>
                    <div className="tech-icon supabase"></div>
                    <div className="tech-icon figma"></div>
                    <div className="tech-icon netlify"></div>
                    <div className="tech-icon stripe"></div>
                    <div className="tech-icon openai"></div>
                    <div className="tech-icon anthropic"></div>
                    <div className="tech-icon gemini"></div>
                    <div className="tech-icon perplexity"></div>
                    <div className="tech-icon google-analytics"></div>
                    <div className="tech-icon adsense"></div>
                    <div className="tech-icon resend"></div>
                    <div className="tech-icon twilio"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MeetEmergentSection;
