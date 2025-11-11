import React from "react";

// Data for the feature cards on the right
const featureCards = [
  {
    imageSrc:
      "./bgimage3.jpg",
    altText: "AI Chat Interface",
    title: "AI-Powered Responsible AI Coach",
    description:
      "Engage in a guided conversation with an AI advisor that helps you refine ideas, review prompts, and test for ethical blind spots. It's the world’s first chat that doubles as a coach and debugger for AI creators, ensuring you consider key ethical dimensions from the start.",
  },
  {
    imageSrc:
      "./bgimage2.jpg",
    altText: "Risk Assessment Dashboard",
    title: "Get Your RATS Score",
    description:
      "Use the Risk Assessor to evaluate your AI idea against the five pillars of the RATS (Resilient AI Trust Score) framework. Understand your project's maturity index for trust and get a clear blueprint before you ever write a line of code.",
  },
  {
    imageSrc:
      "./bgimage1.jpg",
    altText: "Code Analysis View",
    title: "Context-Aware Code Audits",
    description:
      "Analyze your existing code with our audit tool. By providing context about your project's function and data sensitivity, you receive a detailed RATS audit that identifies risks and provides actionable recommendations for improvement across all five pillars of trust.",
  },
];

const FeaturesSection = () => {
  return (
    // Section uses a light background to match the new design
    <section
      id="features"
      className="bg-white text-gray-800 py-20 md:py-32 px-4 md:px-8"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Content Column */}
        <div className="lg:sticky top-28">
          <div className="mb-6">
            <div className="text-sm font-semibold tracking-wider bg-gray-200 text-gray-600 inline-block px-3 py-1 rounded">
              FEATURES
            </div>
          </div>
          <div className="mb-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
              Optimize Coding with Your 24/7 AI Assistant
            </h2>
          </div>
          <p className="text-base text-gray-600 mb-8">
            The BeResponsibleAI suite provides a comprehensive platform to guide you from idea to implementation. Evaluate concepts with our Risk Assessor, refine your approach with an AI coach, and audit your existing code to ensure it meets the highest standards of trust and responsibility.
          </p>
          <a
            href="#"
            role="button"
            className="inline-block bg-[#0ED8E3] text-[#FFFFFF] font-semibold py-3 px-8 rounded-md transition-transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        {/* Right Content Column with Feature Cards */}
        <div className="flex flex-col gap-8">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-sm sticky top-32"
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  className="w-full h-auto"
                  src={card.imageSrc}
                  alt={card.altText}
                  loading="lazy"
                />
              </div>
              <div className="mb-3">
                <h3 className="font-serif text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;