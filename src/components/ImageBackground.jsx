import React from "react";

const ResponsiveImage = ({ src, alt = "", className = "" }) => {
  return (
    <div
      className={`w-full flex justify-center items-center my-12 sm:my-16 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain max-h-screen"
      />
    </div>
  );
};

export default ResponsiveImage;
