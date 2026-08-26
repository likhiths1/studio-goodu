// src/components/BirdNestLoaderVideo.jsx

import React, { useEffect, useRef, useState } from "react";
import video from "../assets/images/bird/video.mp4";

const languages = [
  { word: "ಗೂಡು", lang: "Kannada" },
  { word: "घोंसला", lang: "Hindi" },
  { word: "கூடு", lang: "Tamil" },
  { word: "గూడు", lang: "Telugu" },
  { word: "കൂട്", lang: "Malayalam" },
  { word: "Goodu", lang: "English" },
];

export default function BirdNestAnimation({ onComplete }) {
  const videoRef = useRef(null);
  const [currentLangIndex, setCurrentLangIndex] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    videoElement.onended = onComplete;

    return () => {
      videoElement.onended = null;
    };
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLangIndex((prev) => (prev + 1) % languages.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[99999] isolate flex flex-col items-center justify-center bg-white">
      <video
        ref={videoRef}
        src={video}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-[360px] h-[360px] object-contain bg-white"
      />

      <div className="mt-6 flex flex-col items-center">
        <span className="uppercase whitespace-nowrap text-3xl md:text-5xl font-inter font-medium text-[#362e24] tracking-tight">
          Building your space...
        </span>

        <span className="mt-1 whitespace-nowrap text-lg md:text-2xl font-inter font-medium text-[#5e513a] opacity-75">
          The art of creating home —{" "}
          <span className="inline-block transition-all duration-300 ease-in-out">
            {languages[currentLangIndex].word}
          </span>{" "}
          style.
        </span>
      </div>
    </div>
  );
}