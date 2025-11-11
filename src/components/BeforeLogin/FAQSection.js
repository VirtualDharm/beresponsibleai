import React, { useState, useRef, useEffect } from 'react';

const faqData = [
  {
    question: "What is BeResponsibleAI?",
    answer: (
      <p>
        BeResponsibleAI is both a platform and a movement. It’s the world’s first Responsible AI Suite with an integrated AI chat that helps you evaluate your ideas against five essential pillars: Responsibility, Explainability, Ethics, Resilience, and Compliance. Our mission is to help you build trust before you build AI.
      </p>
    )
  },
  {
    question: "What is the RATS (Resilient AI Trust Score)?",
    answer: (
      <>
        <p>The RATS is your AI’s maturity index for trust. Instead of a simple pass/fail, it evaluates your project across our five core pillars to provide a score from Foundational to Advanced, giving you a clear roadmap for improvement and responsible development.</p>
      </>
    )
  },
  {
    question: "Is my code and project information safe?",
    answer: (
        <p>Yes. This is a beta version and to protect your privacy and intellectual property, the application does not save or store any of your chat conversations, submitted code, or project assessment answers. All data is processed in-session only.
        </p>
    )
  },
  {
    question: "How can I join the BeResponsibleAI movement?",
    answer: (
      <p>
        The best way to get involved is to connect with our founder and the community on LinkedIn. Follow our journey, share your feedback, and help shape the future of responsible AI development.
        <a href="https://www.linkedin.com/in/sharad-maheshwari-abdominal-imager/" target="_blank" rel="noopener noreferrer" className="underline ml-1">Join the conversation!</a>
      </p>
    )
  },
];

const AccordionItem = ({ faq, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div
      className="w-full cursor-pointer rounded-2xl bg-white/20 p-6 transition-all duration-300 hover:bg-white/25"
      onClick={onClick}
    >
      <div className="flex w-full items-center justify-between">
        <p className="flex-1 pr-6 text-base font-normal text-white sm:text-xl">
          {faq.question}
        </p>
        <div className="relative flex h-4 w-4 items-center justify-center">
          <span className={`h-[1.5px] w-full bg-white transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'}`}></span>
          <span className="absolute h-full w-[1.5px] bg-white"></span>
        </div>
      </div>
      <div
        ref={contentRef}
        style={{ height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <div className="pt-6 text-sm text-gray-300 sm:text-base">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#035F85] text-white py-20 px-5 sm:px-10">
      <div className="flex flex-col items-center justify-center text-center">
  <div className="text-base font-semibold text-[#0DF9FF] sm:text-lg">FREQUENTLY ASKED QUESTIONS</div>
        <div className="relative pt-2 sm:pt-4 max-w-[658px] text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Have Questions? <br /> We Have Answers.
        </div>
        <div className="mt-2 text-center text-xs text-white/50 sm:mt-4 sm:text-base max-w-[625px]">
          Our mission is to make responsible AI accessible to everyone. <br />Join the conversation and help us build a trustworthy AI future.
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-6 flex h-[41px] w-[156px] items-center justify-center gap-2 overflow-hidden rounded-md border border-white/20 text-base font-medium shadow-[0_0px_2px_0px_#FFFFFF_inset] transition-all duration-800 hover:shadow-[0_0px_20px_0px_#FFFFFF_inset] sm:mt-10"
          href="https://www.linkedin.com/in/sharad-maheshwari-abdominal-imager/"
        >
          <div className="flex h-full w-full items-center justify-center gap-2 bg-white/10">
            <span>Connect</span>
            <img
              src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/arrow-right.png"
              alt="arrow"
              width="13"
              height="16"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </a>

        <div className="mt-10 w-full max-w-[640px] space-y-6 sm:mt-20 lg:max-w-[800px]">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
