import React, { useState, useEffect } from 'react';

// Text content for animations
const animatedWords = ["Responsibly.", "Ethically.", "Resiliently.", "Compliantly."];
const placeholderTexts = [
  "An idea for a clinical decision support tool...",
  "A generative model for marketing content...",
  "A system for automated hiring and resume screening...",
  "An app that provides personalized financial advice...",
];

// --- SVG Icon Components (Alternative to Sprite Sheet) ---
const commonIconProps = {
  className: "w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity",
  fill: "currentColor"
};

const FlutterIcon = () => <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M13.54 3.864L4.25 13.153l5.69 5.69L20.154 8.63l-6.614-4.767zM8.939 17.514L4.25 12.825l9.288-9.289 4.767 4.767-9.366 9.21z"/></svg>;
const HtmlIcon = () => <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zM8.5 7h7l-.25 2.5H7.5l.25 2.5h8l-.375 4.5-3.375 1.125-3.375-1.125L8 15h-2l.5 5.5L12 21.5l5.5-1.5.5-5.5H12v-2.5h4.5l.25-2.5h-5z"/></svg>;
const NextJSIcon = () => <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M15.42 16.33v-8.66h-1.92v8.66h1.92zm-3.6-2.02c-.1-1.6-.92-2.19-2.61-2.19-1.39 0-2.31.39-2.31 1.73 0 .94.55 1.28 1.23 1.5l1.09.36c1.03.34 1.32.6 1.32 1.22 0 .96-.81 1.42-2.31 1.42-1.92 0-2.92-.63-3.02-2.49h-1.9c.1 2.85 1.83 3.99 4.92 3.99 3.25 0 4.82-1.28 4.82-3.4 0-1.55-.8-2.34-2.13-2.77l-1.07-.35c-.84-.28-1.15-.54-1.15-1.05 0-.58.55-.96 1.62-.96 1.05 0 1.63.31 1.73 1.54h1.9zM21.57 4H2.43C2.18 4 2 4.18 2 4.43v15.15c0 .25.18.43.43.43h19.14c.25 0 .43-.18.43-.43V4.43c0-.25-.18-.43-.43-.43z"/></svg>;
const ReactIcon = () => <svg {...commonIconProps} viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.036"/><g><ellipse cx="12" cy="12" rx="10.064" ry="4.025" transform="rotate(-120 12 12)"/><ellipse cx="12" cy="12" rx="10.064" ry="4.025" transform="rotate(-60 12 12)"/><ellipse cx="12" cy="12" rx="10.064" ry="4.025"/></g></svg>;
const GithubIcon = () => <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 24 5.67 18.63 0 12 0"/></svg>;
const SupabaseIcon = () => <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M12 4.015c-3.033 0-5.836 1.02-8.106 2.766L12 15.015l8.106-8.234C17.836 5.035 15.033 4.015 12 4.015zm0 15.97c-3.033 0-5.836-1.02-8.106-2.766L12 8.985l8.106 8.234c-2.27 1.746-5.073 2.766-8.106 2.766z"/></svg>;
const FigmaIcon = () => <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M12 24a6 6 0 01-6-6v-6h6a6 6 0 110 12zM6 0a6 6 0 000 12h6V6a6 6 0 10-6-6zm6 6v6h6a6 6 0 10-6-6zm6 12a6 6 0 11-6-6 6 6 0 016 6zM6 12a6 6 0 016-6v6H6z" /></svg>;
// --- Additional Icons ---
const PythonIcon = () => (
  <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M12 0C9.243 0 6 1.343 6 4v4h6v1H5c-2.757 0-5 2.243-5 5v5c0 2.757 3.243 5 6 5h1v-4H6c-1.654 0-3-1.346-3-3v-4c0-1.654 1.346-3 3-3h7c2.757 0 5-2.243 5-5V4c0-2.657-3.243-4-6-4zm-1 4c.553 0 1 .447 1 1s-.447 1-1 1-1-.447-1-1 .447-1 1-1zm2 16c-.553 0-1 .447-1 1s.447 1 1 1 1-.447 1-1-.447-1-1-1z"/></svg>
);

const NodeJSIcon = () => (
  <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M11.998 0L2 5.998v12.004l9.998 6L22 18.002V5.998L11.998 0zM12 2.7l7.4 4.3v8l-7.4 4.3-7.4-4.3v-8L12 2.7zM10 7v7h1.5V8.5h1V14H14V7h-4z"/></svg>
);

