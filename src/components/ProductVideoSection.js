import React, { useState, useRef } from 'react';

const ProductVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const videoUrl = "https://www.youtube.com/embed/jF0WZu6r4KQ";

  return (
    <section className="py-[150px] px-4">
      <div className="text-center">
        <p className="font-ndot text-[14px] uppercase tracking-[1.4px] text-white/50">Product Video</p>
        <span className="mt-4 block bg-gradient-to-r from-white to-[#81FF89] bg-clip-text text-center text-[30px] font-medium text-transparent md:text-[36px]">
          See Emergent in Action
        </span>
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto mt-10 max-w-[1200px] h-[275px] md:h-[600px] rounded-[20px] bg-[#1A1A1A] p-3 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsPlaying(true)}
      >
        <iframe
          src={isPlaying ? `${videoUrl}?autoplay=1` : videoUrl}
          title="YouTube video player"
          className="h-full w-full rounded-[20px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ pointerEvents: isPlaying ? 'auto' : 'none' }}
        ></iframe>

        {!isPlaying && isHovered && (
          <div
            className="absolute flex items-center justify-center whitespace-nowrap rounded-full bg-white px-5 py-1 font-semibold text-black transition-opacity duration-200"
            style={{ left: mousePosition.x, top: mousePosition.y, transform: 'translate(-50%, -50%)', zIndex: 9999 }}
          >
            Watch Film
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-2 h-5 w-5"><path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" fill="black" stroke="black" strokeWidth="2"></path><path d="M8 10V7.22L12.8 10L8 12.78V10Z" fill="white"></path></svg>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductVideoSection;