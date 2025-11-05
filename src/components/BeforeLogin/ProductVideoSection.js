import React, { useState } from 'react';

const ProductVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const videoUrl = "https://player.vimeo.com/video/1122907754?autopause=0&loop=0";
  const thumbnailUrl = "https://cdn.prod.website-files.com/68d6459227d5920422431709/68daecca9c6aba97838a91bf_screen-hero-alt.avif";
  const playIconUrl = "https://cdn.prod.website-files.com/68d6459227d5920422431709/68d86a61a85cb5aa3673c61b_6f638497a4cb3a9e2dc4220b892640bb_icon-play.svg";

  return (
    // The main section now has a dark background to match the new design
    <section className="bg-black py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="video-container rounded-2xl overflow-hidden">
          {/* Play Button and Label */}
          <div
            className={`play-button-container ${isPlaying ? 'hide' : ''}`}
            onClick={handlePlay}
          >
            <div className="button-play">
              <img src={playIconUrl} loading="eager" alt="Play Icon" />
            </div>
            <div className="label-play">Watch 1 min demo</div>
            <div className="button-blur"></div>
          </div>

          {/* Video Iframe Wrapper */}
          <div className={`video-wrapper-outer ${isPlaying ? 'show' : ''}`}>
            <div className="video-wrapper">
              {isPlaying && (
                <iframe
                  id="myVimeo"
                  src={`${videoUrl}&autoplay=1`}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* Thumbnail Image */}
          <div className={`thumbnail-wrapper ${isPlaying ? 'hide' : ''}`}>
            <img
              src={thumbnailUrl}
              loading="eager"
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVideoSection;