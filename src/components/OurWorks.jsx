import { useEffect, useRef, useState } from 'react';
import Work1 from '../assets/images/works/1.jpg';
import Work2 from '../assets/images/works/2.jpeg';
import Work3 from '../assets/images/works/3.jpeg';
import Work4 from '../assets/images/works/4.jpeg';
import Work5 from '../assets/images/works/5.jpg';
import Work6 from '../assets/images/works/6.jpg';
import Work7 from '../assets/images/works/7.jpg';
import Work8 from '../assets/images/works/8.jpg';
import Work9 from '../assets/images/works/9.jpg';
import Work10 from '../assets/images/works/10.jpg';
import Work11 from '../assets/images/works/11.jpg';
import Work12 from '../assets/images/works/12.jpg';
import Work14 from '../assets/images/works/14.jpg';
import Work15 from '../assets/images/works/15.jpg';
import Work16 from '../assets/images/works/16.jpg';

const collage = [
  // Row 1 (left, middle, right)
  { src: Work1, style: "top-[20px] sm:top-[40px] md:top-[60px] left-[0px] sm:left-[60px] md:left-[80px] lg:left-[80px] xl:left-[120px] 2xl:left-[40px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[320px] xl:w-[460px] 2xl:w-[560px] z-10" },
  { src: Work2, style: "top-[10px] sm:top-[30px] md:top-[50px] left-[110px] sm:left-[320px] md:left-[400px] lg:left-[680px] xl:left-[940px] 2xl:left-[1000px] w-[180px] sm:w-[180px] md:w-[220px] lg:w-[300px] xl:w-[320px] 2xl:w-[360px] z-20" },
  { src: Work3, style: "top-[10px] sm:top-[30px] md:top-[50px] left-[300px] sm:left-[560px] md:left-[700px] lg:left-[1070px] xl:left-[1300px] 2xl:left-[1460px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[360px] xl:w-[420px] 2xl:w-[460px] z-10" },
  // Row 2 (staggered and denser)
  { src: Work10, style: "top-[240px] sm:top-[340px] md:top-[420px] left-[20px] sm:left-[80px] md:left-[130px] lg:left-[280px] xl:left-[360px] 2xl:left-[440px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[310px] xl:w-[360px] 2xl:w-[390px] z-20" },
  { src: Work6, style: "top-[220px] sm:top-[320px] md:top-[400px] left-[330px] sm:left-[560px] md:left-[730px] lg:left-[620px] xl:left-[780px] 2xl:left-[900px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[260px] xl:w-[340px] 2xl:w-[400px] z-10" },
  { src: Work5, style: "top-[320px] sm:top-[420px] md:top-[500px] left-[180px] sm:left-[300px] md:left-[400px] lg:left-[960px] xl:left-[1140px] 2xl:left-[1280px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[360px] xl:w-[420px] 2xl:w-[460px] z-10" },
  // Row 3 (staggered again differently)
  { src: Work7, style: "top-[680px] sm:top-[760px] md:top-[840px] left-[20px] sm:left-[90px] md:left-[170px] lg:left-[120px] xl:left-[160px] 2xl:left-[180px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[280px] xl:w-[360px] 2xl:w-[400px] z-30" },
  { src: Work9, style: "top-[620px] sm:top-[700px] md:top-[780px] left-[300px] sm:left-[600px] md:left-[810px] lg:left-[420px] xl:left-[580px] 2xl:left-[760px] w-[120px] sm:w-[150px] md:w-[170px] lg:w-[280px] xl:w-[320px] 2xl:w-[340px] z-20" },
  { src: Work8, style: "top-[580px] sm:top-[700px] md:top-[780px] left-[200px] sm:left-[320px] md:left-[410px] lg:left-[1100px] xl:left-[1300px] 2xl:left-[1440px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[320px] xl:w-[380px] 2xl:w-[420px] z-20" },
  { src: Work4, style: "top-[760px] sm:top-[820px] md:top-[900px] left-[180px] sm:left-[350px] md:left-[460px] lg:left-[880px] xl:left-[1060px] 2xl:left-[1200px] w-[120px] sm:w-[150px] md:w-[190px] lg:w-[340px] xl:w-[400px] 2xl:w-[440px] z-20" },
  // Extra fillers (reuse some images) to cover whitespace on lg/xl/2xl
  { src: Work11, style: "hidden lg:block top-[100px] left-[480px] xl:left-[580px] 2xl:left-[680px] w-[240px] xl:w-[280px] 2xl:w-[300px] z-1" },
  { src: Work12, style: "hidden lg:block top-[770px] left-[640px] xl:left-[820px] 2xl:left-[920px] w-[210px] xl:w-[250px] 2xl:w-[270px] z-10" },
  { src: Work14, style: "hidden lg:block top-[530px] left-[1220px] xl:left-[1420px] 2xl:left-[1560px] w-[200px] xl:w-[240px] 2xl:w-[260px] z-10" },
  { src: Work3, style: "hidden lg:block top-[450px] left-[40px] xl:left-[80px] 2xl:left-[100px] w-[200px] xl:w-[240px] 2xl:w-[260px] z-10" },
  { src: Work16, style: "hidden lg:block top-[800px] left-[40px] xl:left-[0px] 2xl:left-[0px] w-[220px] xl:w-[300px] 2xl:w-[330px] z-10" },
  // New filler for bottom whitespace (desktop only)
  { src: Work15, style: "hidden lg:block top-[1250px] left-[200px] xl:left-[400px] 2xl:left-[540px] w-[240px] xl:w-[280px] 2xl:w-[300px] z-10" }
];

