import { useState } from "react";
import BgLine from "../assets/images/contactuspage/bgline.png";

export default function AboutUsSection() {
  const [revealedRows, setRevealedRows] = useState([]);
  const toggleReveal = (idx) => {
    setRevealedRows((prev) => (prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]));
  };
  const stats = [
    { number: "01+", desc: "YEARS OF CRAFT\nShaping spaces that unite \narchitecture,artistry, and emotion." },
    { number: "100+", desc: "PROJECTS DELIVERED\nFrom intimate residences to expansive spaces, each crafted with intention and precision." },
    { number: "10min", desc: "RESPONSE TIME\nDesign conversations shouldn\’t wait. \nWe\’re always within reach, always listening." },
    { number: "6+", desc: "DESIGN EXPERTS\nA multidisciplinary team of architects, \ndesigners,and dreamers, united by craft." },
    { number: "24/7", desc: "SUPPORT\nBecause great design doesn’t \nend with delivery, it evolves with you." },
  ];

  return (
    <section className="w-full bg-[#FFF6ED] py-12 px-2 sm:px-6 md:px-14 font-inter">
      <div className="max-w-[90rem] mx-auto">
        {/* Heading aligned between center and right */}
        <h2 className="text-[3.2rem] sm:text-[3.5rem] md:text-[12rem] font-medium text-black tracking-[-0.08em] leading-none mb-2 md:mb-4 text-right ml-auto mr-0 max-w-full md:max-w-[90rem]">
          ABOUT US
        </h2>
        {/* Subtitle between center and left */}
        <div className="uppercase w-full text-xs md:leading-none md:text-[1.6rem] text-[#1d1d1d] opacity-80 font-inter font-regular mb-4 md:mb-6 text-left ml-0 mr-auto max-w-full md:max-w-full">
          Designing spaces that <br /> feel as good as they look.
        </div>
        {/* Stats rows (full-bleed) */}
        <div className="flex flex-col bg-[#FFF6ED] md:mx-[-56px]">
          {stats.map((item, i) => {
            const isRevealed = revealedRows.includes(i);
            const lineTop = isRevealed ? 'calc(80% + 2px)' : 'calc(75% - 16px)';
            return (
              <div key={i} className="relative flex flex-row items-end min-h-[80px] md:min-h-[140px] pt-4 pb-6 md:pt-6 md:pb-8 md:px-14 mb-6 md:mb-10 last:mb-0">
                {/* Full-bleed divider across viewport width (animates position) */}
                <div
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 w-screen h-[1px] bg-[#969696] z-50"
                  style={{ top: lineTop, transition: 'top 300ms ease' }}
                />
                {/* Number column with overlapping divider at 25% and masked lower area */}
                <div
                  className="relative flex-1 min-w-[94px] sm:min-w-[140px] md:min-w-[180px] cursor-pointer select-none"
                  onClick={() => toggleReveal(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleReveal(i); }}
                  aria-pressed={isRevealed}
                >
                  {/* Divider positioned at 25% of the number area */}
                  <div
                    className="absolute top-[75%] w-screen -translate-x-1/3 h-[1px] bg-[#969696] z-20 opacity-0"
                  />
                  {/* Overlay from divider downwards to hide the number using bgline.png */}
                  <div
                    className={`absolute left-0 right-0 z-40 pointer-events-none transition-opacity duration-300 ease-out ${isRevealed ? 'opacity-0' : 'opacity-100'}`}
                    style={{ top: 'calc(75% + 2px)', bottom: 0, backgroundImage: `url(${BgLine})`, backgroundRepeat: 'repeat-x', backgroundPosition: 'top left', backgroundSize: 'auto 6px', backgroundColor: '#FFF6ED' }}
                  />
                  {/* The number itself */}
                  <div className="relative z-30 text-black text-[3.6rem] md:text-[5.2rem] tracking-[-0.08em] lg:text-[16rem] font-[350] leading-none">
                    {item.number}
                  </div>
                </div>
                {/* Description (right) */}
              <div className="relative z-40 flex-1 text-[0.82rem] md:text-[1.6rem] text-[#000000] text-right pt-0 mb-28 leading-snug">
                {(() => {
                  const parts = String(item.desc).split('\n');
                  const title = parts[0] || '';
                  const rest = parts.slice(1);
                  return (
                    <>
                      <span className="block font-inter font-semibold uppercase md:text-[1.8rem]">{title}</span>
                      {rest.map((line, idx) => (
                        <span key={idx} className="block font-inter font-regular normal-case">{line}</span>
                      ))}
                    </>
                  );
                })()}
              </div>
            </div>
          );})}
        </div>
      </div>
    </section>
  );
}
