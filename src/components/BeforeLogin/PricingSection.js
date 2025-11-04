import React, { useState, useEffect } from 'react';

// A simple animated number component
const AnimatedNumber = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setCurrentValue(value));
    return () => cancelAnimationFrame(animation);
  }, [value]);

  return <span>{currentValue}</span>;
};

const individualPlans = [
    { name: 'Free', price: 0, description: 'Get started with essential features at no cost.', features: ['10 free monthly credits', 'Unlock all core platform features'] },
    { name: 'Standard', price: 17, description: 'Perfect for first-time builders.', features: ['Everything in Free, plus:', 'Build web & mobile apps', '100 credits per month'] },
    { name: 'Pro', price: 167, description: 'Built for serious creators and brands.', features: ['Everything in Standard, plus:', '1M context window', '750 Monthly Credits'] },
];


const PricingSection = () => {
    const [planType, setPlanType] = useState('individual'); // individual or teams
    const [billingCycle, setBillingCycle] = useState('annual'); // annual or monthly

    const plans = individualPlans; // Simplified for this example

    return (
        <section className="pricing-section bg-[#F5F4F2] py-[150px] px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <h2 className="font-brockmann text-[32px] font-medium leading-[36px] tracking-[-1.8px] text-black md:text-[36px]">Transparent pricing for every builder</h2>
                    <p className="mt-6 font-inter text-[15px] font-medium leading-6 text-[#666] md:text-[16px]">Choose the plan that fits your building ambitions. <br className="hidden md:block" />From weekend projects to enterprise applications, we've got you covered.</p>
                </div>
                <div className="mx-auto mb-5 flex max-w-[304px] items-center rounded-full border border-[#E3E3E2] bg-[#F0F0EF] p-1 text-[14px] text-black">
                    {/* Simplified Toggle */}
                    <button className={`flex-1 rounded-full py-2 font-semibold ${planType === 'individual' ? 'bg-white shadow-sm' : 'opacity-60'}`} onClick={() => setPlanType('individual')}>Individual</button>
                    <button className={`flex-1 rounded-full py-2 font-semibold ${planType === 'teams' ? 'bg-white shadow-sm' : 'opacity-60'}`} onClick={() => setPlanType('teams')}>Teams & Enterprise</button>
                </div>

                <div className="grid grid-cols-1 gap-5 place-items-center lg:grid-cols-3 lg:max-w-none">
                    {plans.map(plan => (
                        <div key={plan.name} className="relative w-full max-w-[375px] rounded-xl bg-white p-6 shadow-sm md:min-h-[600px]">
                             <h3 className="text-black text-[24px] font-brockmann font-medium">{plan.name}</h3>
                             <p className="text-[#666] font-inter text-[14px] mb-10">{plan.description}</p>
                             <div className="flex items-baseline">
                                <span className="text-4xl font-bold text-black">$<AnimatedNumber value={plan.price} /></span>
                                <span className="ml-1 text-sm text-black/50">/ month</span>
                             </div>
                             <ul className="mt-10 space-y-3">
                                {plan.features.map(feature => <li key={feature} className="flex items-start gap-3 text-sm text-black"><svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>{feature}</li>)}
                             </ul>
                             <div className="absolute bottom-8 left-8 right-8">
                                <button className="w-full rounded-full bg-black py-3 font-semibold text-white transition-colors hover:bg-black/80">Try Emergent</button>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;