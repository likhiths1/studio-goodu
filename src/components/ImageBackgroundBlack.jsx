import React from "react";

const ResponsiveImageBlack = ({ src, alt = "", className = "" }) => {
  return (
    <div className={`relative w-full my-12 sm:my-16 ${className}`}>
      {/* Background Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover max-h-screen"
      />

      {/* Overlay Box - Centered, 1.2x size, half on/half off image */}
      <div className="absolute h-full left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-black text-white p-10 sm:p-12 md:p-14 lg:p-16 w-[336px] sm:w-[384px] md:w-[432px] shadow-2xl">
        {/* Chair Icon */}
        <div className="flex justify-center mb-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 sm:w-16 sm:h-16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
            <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
            <path d="M5 18v3" />
            <path d="M19 18v3" />
          </svg>
        </div>

        {/* Text Content */}
        <p
          className="text-center text-base sm:text-lg leading-relaxed mb-9"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 200 }}
        >
          With meticulous attention to detail and an unwavering commitment to
          quality, we design spaces that are as exceptional as you are.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <button
            className="text-xs sm:text-sm tracking-[0.2em] uppercase border border-white px-7 py-3.5 hover:bg-white hover:text-black transition-colors duration-300"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            View Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveImageBlack;
