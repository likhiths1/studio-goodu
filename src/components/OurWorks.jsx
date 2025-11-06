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

const works = [
  // Row 1 - 3 images (33.33% each)
  { src: Work1, row: 1, size: 'w-1/3' },
  { src: Work2, row: 1, size: 'w-1/3' },
  { src: Work3, row: 1, size: 'w-1/3' },
  
  // Row 2 - 2 images (50% each)
  { src: Work4, row: 2, size: 'w-1/2' },
  { src: Work5, row: 2, size: 'w-1/2' },
  
  // Row 3 - 3 images (33.33% each)
  { src: Work6, row: 3, size: 'w-1/3' },
  { src: Work7, row: 3, size: 'w-1/3' },
  { src: Work8, row: 3, size: 'w-1/3' },
  
  // Additional images for larger screens
  { src: Work9, row: 4, size: 'w-1/2' },
  { src: Work10, row: 4, size: 'w-1/2' },
  
  { src: Work11, row: 5, size: 'w-1/3' },
  { src: Work12, row: 5, size: 'w-1/3' },
  { src: Work14, row: 5, size: 'w-1/3' },
  
  { src: Work15, row: 6, size: 'w-1/2' },
  { src: Work16, row: 6, size: 'w-1/2' }
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
        <div className="w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
            {Array.from(new Set(works.map(work => work.row))).map(row => (
              <div key={row} className="flex flex-wrap -mx-2">
                {works
                  .filter(work => work.row === row)
                  .map(({ src, size }, i) => (
                    <div key={`${row}-${i}`} className={`px-2 mb-4 ${size}`}>
                      <div className="overflow-hidden rounded-lg aspect-video">
                        <div className="h-full w-full overflow-hidden">
                          <img
                            src={src}
                            alt={`work example ${row}-${i + 1}`}
                            className="w-full h-full object-cover work-hover"
                            style={{
                              border: '1px solid #f0f0f0',
                              boxSizing: 'border-box',
                              imageRendering: 'crisp-edges',
                              backfaceVisibility: 'hidden',
                              transform: 'translateZ(0)'
                            }}
                            draggable={false}
                            onMouseEnter={() => startHoverTimer(src)}
                            onMouseLeave={clearHoverTimer}
                            onClick={() => setActiveImage(src)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
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
              style={{
                border: '2px solid #fff',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.1)',
                imageRendering: 'crisp-edges',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
              draggable={false}
            />
          </div>
        )}
      </div>
    </section>
  );
}
