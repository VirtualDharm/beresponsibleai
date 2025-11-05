import React, { useState, useRef, useEffect } from 'react';

const faqData = [
  {
    question: "How do I activate Dora AI?",
    answer: (
      <p>
        Dora AI is available to all users. Just click the
        <img src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/ai_mini_logo.webp" alt="Dora AI logo" className="inline-block mx-2 h-7 w-7 align-middle" />
        button on the top toolbar to start prompting!
      </p>
    )
  },
  {
    question: "How is Dora AI different from other AI tools?",
    answer: (
      <>
        <p>Existing AI website tools rely on predefined templates to swap generated copy and images, without real knowledge of design principles.</p>
        <br />
        <p>By contrast, each Dora AI site is realized from beginning to end with AI... No templates, no pre-defined layouts.</p>
      </>
    )
  },
  {
    question: "How much usage is included with my Dora AI plan?",
    answer: (
        <p>Every Dora account has a base credit balance of 120 credits. You can also purchase a Dora plan to obtain more credits.
            <a href="https://www.dora.run/pricing" target="_blank" rel="noopener noreferrer" className="underline ml-1">See Pricing</a>
        </p>
    )
  },
  {
    question: "Can Dora AI generate 3D assets or site animations?",
    answer: (
      <p>
        AI-generated 3D and animations are central to Dora AI and are currently under development for
        <a href="https://s.dora.run/ai-roadmap" target="_blank" rel="noopener noreferrer" className="underline ml-1">future versions.</a>
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
        className="overflow-hidden transition-height duration-300 ease-in-out"
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
    <section className="bg-black text-white py-20 px-5 sm:px-10">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-base font-semibold text-[#FF7F41] sm:text-lg">FAQ</div>
        <div className="relative pt-2 sm:pt-4 max-w-[658px] text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Got questions? <br />Join the community.
        </div>
        <div className="mt-2 text-center text-xs text-white/50 sm:mt-4 sm:text-base max-w-[625px]">
          Our Discord community and staff are here to help!<br />Your feedback will help Dora AI improve in future versions.
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-6 flex h-[41px] w-[156px] items-center justify-center gap-2 overflow-hidden rounded-full border border-white/20 text-base font-medium shadow-[0_0px_2px_0px_#FFFFFF_inset] transition-all duration-800 hover:shadow-[0_0px_20px_0px_#FFFFFF_inset] sm:mt-10"
          href="https://s.dora.run/dora-discord"
        >
          <div className="flex h-full w-full items-center justify-center gap-2 bg-white/10">
            <span>Join Discord</span>
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