import React, { useState, useEffect } from 'react';

const placeholders = [
    "Build me a dashboard for my business...",
    "Build me a game where players can...",
    "Build me a personal portfolio website...",
];

const MeetEmergentSection = () => {
    const [placeholder, setPlaceholder] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === placeholders[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % placeholders.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    useEffect(() => {
        setPlaceholder(placeholders[index].substring(0, subIndex));
    }, [subIndex, index]);


    return (
        <section className="hero-section py-[150px]">
            <div className="mx-auto w-full max-w-4xl px-6">
                <img src="https://assets.emergent.sh/assets/Landing-Hero-E.gif" className="mx-auto h-14 w-14 cursor-pointer md:h-[80px] md:w-[80px] mb-4" alt="Emergent Logo" />
                <p className="text-center font-brockmann text-[32px] font-medium leading-9 tracking-[-0.72px] text-white md:text-[36px]" style={{ textShadow: '0 0 40px rgba(232, 232, 230, 0.2)' }}>
                    Meet Emergent
                </p>
                <p className="mx-auto mt-4 max-w-[550px] text-center text-base font-medium leading-6 text-[#666] font-inter md:text-[16px]">
                    Emergent turns concepts into production-ready applications, saving time and eliminating technical barriers.
                </p>
                <div className="relative mt-8 h-[140px] rounded-[20px] border-[4px] border-[#333] p-[2px] md:mt-11 md:h-[160px]">
                    <textarea
                        className="relative h-full w-full resize-none rounded-[14px] bg-[#0F0F0F] p-4 pr-12 text-[15px] text-[#DDDDE6] outline-none focus:ring-1 focus:ring-white/50 md:text-[16px]"
                        placeholder={placeholder + '|'}
                    />
                    <div className="absolute right-[10px] bottom-[10px] cursor-pointer rounded-full bg-white p-[6px]">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.1303 4.61244C11.611 4.13179 12.3903 4.13179 12.871 4.61244L18.4093 10.1509C18.89 10.6315 18.89 11.4108 18.4093 11.8914C17.9287 12.3721 17.1495 12.3721 16.6688 11.8914L13.2314 8.45408V19.0211C13.2314 19.7009 12.6803 20.252 12.0006 20.252C11.321 20.252 10.7699 19.7009 10.7699 19.0211V8.45408L7.33248 11.8914C6.85185 12.3721 6.07259 12.3721 5.59196 11.8914C5.11127 11.4108 5.11127 10.6315 5.59196 10.1509L11.1303 4.61244Z" fill="#131314"></path></svg>
                    </div>
                </div>
                 <button className="get-started-button mx-auto mt-8 flex items-center gap-3 rounded-full bg-white px-7 py-3 font-brockmann text-[16px] font-semibold tracking-wide text-[#0E0E0F] transition-colors md:mt-10">
                    Start Building
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="h-6 w-6 object-contain"><path fillRule="evenodd" clipRule="evenodd" d="M19.6395 11.3816C20.1202 11.8622 20.1202 12.6416 19.6395 13.1222L14.1011 18.6606C13.6204 19.1412 12.8412 19.1412 12.3606 18.6606C11.8798 18.1799 11.8798 17.4007 12.3606 16.92L15.7979 13.4826L5.23081 13.4826C4.55106 13.4826 4 12.9316 4 12.2518C4 11.5722 4.55106 11.0211 5.23081 11.0211L15.7979 11.0211L12.3606 7.5837C11.8798 7.10307 11.8798 6.32381 12.3606 5.84318C12.8412 5.36249 13.6204 5.36249 14.1011 5.84318L19.6395 11.3816Z" fill="#0E0E0F"></path></svg>
                </button>
            </div>
        </section>
    );
};

export default MeetEmergentSection;
