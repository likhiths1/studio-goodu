import Story1 from '../assets/images/sttori1.jpg';
import Story2 from '../assets/images/sttori2.jpg';
import Story3 from '../assets/images/sttori3.jpg';
import jovo from '../assets/images/testsmall.png'
import jankal from '../assets/images/jankal.jpeg'
import sriganga from '../assets/images/sriganga.jpeg'
import GreenOverlay from '../assets/images/greenoverlay.png';
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";
import { useRef, useState, useEffect } from 'react';

export default function StoriesSection() {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollAmount = direction === 'left' ? -500 : 500;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const checkScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);
  const testimonials = [
    {
      text: '"A rare combination of creativity and precision."',
      name: "Prajwal Ramesh",
      place: "Managing Director, JANKAL Group",
      avatar: jankal
    },
    {
      text: '"A distinguished blend of design brilliance and skilled workmanship."',
      name: "Sriganga",
      place: "Sriganga Residence",
      avatar: sriganga
    },
    {
      text: "An exquisite orchestration of creativity and craftsmanship.",
      name: "Mahesh Surasgar",
      place: "Founder JÖVÖ INDIA",
      avatar: jovo
    },
  ];

  const storyImages = [Story1, Story2, Story3, Story1, Story2, Story3, Story1, Story2];

  return (
    <AnimatedSection className="w-full bg-[#FFF6ED] py-16 md:pt-[50px] md:pb-12 px-3 sm:px-8 md:px-14 font-inter min-h-[700px] md:min-h-[850px] overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        {/* Heading */}
        <AnimatedItem className="text-left">
          <h2 className="text-[3.2rem] sm:text-[3.7rem] md:text-[10rem] font-medium tracking-[-0.08em] text-black leading-none mb-8">
            NAMMA GOODU<br />
            <span className="block tracking-[-0.08em] leading-none -mt-[6px] md:-mt-[12px]">STORIES</span>
          </h2>
        </AnimatedItem>
        {/* Responsive grid for layout control */}
        <AnimatedItem delay={0.2} className="relative">
          <div className="relative group">
            {showLeftArrow && (
              <button 
                onClick={() => scroll('left')}
                className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Scroll left"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <div 
              ref={containerRef}
              className="flex overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollBehavior: 'smooth'
              }}
            >
              <div className="flex space-x-8">
                {testimonials.map((item, idx) => (
              <AnimatedItem 
                key={idx} 
                className="relative w-[350px] md:w-[400px] lg:w-[450px] flex-shrink-0 aspect-square overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.6,
                    ease: [0.16, 0.77, 0.47, 0.97],
                    delay: 0.1 * (idx % 4) 
                  }
                }}
                viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              >
                {/* Image with overlay */}
                <div className="relative w-full h-full">
                  <img
                    src={storyImages[idx % storyImages.length]}
                    alt="Story Interior"
                    className="w-full h-full object-cover object-center"
                    style={{ borderRadius: 0 }}
                    draggable={false}
                  />
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%), url(${GreenOverlay})`,
                      backgroundSize: '100% 100%',
                      backgroundBlendMode: 'overlay'
                    }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <div className="text-lg md:text-xl font-normal mb-8 leading-tight">{item.text}</div>
                      <div className="flex items-center gap-3 mt-3">
                        <img 
                          src={item.avatar} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-white" 
                          alt={item.name} 
                          draggable="false"
                        />
                        <div>
                          <span className="block font-semibold text-sm">{item.name.toUpperCase()}</span>
                          <span className="block text-xs font-light tracking-wider">{item.place}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
              </div>
            </div>
            {showRightArrow && (
              <button 
                onClick={() => scroll('right')}
                className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Scroll right"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </AnimatedItem>
        {/* CTA button */}
        <AnimatedItem delay={0.7} className="w-full flex justify-center mt-10 md:mt-14">
          <a
            href="/contact"
            className="inline-block px-8 md:px-10 py-3.5 md:py-4 bg-black text-white text-sm md:text-base font-medium tracking-wide hover:opacity-90 transition min-w-[180px] text-center"
            style={{ borderRadius: 0 }}
          >
            CONTACT US
          </a>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
