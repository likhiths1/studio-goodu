// src/components/BirdNestLoaderVideo.jsx

import React, { useRef, useEffect } from "react";
import video from '../assets/images/bird/video.mp4';

export default function BirdNestAnimation({ onComplete }) {
  const videoRef = useRef();

  useEffect(() => {
    const ref = videoRef.current;
    if (ref && onComplete) {
      ref.onended = onComplete;
    }
    return () => {
      if (ref) ref.onended = null;
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Video plain, with no shadow or border styling */}
      <video
        ref={videoRef}
        src={video}
        autoPlay
        muted
        playsInline
        className="w-[360px] h-[360px] object-contain bg-white"
        style={{ background: "white" }}
      />
      <div className="mt-6 flex flex-col items-center">
        <span className="uppercase text-black text-3xl md:text-5xl font-inter font-medium text-[#362e24] tracking-tight animate-pulse">
          Building your space...
        </span>
        <span className="mt-1 text-black text-lg md:text-2xl font-inter font-medium text-[#5e513a] opacity-75">
          The art of creating home — ಗೂಡು style.
        </span>
      </div>
    </div>
  );
}
