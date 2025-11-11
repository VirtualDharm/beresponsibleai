import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Developer",
    id: "tier-developer",
    href: "#",
    description: "For individuals and teams starting their responsible AI journey.",
    price: { monthly: "$19", annually: "$199" },
    features: ["Access to all Suite Tools", "Generate RATS Score", "AI-Powered Chat Coach", "Community Access"],
    featured: false,
  },
  {
    name: "Scale",
    id: "tier-scale",
    href: "#",
    description: "Added flexibility at scale.",
    price: { monthly: "$99", annually: "$999" },
    features: [
      "Everything in Developer",
      "Submit feedback for new features",
      "Invitation to community calls",
      "Early access to new tools",
    ],
    featured: true,
  },
  {
    name: "Partner",
    id: "tier-partner",
    href: "#",
    description: "For organizations integrating RATS into their workflow.",
    price: { monthly: "$49", annually: "$499" },
    features: [
      "Everything in Contributor",
      "Collaborate on feature development",
      "Priority support for integration",
      "API access for RATS framework",
    ],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8" id="about">
      {/* Gradient Background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#7775D6] to-[#E935C1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[120rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Pricing that grows with you
        </h2>
        <p className="mt-6 text-lg font-medium text-gray-400 sm:text-xl/8">
          Responsible AI should be a right, not a privilege. Our tools are free to empower every developer to code responsibly. This is a community effort, and we invite you to join us at any level.
        </p>

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-md bg-white/10 p-1 text-sm font-semibold text-white">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={classNames(
                "px-4 py-1.5 rounded-md transition",
                billing === "monthly"
                  ? "bg-indigo-600"
                  : "hover:bg-white/20 text-gray-300"
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling("annually")}
              className={classNames(
                "px-4 py-1.5 rounded-md transition",
                billing === "annually"
                  ? "bg-indigo-600"
                  : "hover:bg-white/20 text-gray-300"
              )}
            >
              Annually
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-8 sm:mt-20 lg:max-w-6xl lg:grid-cols-3 lg:gap-x-8">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "bg-white text-gray-900 shadow-2xl ring-1 ring-gray-900/10 scale-105 z-10"
                : "bg-gray-800/80 text-white ring-1 ring-white/10",
              "relative rounded-3xl p-8 sm:p-10 transition-transform hover:scale-105"
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-indigo-600" : "text-indigo-400",
                "text-sm font-semibold"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-gray-900" : "text-white",
                  "text-5xl font-semibold tracking-tight"
                )}
              >
                {tier.price[billing]}
              </span>
              <span
                className={classNames(
                  tier.featured ? "text-gray-500" : "text-gray-400",
                  "text-base"
                )}
              >
                /{billing === "monthly" ? "month" : "year"}
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-600" : "text-gray-400",
                "mt-6 text-base"
              )}
            >
              {tier.description}
            </p>

            <ul className="mt-8 space-y-3 text-sm sm:mt-10">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className={classNames(
                      tier.featured ? "text-indigo-600" : "text-indigo-400",
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={tier.href}
              className={classNames(
                tier.featured
                  ? "bg-indigo-600 text-white hover:bg-indigo-500"
                  : "text-indigo-400 inset-ring inset-ring-indigo-200 hover:bg-white/10",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
              )}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}