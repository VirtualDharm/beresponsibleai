import React, { useState, useEffect } from 'react';
import {
  SiFlutter, SiHtml5, SiNextdotjs, SiReact, SiNodedotjs, SiPython, SiTypescript, SiFirebase, SiPostgresql,
  SiGithub, SiSupabase, SiFigma, SiDocker, SiSlack, SiOpenai, SiAnthropic,
  SiPerplexity, SiGoogleanalytics, SiGoogleadsense, SiResend, SiTwilio
} from 'react-icons/si';
import { LuRocket, LuArrowRight, LuPaperclip, LuArrowUp } from 'react-icons/lu';


// Text content for animations
const animatedWords = ["Responsibly.", "Ethically.", "Resiliently.", "Compliantly."];
const placeholderTexts = [
  "An idea for a clinical decision support tool...",
  "A generative model for marketing content...",
  "A system for automated hiring and resume screening...",
  "An app that provides personalized financial advice...",
];

// Reusable Icon Wrapper to apply common styles
const IconWrapper = ({ children }) => (
  <div className="group text-gray-500 hover:text-black transition-colors">
    <div className="w-6 h-6">{children}</div>
  </div>
);

// Define icon arrays using the imported components
const frameworks = [
  { name: 'Flutter', Icon: SiFlutter },
  { name: 'HTML5', Icon: SiHtml5 },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'React', Icon: SiReact },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Python', Icon: SiPython },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Firebase', Icon: SiFirebase },
  { name: 'PostgreSQL', Icon: SiPostgresql },
];

const integrations = [
  { name: 'GitHub', Icon: SiGithub },
  { name: 'Supabase', Icon: SiSupabase },
  { name: 'Figma', Icon: SiFigma },
  { name: 'Docker', Icon: SiDocker },
  { name: 'Slack', Icon: SiSlack },
  { name: 'OpenAI', Icon: SiOpenai },
  { name: 'Anthropic', Icon: SiAnthropic },
  { name: 'Perplexity', Icon: SiPerplexity },
  { name: 'Google Analytics', Icon: SiGoogleanalytics },
  { name: 'Google AdSense', Icon: SiGoogleadsense },
  { name: 'Resend', Icon: SiResend },
  { name: 'Twilio', Icon: SiTwilio },
];


const MeetEmergentSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Effect for the animated word flipping (no changes)
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, 2000);
    return () => clearInterval(wordInterval);
  }, []);

  // Effect for the typing placeholder animation (no changes)
  useEffect(() => {
    if (subIndex === placeholderTexts[placeholderIndex].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
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
            <LuRocket className="h-4 w-4 text-gray-600" />
            <p className="text-[12px] font-medium uppercase leading-[150%] text-gray-700">A NEW MOVEMENT: BERESPONSIBLEAI</p>
            <LuArrowRight className="h-4 w-4 text-black" />
          </a>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">Don't Just Code. Code Responsibly.</h2>
          <div className="flex flex-wrap justify-center items-center">
            <p className="text-lg md:text-xl text-gray-600">Build AI that is</p>
            <div className="relative ml-2 h-[28px] w-40 text-left">
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
                <LuPaperclip className="h-4 w-4" />
                Import
              </button>
              <button type="submit" className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200" aria-label="Submit prompt">
                <LuArrowUp className="h-4 w-4" />
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
                Build AI Models →
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-12 flex w-full flex-col gap-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 md:flex-row md:items-center md:justify-around">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <p className="text-sm font-medium text-gray-500">Frameworks</p>
            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
              {frameworks.map(({ name, Icon }) => (
                <IconWrapper key={name}><Icon className="h-full w-full" /></IconWrapper>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-gray-200 md:h-12 md:w-px"></div>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <p className="text-sm font-medium text-gray-500">Integrations</p>
            <div className="flex flex-wrap gap-[18px] justify-center md:justify-start">
              {integrations.map(({ name, Icon }) => (
                <IconWrapper key={name}><Icon className="h-full w-full" /></IconWrapper>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeetEmergentSection;