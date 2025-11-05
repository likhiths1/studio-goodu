import { useState } from "react";
import BgLine from "../assets/images/contactuspage/bgline.png";

export default function AboutUsSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const stats = [
    { number: "01+", desc: "YEARS OF CRAFT\nShaping spaces that unite \narchitecture,artistry, and emotion." },
    { number: "100+", desc: "PROJECTS DELIVERED\nFrom intimate residences to expansive spaces, each crafted with intention and precision." },
    { number: "10min", desc: "RESPONSE TIME\nDesign conversations shouldn’t wait. \nWe’re always within reach, always listening." },
    { number: "6+", desc: "DESIGN EXPERTS\nA multidisciplinary team of architects, \ndesigners,and dreamers, united by craft." },
    { number: "24/7", desc: "SUPPORT\nBecause great design doesn’t \nend with delivery, it evolves with you." },
  ];

  return (
    <section className="w-full bg-[#FFF6ED] py-12 px-2 sm:px-6 md:px-14 font-inter">
      <div className="max-w-[90rem] mx-auto">
        {/* Heading */}
        <h2 className="text-[3.2rem] sm:text-[3.5rem] md:text-[12rem] font-medium text-black tracking-[-0.08em] leading-none mb-2 md:mb-4 text-right">
          ABOUT US
        </h2>
        {/* Subtitle between center and left */}
        <div className="uppercase w-full text-xs md:leading-none md:text-[1.6rem] text-[#1d1d1d] opacity-80 font-inter font-regular mb-4 md:mb-6 text-left ml-0 mr-auto max-w-full md:max-w-full">
          Designing spaces that <br /> feel as good as they look.
        </div>

        {/* Stats */}
        <div className="flex flex-col bg-[#FFF6ED] md:mx-[-56px]">
          {stats.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                className={`relative flex flex-row items-end min-h-[100px] md:min-h-[160px] pt-6 pb-10 md:pt-8 md:pb-14 md:px-14 mb-10 last:mb-0 transition-all duration-300 ease-in-out ${
                  isActive ? "bg-[#fff2e0]" : "bg-[#FFF6ED]"
                }`}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Full-width line */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-screen h-[1px] bg-[#969696] z-50 transition-all duration-300 ease-out ${
                    isActive ? "top-[85%]" : "top-[75%]"
                  }`}
                />

                {/* Number area */}
                <div className="relative flex-1 min-w-[120px] md:min-w-[200px] cursor-pointer select-none">
                  {/* Divider overlay */}
                  <div
                    className={`absolute left-0 right-0 z-40 pointer-events-none transition-opacity duration-500 ease-out ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                    style={{
                      top: "calc(75% + 2px)",
                      bottom: 0,
                      backgroundImage: `url(${BgLine})`,
                      backgroundRepeat: "repeat-x",
                      backgroundPosition: "top left",
                      backgroundSize: "auto 6px",
                      backgroundColor: "#FFF6ED",
                    }}
                  />

                  {/* Animated Number */}
                  <div
                    className={`relative z-30 text-black tracking-[-0.08em] font-[350] leading-none transition-all duration-300 ease-in-out ${
                      isActive
                        ? "text-[6rem] md:text-[10rem] translate-y-[-10px] opacity-100"
                        : "text-[5rem] md:text-[7rem] opacity-70"
                    }`}
                  >
                    {item.number}
                  </div>
                </div>

                {/* Description */}
                <div
                  className={`relative z-40 flex-1 text-[0.9rem] md:text-[1.6rem] text-[#000000] text-right transition-all duration-300 ease-in-out ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-60 translate-y-[6px]"
                  }`}
                >
                  {(() => {
                    const parts = String(item.desc).split("\n");
                    const title = parts[0] || "";
                    const rest = parts.slice(1);
                    return (
                      <>
                        <span className="block font-semibold uppercase md:text-[1.8rem] mb-1">
                          {title}
                        </span>
                        {rest.map((line, idx) => (
                          <span
                            key={idx}
                            className="block font-normal normal-case leading-snug"
                          >
                            {line}
                          </span>
                        ))}
                      </>
                    );
                  })()}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
