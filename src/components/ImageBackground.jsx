import React from "react";

const ResponsiveImage = ({ src, alt = "", className = "" }) => {
  return (
    <div className={`relative w-full h-[50vh] md:h-[80vh] overflow-hidden ${className}`}>
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ResponsiveImage;
