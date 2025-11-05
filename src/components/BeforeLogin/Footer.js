import React from 'react';

const complianceItems = [
  { icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M13.3333 13.3333H26.6666V16.6666H13.3333V13.3333Z" fill="#424242"></path>
        <path d="M13.3333 20H26.6666V23.3333H13.3333V20Z" fill="#424242"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M30 6.66666H10C8.15905 6.66666 6.66663 8.15908 6.66663 10V30C6.66663 31.8409 8.15905 33.3333 10 33.3333H30C31.8409 33.3333 33.3333 31.8409 33.3333 30V10C33.3333 8.15908 31.8409 6.66666 30 6.66666ZM10 30H30V10H10V30Z" fill="#424242"></path>
      </svg>
    ), 
    line1: 'GDPR', line2: 'Compliant' 
  },
  { icon: <img src="https://framerusercontent.com/images/E1FdqcCJvCewRGV0nnkX0VM16I.png" alt="SOC2 Compliant" className="h-10 w-10" />, line1: 'SOC2', line2: 'Compliant' },
  { icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2.25C15.1337 2.25 17.9237 3.82487 19.666 6.1368C21.4084 8.44873 22.0935 11.4723 21.5793 14.3986C21.065 17.3248 19.3957 19.933 16.9248 21.5283C14.4539 23.1236 11.3938 23.5516 8.5 22.75" stroke="#424242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M4 10.5C4.8541 12.1837 6.22053 13.538 7.91039 14.4116C9.60025 15.2852 11.5363 15.6384 13.4397 15.43" stroke="#424242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ), 
    line1: 'Access', line2: 'Control' 
  },
  { icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#424242" strokeWidth="1.5" strokeMiterlimit="10"></path>
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#424242" strokeWidth="1.5" strokeMiterlimit="10"></path>
        <path d="M3.98438 15.293L12 15" stroke="#424242" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path>
      </svg>
    ), 
    line1: 'Bring your own', line2: 'LLM' 
  },
];

const Footer = () => {
    return (
        <footer className="relative bg-black text-gray-400 py-16 px-4 sm:px-8 overflow-hidden">
            <div className="absolute inset-0 z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
                <p className="text-[20vw] font-bold text-gray-500/10 select-none whitespace-nowrap">
                    ai.work
                </p>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl flex flex-col gap-16">
                {/* Top Section: Headline and CTAs */}
                <div className="dotted-background grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-5xl lg:text-6xl font-semibold text-white">
                            Your next hire<br />is agentic
                        </h2>
                        <p className="max-w-md text-base">
                            Built for the security, compliance, and control that modern enterprises require.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="https://www.ai.work/book-a-demo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 text-black transition-transform hover:scale-[1.02]">
                            <div className="flex items-center gap-4">
                                <img src="https://framerusercontent.com/images/pZQJZB1ojeD4oOn0w6DIf0AGaJU.png" alt="Demo" className="h-11 w-11 rounded-full"/>
                                <div>
                                    <p className="text-sm font-medium">See our AI Workers in action, book a demo now.</p>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gray-400"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </a>
                         <a href="https://www.ai.work/request-access" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-between gap-4 rounded-xl bg-[#141414] p-4 text-white transition-transform hover:scale-[1.02]">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <div className="relative h-5 w-5">
                                    <div className="absolute h-full w-full rounded-full bg-green-500 blur-[1px]"></div>
                                    <div className="absolute h-full w-full rounded-full bg-green-400"></div>
                                </div>
                            </div>
                            <p className="mx-auto text-sm font-medium">Request Access</p>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><polyline points="9 18 15 12 9 6"></polyline></svg>
                         </a>
                    </div>
                </div>

                {/* Middle Section: Compliance */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {complianceItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <div className="h-10 w-10">{item.icon}</div>
                            <p className="text-sm text-gray-500">
                                {item.line1}<br/>{item.line2}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Section: Copyright and Links */}
                <div className="dotted-background border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p className="text-gray-600">© 2024 AI.WORK, INC. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">TERMS OF USE</a>
                        <a href="#" className="hover:text-white">PRIVACY POLICY</a>
                        <a href="#" className="hover:text-white">SUPPORT</a>
                        <a href="#" className="hover:text-white">TRUST CENTER</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
