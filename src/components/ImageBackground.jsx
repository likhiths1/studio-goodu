import React from "react";

const ResponsiveImage = ({ src, alt = "", className = "" }) => {
  return (
    <div className={`relative w-full h-[60vh] md:h-[90vh] overflow-hidden ${className}`}>
      <div className="absolute inset-0 w-full h-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
};

export default ResponsiveImage;
