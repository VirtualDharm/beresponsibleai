import React from 'react';

const complianceItems = [
  { icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12.36,25.41,9,29.14,5.64,25.41,9,21.68Zm15.28,0L24,29.14l-3.64-3.73,3.64-3.73Zm-8-20.27,3.64-3.73,3.64,3.73-3.64,3.73Zm-7.28,0L9,8.87,5.64,5.14,9,1.41Z" fill="#424242"></path><path d="M21.68,16.5,18,12.83,16.18,14.65,14.35,12.83,12.53,14.65l-1.82-1.82L9,14.65,5.14,10.79l3.87-3.87,1.82,1.82,1.82-1.82L14.47,5.1,16.29,3.28,18.12,5.1l1.82,1.82,1.82-1.82,3.87,3.87-3.87,3.87L20.59,11Zm5.46,8L29.14,26.5l-3.73,3.64,3.73,3.64,3.73-3.64-3.73-3.64ZM5.14,24.5l-1.92,1.92,3.73,3.64-3.73,3.64,3.64,3.73,1.92-1.92,1.82-1.82L5.14,24.5Z" fill="#424242"></path></svg>
    ), 
    line1: 'Responsibility'
  },
  { icon: <img src="https://framerusercontent.com/images/E1FdqcCJvCewRGV0nnkX0VM16I.png" alt="Explainability" className="h-10 w-10" />, line1: 'Explainability'},
  { icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#424242"></path></svg>
    ), 
    line1: 'Ethics'
  },
  { icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12.86V6.73c0-3.47-1.52-4.13-4.59-4.59-2.2-.33-4.22.18-5.32 1.45-.66.75-1.03 1.73-1.03 2.82v10.37c0 .68.39 1.34.86 1.77.37.33.8.54 1.25.59h.1c.32.03.63-.03.93-.16.92-.41 1.4-1.56 1-2.58l-.22-.65c-.29-.87.27-1.84 1.14-2.14.78-.26 1.4.15 1.57.85l.17.72c.3,1.25,1.75,2.12,3.13,1.81.7-.15 1.19-.68 1.43-1.28.31-.76.13-1.63-.37-2.17l-1.35-1.45c-.46-.51-.62-1.12-.48-1.79.13-.57.51-1.07 1.01-1.34l.27-.14" fill="#424242"></path></svg>
    ), 
    line1: 'Resilience' 
  },
    { icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" fill="#424242" /></svg>
    ), 
    line1: 'Compliance' 
  }
];

const Footer = () => {
    return (
        <footer className="relative bg-black text-gray-400 py-16 px-4 sm:px-8 overflow-hidden">
            <div className="absolute inset-0 z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
                <p className="text-[20vw] font-bold text-gray-500/10 select-none whitespace-nowrap">
                    BeResponsibleAI
                </p>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl flex flex-col gap-16">
                {/* Top Section: Headline and CTAs */}
                <div className="dotted-background grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-5xl lg:text-6xl font-semibold text-white">
                            Join the Movement.<br />Code Responsibly.
                        </h2>
                        <p className="max-w-md text-base">
                           This is a community-driven initiative. Your feedback and participation are crucial to shaping a future of trustworthy AI.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="https://www.linkedin.com/in/sharad-maheshwari-abdominal-imager/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 text-black transition-transform hover:scale-[1.02]">
                            <div className="flex items-center gap-4">
                                <img src="./founder4.jpeg" alt="Demo" className="h-11 w-11 rounded-md"/>
                                <div>
                                    <p className="text-sm font-medium">Connect with the founder on LinkedIn.</p>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gray-400"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </a>
                         <a href="https://x.com/abdo_imaging" target="_blank" rel="noopener noreferrer" className="relative flex items-center justify-between gap-4 rounded-xl bg-[#141414] p-4 text-white transition-transform hover:scale-[1.02]">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <div className="relative h-5 w-5">
                                    <div className="absolute h-full w-full rounded-md bg-cyan-500 blur-[1px]"></div>
                                    <div className="absolute h-full w-full rounded-md bg-cyan-400"></div>
                                </div>
                            </div>
                            <p className="mx-auto text-sm font-medium">Follow on X (formerly Twitter)</p>
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><polyline points="9 18 15 12 9 6"></polyline></svg>
                         </a>
                    </div>
                </div>

                {/* Middle Section: Pillars */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                    {complianceItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <div className="h-10 w-10 text-gray-500">{item.icon}</div>
                            <p className="text-sm text-gray-400">
                                {item.line1}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Section: Copyright and Links */}
                <div className="dotted-background border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p className="text-gray-600">© 2024 BERESPONSIBLEAI. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">TERMS OF USE</a>
                        <a href="#" className="hover:text-white">PRIVACY POLICY</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
