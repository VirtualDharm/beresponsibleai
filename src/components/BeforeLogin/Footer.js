import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-white px-6 pb-20 pt-10 lg:px-20 lg:pt-[120px]">
            <div className="flex flex-col-reverse justify-between lg:flex-row lg:border-b lg:border-black/5 lg:py-20">
                <div className="mt-20 max-w-[470px] lg:mt-0">
                    <img src="https://assets.emergent.sh/assets/emergent-logo-new-black.svg" alt="Emergent Logo" className="h-8" />
                    <p className="mt-4 font-inter text-[14px] font-medium leading-[20px] text-[#666] lg:mt-6">
                        Build production-ready apps through conversation. <br className="hidden lg:block" />
                        Chat with AI agents that design, code, and deploy your application from start to finish.
                    </p>
                </div>
                <div className="flex flex-wrap gap-x-20 gap-y-10 lg:gap-x-16">
                    <div>
                        <h3 className="mb-2 font-brockmann text-[16px] font-semibold leading-6 text-black">Product</h3>
                        <ul className="space-y-2">
                            <li><button className="font-inter text-[16px] font-medium leading-[24px] text-black/50 hover:text-[#666]">Features</button></li>
                            <li><button className="font-inter text-[16px] font-medium leading-[24px] text-black/50 hover:text-[#666]">Pricing</button></li>
                            <li><button className="font-inter text-[16px] font-medium leading-[24px] text-black/50 hover:text-[#666]">FAQs</button></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="mb-2 font-brockmann text-[16px] font-semibold leading-6 text-black">Company</h3>
                         <ul className="space-y-2">
                           <li><a href="https://emergent.sh/enterprise" target="_blank" rel="noopener noreferrer" className="font-inter text-[16px] font-medium leading-[24px] text-black/50 hover:text-[#666]">Enterprise</a></li>
                           {/* ... other links */}
                         </ul>
                     </div>
                     <div>
                       <h3 className="mb-2 font-semibold leading-6 text-black">Legal</h3>
                         <ul className="space-y-2">
                           <li><a href="/privacy-policy" target="_blank" className="font-inter text-[16px] font-medium leading-[24px] text-black/50 hover:text-[#666]">Privacy Policy</a></li>
                           <li><a href="/terms-of-service" target="_blank" className="font-inter text-[16px] font-medium leading-[24px] text-black/50 hover:text-[#666]">Terms of Service</a></li>
                         </ul>
                     </div>
                </div>
            </div>
             <div className="relative mx-auto flex w-full flex-col justify-center pt-10 lg:flex-row lg:pt-6">
                 {/* ... copyright and social links */}
             </div>
        </footer>
    );
};

export default Footer;
