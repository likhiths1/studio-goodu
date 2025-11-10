import React from "react";
import CallToActionImg from "../assets/images/snoba.jpg";
const CallToActionSection = () => {
  return (
    <section className="w-full bg-black py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="w-full">
            <img
              src={CallToActionImg}
              alt="Interior Design"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center space-y-8 lg:pl-8">
            {/* Heading */}
            <h2
              className="text-white text-4xl sm:text-5xl md:text-6xl leading-tight"
              style={{ fontFamily: "Playfair Display, sans-serif", fontWeight: 300 }}
            >
              Ready to elevate
              <br />
              your space?
            </h2>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4">
              <a
                href="/services"
                className="text-white text-sm sm:text-base tracking-wide uppercase underline pb-2 hover:text-gray-300 transition-colors duration-300 inline-block"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
              >
                View Services
              </a>
              <a
                href="/portfolio"
                className="text-white text-sm sm:text-base tracking-wide uppercase underline pb-2 hover:text-gray-300 transition-colors duration-300 inline-block"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
              >
                Browse Our Portfolio
              </a>
              <a
                href="/team"
                className="text-white text-sm sm:text-base tracking-wide uppercase underline pb-2 hover:text-gray-300 transition-colors duration-300 inline-block"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
              >
                Meet Our Team
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