export default function OurWorks() {
  const [activeImage, setActiveImage] = useState(null);
  const hoverTimerRef = useRef(null);

  const startHoverTimer = (src) => {
    clearHoverTimer();
    hoverTimerRef.current = setTimeout(() => setActiveImage(src), 5000);
  };
  const clearHoverTimer = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };
  const closeOverlay = () => setActiveImage(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeOverlay();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="w-full bg-[#FFF6ED] pb-8 md:pb-[80px] pt-24 px-3 sm:px-6 md:px-14 lg:px-20 xl:px-24 2xl:px-0 font-inter overflow-x-hidden">
      {/* Hover-only animations (scoped) */}
      <style>{`
        @keyframes wobbleSoft { 0%,100% { transform: translate3d(0,0,0) rotate(0); } 25% { transform: translate3d(1px,-1px,0) rotate(-0.35deg);} 50% { transform: translate3d(-1px,1px,0) rotate(0.35deg);} 75% { transform: translate3d(0.6px,-0.6px,0) rotate(-0.2deg);} }
        @keyframes squiggle { 0% { filter: drop-shadow(0 0 0 rgba(0,0,0,0)); } 50% { filter: drop-shadow(0 6px 10px rgba(0,0,0,0.22)); } 100% { filter: drop-shadow(0 0 0 rgba(0,0,0,0)); } }
        .work-hover { transition: transform 480ms cubic-bezier(.2,.9,.2,1), box-shadow 480ms, filter 480ms; will-change: transform, filter; }
        .work-hover:hover { animation: wobbleSoft 520ms ease-out, squiggle 520ms ease-out; transform: scale(1.02); box-shadow: 0 14px 34px -12px rgba(0,0,0,0.28); }
      `}</style>

      <div className="max-w-[90rem] w-full mx-auto">
        {/* Heading + Subtitle */}
        <div className="relative flex flex-col gap-2 mb-8 md:mb-16">
          {/* OUR WORKS between center and right (all breakpoints) */}
          <h2 
            className="font-inter font-medium text-[3.2rem] sm:text-[3.7rem] md:text-[4.6rem] lg:text-[12rem] md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full md:text-right lg:text-right leading-none mb-2 tracking-[-0.08em] text-black text-right ml-auto mr-0"
          >
            OUR WORKS
          </h2>
          {/* Subtitle between center and left (all breakpoints) */}
          <div className="text-xs md:text-[1.6rem] font-regular text-[#3a3532] leading-snug mt-2 text-left w-full max-w-full ml-0 mr-auto">
            TETUR. SUSPENDISSE ORCI NISL.<br />
            CONGUE EGESTAS SAGITTIS
          </div>
        </div>
        {/* Collage: desktop is block grid, but mobile/tablet unchanged */}
        <div className="relative h-[560px] sm:h-[920px] md:h-[980px] lg:h-[1650px] xl:h-[1570px] 2xl:h-[1670px] w-[400px] sm:w-[760px] md:w-[980px] lg:w-[1360px] xl:w-[1500px] 2xl:w-[1680px] mx-auto overflow-hidden lg:overflow-visible lg:translate-x-[-120px] xl:translate-x-[-180px] 2xl:translate-x-[-220px]">
          {collage.map(({ src, style }, i) => (
            <img
              key={i}
              src={src}
              alt={`work example ${i + 1}`}
              className={`absolute object-cover object-center ${style} work-hover`}
              style={{ borderRadius: 0 }}
              draggable={false}
              onMouseEnter={() => startHoverTimer(src)}
              onMouseLeave={clearHoverTimer}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen overlay when hovered for >5s */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 transition-opacity"
          onClick={closeOverlay}
        >
          <img
            src={activeImage}
            alt="Highlighted work"
            className="max-w-[92vw] max-h-[90vh] object-contain shadow-2xl"
            draggable={false}
          />
        </div>
      )}
    </section>
  );
}