const TypeScriptIcon = () => (
  <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M1.125 0C.504 0 0 .504 0 1.125v21.75C0 23.496.504 24 1.125 24h21.75c.621 0 1.125-.504 1.125-1.125V1.125C24 .504 23.496 0 22.875 0H1.125zM14.25 12h-2.25v7.5h2.25V12zm-3.375 0H6v1.5h1.875V19.5H10.5V12zm5.625 5.25v.375h1.875v-.375c0-.621-.252-1.08-.75-1.38-.498-.3-1.17-.45-2.016-.45-.846 0-1.515.147-2.007.441-.492.294-.738.756-.738 1.386 0 .63.246 1.095.738 1.395.492.3 1.161.45 2.007.45.846 0 1.518-.15 2.016-.45.498-.3.75-.765.75-1.395v-.375h-1.875z"/></svg>
);

const FirebaseIcon = () => (
  <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M3.89 18.66l2.42-14.43 3.71 7.17L3.89 18.66zm4.88-7.16L13.06 3.9l2.14 3.99-6.43-3.39 4.1 14.33zM18.6 21l-9.9-5.3 9.9-8.8L18.6 21z"/></svg>
);

const PostgreSQLIcon = () => (
  <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M12 0c-5.523 0-10 4.252-10 9.5 0 4.1 2.672 7.548 6.438 8.909L8 24l4-3.333L16 24l-.438-5.591C19.328 17.048 22 13.6 22 9.5 22 4.252 17.523 0 12 0z"/></svg>
);

const AWSIcon = () => (
  <svg {...commonIconProps} viewBox="0 0 256 256"><path d="M128 0L10 64v128l118 64 118-64V64zM64 96l64 36 64-36v72l-64 36-64-36z"/></svg>
);

const DockerIcon = () => (
  <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M3 10h3V7H3v3zm4 0h3V7H7v3zm4 0h3V7h-3v3zm4 0h3V7h-3v3zm4 0h3V7h-3v3zM2 12h20v2H2zM4 16h16v2H4z"/></svg>
);

const SlackIcon = () => (
  <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M6.33 15.66A1.66 1.66 0 1 1 4.67 14h1.66v1.66zm.83 0A1.66 1.66 0 0 1 7.16 14v-5A1.66 1.66 0 0 1 8.82 7.34a1.66 1.66 0 0 1 1.66 1.66v5a1.66 1.66 0 0 1-1.66 1.66H7.16zM15.66 17.67A1.66 1.66 0 0 1 14 19.33a1.66 1.66 0 0 1-1.66-1.66V16h1.66v1.67zm0-.83A1.66 1.66 0 0 1 14 15.18h-5A1.66 1.66 0 0 1 7.34 13.52 1.66 1.66 0 0 1 9 11.86h5a1.66 1.66 0 0 1 1.66 1.66v3.32z"/></svg>
);

const OpenAIIcon = () => (
  <svg {...commonIconProps} viewBox="0 0 24 24"><path d="M12.001 0L1.5 6v12l10.501 6 10.499-6V6zM12 2.5l8 4.5v10l-8 4.5-8-4.5v-10l8-4.5z"/></svg>
);

// Add more icon components here if needed...

const frameworks = [
  FlutterIcon,
  HtmlIcon,
  NextJSIcon,
  ReactIcon,
  NodeJSIcon,
  PythonIcon,
  TypeScriptIcon,
  FirebaseIcon,
  PostgreSQLIcon,
];

const integrations = [
  GithubIcon,
  SupabaseIcon,
  FigmaIcon,
  AWSIcon,
  DockerIcon,
  SlackIcon,
  OpenAIIcon,
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
              {frameworks.map((Icon, index) => (
                <div key={`fw-${index}`} className="group"><Icon /></div>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 md:h-12 md:w-px"></div>
          <div className="flex flex-[3] flex-col items-center gap-3 md:items-start">
            <p className="text-sm font-medium text-gray-500">Integrations</p>
            <div className="flex flex-wrap gap-[18px] justify-center md:justify-start">
               {/* Simplified for brevity, you can create and add all integration icons */}
              <div className="group"><GithubIcon /></div>
              <div className="group"><SupabaseIcon /></div>
              <div className="group"><FigmaIcon /></div>
              <div className="group"><AWSIcon /></div>
              <div className="group"><DockerIcon /></div>
              <div className="group"><SlackIcon /></div>
              <div className="group"><OpenAIIcon /></div>
              {/* Add other integration icon components here */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeetEmergentSection;