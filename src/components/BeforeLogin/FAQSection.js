import React, { useState } from 'react';

const faqs = [
  {
    question: "What is Emergent and how does it work?",
    answer: "Emergent is an AI-powered development platform that transforms your ideas into fully functional applications. Simply describe what you want to build in natural language, and our AI handles the coding, design, and deployment. No programming experience required."
  },
  // ... other FAQs
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="py-[150px] px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
                <div className="mb-10 text-center md:mb-20">
                    <p className="mb-4 font-ndot text-[14px] font-normal uppercase tracking-[1.4px] text-white">FREQUENTLY ASKED QUESTIONS</p>
                    <h2 className="text-[32px] font-medium leading-8 text-white md:text-[36px] md:leading-[40px]" style={{ textShadow: '0 0 40px rgba(232, 232, 230, 0.2)' }}>
                        Curious about Emergent? <br className="hidden md:block" /> We got you covered
                    </h2>
                </div>
                <div className="space-y-1">
                    {faqs.map((faq, index) => (
                        <article key={index} className="border-b border-white/10">
                            <h3>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex w-full items-center justify-between py-5 text-left md:py-6"
                                >
                                    <p className={`text-[18px] font-medium md:text-[22px] ${activeIndex === index ? 'bg-gradient-to-r from-[#80FFF9] to-white bg-clip-text text-transparent' : 'text-white'}`}>
                                        {faq.question}
                                    </p>
                                    <span className={`ml-4 text-white transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </span>
                                </button>
                            </h3>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                                <p className="font-inter text-[15px] font-medium leading-6 text-[#666] md:text-[16px]">
                                    {faq.answer}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;