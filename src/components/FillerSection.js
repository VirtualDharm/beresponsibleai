import React from 'react';

const FillerSection = () => {
    return (
        <section
            className="relative flex w-full items-center justify-center md:h-screen"
            style={{
                backgroundImage: "url('https://assets.emergent.sh/assets/landing-page/landing-filler-background.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="z-10 text-center py-20 md:py-0">
                <h2 className="w-full text-center text-[36px] font-semibold leading-[32px] tracking-[-1.92px] text-white md:text-[72px] md:leading-[72px] md:tracking-[-4.32px]">
                    Start building <br /> on Emergent today.
                </h2>
                <button className="get-started-button relative mx-auto mt-8 flex items-center gap-3 rounded-full bg-white px-7 py-3 font-brockmann text-[16px] font-semibold tracking-wide text-[#0E0E0F] transition-colors md:mt-10">
                    Get Started
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className="h-6 w-6 object-contain"><path fillRule="evenodd" clipRule="evenodd" d="M19.6395 11.3816C20.1202 11.8622 20.1202 12.6416 19.6395 13.1222L14.1011 18.6606C13.6204 19.1412 12.8412 19.1412 12.3606 18.6606C11.8798 18.1799 11.8798 17.4007 12.3606 16.92L15.7979 13.4826L5.23081 13.4826C4.55106 13.4826 4 12.9316 4 12.2518C4 11.5722 4.55106 11.0211 5.23081 11.0211L15.7979 11.0211L12.3606 7.5837C11.8798 7.10307 11.8798 6.32381 12.3606 5.84318C12.8412 5.36249 13.6204 5.36249 14.1011 5.84318L19.6395 11.3816Z" fill="#0E0E0F"></path></svg>
                </button>
            </div>
            <img src="https://assets.emergent.sh/assets/landing-page/footer-filler.gif" className="absolute bottom-[50px] mx-auto h-[80px] w-[80px] cursor-pointer md:bottom-[100px] md:h-[150px] md:w-[150px]" alt="Emergent Logo" />
        </section>
    );
};

export default FillerSection;       