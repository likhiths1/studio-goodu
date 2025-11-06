import { useRef, useState, useEffect} from 'react';
import Img1 from '../assets/images/1.jpg';
import Img2 from '../assets/images/2.jpg';
import Img3 from '../assets/images/3.jpg';
import Img4 from '../assets/images/4.jpg';
import Img5 from '../assets/images/5.jpg';
import Img6 from '../assets/images/6.jpg';
import Img7 from '../assets/images/7.jpg';
import Img8 from '../assets/images/8.jpg';

const works = [
  // First row - 3 images (33.33% each)
  { 
    src: Img1, 
    row: 1, 
    size: 'w-1/3',
    title: 'Modern Living Room',
    category: 'Interior Design'
  },
  { 
    src: Img2, 
    row: 1, 
    size: 'w-1/3',
    title: 'Minimalist Kitchen',
    category: 'Interior Design'
  },
  { 
    src: Img3, 
    row: 1, 
    size: 'w-1/3',
    title: 'Cozy Bedroom',
    category: 'Interior Design'
  },
  // Second row - 2 images (50% each)
  { 
    src: Img4, 
    row: 2, 
    size: 'w-1/2',
    title: 'Elegant Dining',
    category: 'Interior Design'
  },
  { 
    src: Img5, 
    row: 2, 
    size: 'w-1/2',
    title: 'Luxury Bathroom',
    category: 'Interior Design'
  },
  // Third row - 3 images (33.33% each)
  { 
    src: Img6, 
    row: 3, 
    size: 'w-1/3',
    title: 'Modern Workspace',
    category: 'Office Design'
  },
  { 
    src: Img7, 
    row: 3, 
    size: 'w-1/3',
    title: 'Stylish Lounge',
    category: 'Interior Design'
  },
  { 
    src: Img8, 
    row: 3, 
    size: 'w-1/3',
    title: 'Outdoor Living',
    category: 'Landscape'
  }
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
    <div className="w-full bg-[#FFF6ED] py-12 md:py-16 px-4 sm:px-6 md:px-8 font-inter">
      <div className="max-w-[85rem] w-full mx-auto">
        {/* Heading + Subtitle */}
        <div className="relative flex flex-col gap-2 mb-12 md:mb-20">
          <h2 className="text-[3.2rem] sm:text-[4rem] md:text-[12rem] leading-none font-medium tracking-[-0.08em] text-black text-center md:text-left">
            OUR WORKS
          </h2>
          <div className="w-full">
            <div className="w-full md:text-right text-xs sm:text-base md:text-[1.6rem] md:leading-none text-black/80 font-regular">
              TETUR. SUSPENDISSE ORCI NISL<br />
              CONGUE EGESTAS SAGITTIS
            </div>
          </div>
        </div>

        {/* Works Grid */}
        <div className="w-full space-y-2 md:space-y-4">
          {[1, 2, 3].map((row) => {
            const rowWorks = works.filter(work => work.row === row);
            if (rowWorks.length === 0) return null;
            
            return (
              <div 
                key={row} 
                className={`flex w-full gap-2 md:gap-4 ${row === 2 ? 'px-8 md:px-16 lg:px-32' : ''}`}
              >
                {rowWorks.map((work, i) => (
                  <div 
                    key={i} 
                    className={`${work.size} relative group cursor-pointer overflow-hidden`}
                    onMouseEnter={() => startHoverTimer(work.src)}
                    onMouseLeave={clearHoverTimer}
                    onClick={() => setActiveImage(work.src)}
                  >
                    <img
                      src={work.src}
                      alt={work.title}
                      className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white text-lg font-medium">View Project</span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* View More Button */}
      </div>

      {/* Fullscreen Image Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-full max-w-6xl max-h-[90vh]">
            <img
              src={activeImage}
              alt="Fullscreen work"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(null);
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
