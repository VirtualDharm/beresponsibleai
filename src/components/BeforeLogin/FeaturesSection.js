import React from "react";

// Data for the feature cards on the right
const featureCards = [
  {
    imageSrc:
      "https://cdn.prod.website-files.com/689d3e623c72de3de55d3877/68a0c1671c649958c67969d2_e2e.webp",
    altText: "Screenshot of scheduling agent dashboard",
    title: "Scheduler Saves You From Manual Outreach",
    description:
      "Schedulers are drowning in post-it reminders, texts, and software solutions. Alden's end-to-end scheduling agent automates shift coverage around the clock, learning your team’s preferences, filling schedule gaps, and handling callouts. It customizes outreach via text, voice, and email, while keeping your EHR updated in real time.",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/689d3e623c72de3de55d3877/68a0c20e69d0d522d9ee43a0_ai-call.webp",
    altText: "A view of message center",
    title: "Call Center Agent Takes Action 24/7",
    description:
      "Caregivers and client calls sit getting redirected and waiting for answers. Handle caregiver and clients calls at scale with 24/7 voice AI built for home care. Instantly triage callouts, reschedule visits, confirm caregiver availability, and keep patients informed — in any language. Alden's agent can escalate urgent care issues or fill open shifts automatically, so your coordinators only step in when it truly needs a human touch.",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/689d3e623c72de3de55d3877/68a0c265c3c1b8befeddd801_e2d2485679e9f3aebb46151c4d5d69f2_caregiver-exp-manager.webp",
    altText: "Caregiver Experience Manager",
    title: "Caregiver Manager Onboards Seamlessly",
    description:
      "Unclear schedules, delayed responses, and inconsistent communications can burn your caregiver team out. Don’t lose great hires to silence. Alden's platform keeps caregivers engaged from day one — checking in, collecting skills, confirming availability, and keeping them compliant so they’re always ready for their next shift.",
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
              Work Smarter with Your 24/7 AI Coordinator
            </h2>
          </div>
          <p className="text-base text-gray-600 mb-8">
            Your AI coordination agent is built for the way you run your agency.
            Mix and match modules for scheduling, communication, onboarding, and
            client engagement — each tailored to your processes for maximum
            impact. We can start with one custom use case, and expand to more as
            you see ROI.
          </p>
          <a
            href="#"
            role="button"
            className="inline-block bg-lime-300 text-black font-semibold py-3 px-8 rounded-full transition-transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        {/* Right Content Column with Feature Cards */}
        <div className="flex flex-col gap-8">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-100/80 p-6 rounded-2xl shadow-sm sticky top-32"
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
