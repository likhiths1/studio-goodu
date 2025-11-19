// src/components/BirdNestLoaderVideo.jsx
import React, { useRef, useEffect, useState } from "react";
import video from '../assets/images/bird/video.mp4';

const languages = [
  { word: "ಗೂಡು", lang: "Kannada" },
  { word: "घोंसला", lang: "Hindi" },
  { word: "கூடு", lang: "Tamil" },
  { word: "గూడు", lang: "Telugu" },
  { word: "കൂട്", lang: "Malayalam" },
  { word: "Goodu", lang: "English" }
];

export default function BirdNestAnimation({ onComplete }) {
  const videoRef = useRef();
  const [currentLangIndex, setCurrentLangIndex] = useState(0);

  useEffect(() => {
    const ref = videoRef.current;
    if (ref && onComplete) {
      ref.onended = onComplete;
    }
    return () => {
      if (ref) ref.onended = null;
    };
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLangIndex((prev) => (prev + 1) % languages.length);
    }, 800); // Change language every 800ms

    return () => clearInterval(interval);
  }, []);

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
          The art of creating home — <span className="inline-block transition-all duration-300 ease-in-out transform">{languages[currentLangIndex].word}</span> style.
        </span>
      </div>
    </div>
  );
}
