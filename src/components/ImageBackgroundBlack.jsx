import React from "react";

const ResponsiveImageBlack = ({ src, alt = "", className = "" }) => {
  return (
    <div className={`relative w-full my-12 sm:my-16 md:my-20 lg:my-24 ${className}`}>
      {/* Background Image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover max-h-screen"
      />

      {/* Overlay Box - Responsive positioning */}
      <div 
  className="absolute left-1/2 -translate-x-1/2 w-full max-w-[800px] bg-black text-white p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl"
  style={{
    bottom: 0,
    transform: 'translateX(-50%)',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem'
  }}
>
        
        {/* Upcoming Interiors Heading */}
        <h1 className="text-center font-inter font-bold text-sm sm:text-lg md:text-xl lg:text-3xl uppercase tracking-widest text-gray-300 mb-4 sm:mb-6">
          Upcoming Interiors
        </h1>

        {/* Text Content */}
        <p
          className="text-center text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 sm:mb-8 md:mb-10"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 200 }}
        >
          With meticulous attention to detail and an unwavering commitment to
          quality, we design spaces that are as exceptional as you are.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <button
            className="text-xs sm:text-sm tracking-widest uppercase border border-white px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-white hover:text-black transition-all duration-300"
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
